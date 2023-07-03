/* eslint-disable react-hooks/exhaustive-deps */
import styles from '@/styles/enlist-form.module.scss'
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
// @ts-ignore
import InputMask from '@mona-health/react-input-mask'
import { ServicesEnum } from '@/types/IServices'
import InputsGroup from '@/components/InputsGroup/inputs-group'
import { useRouter } from 'next/router'
import Head from 'next/head'
import RadioGroup from '@/components/RadioGroup/radio-group'
import useDate from '@/hooks/useDate'
import { ICalendarQuery } from '../calendar'
import { START_WORK, END_WORK, DURATION_OF_SERVICE } from '@/config/calendar.config'
import { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { postEntries } from '@/api/entries'
import client from '@/apollo-client'
import ModalWindow from '@/components/ModalWindow/modal-window'

export interface IFormInput {
  time: string;
  services: {
    service: string
    category: string;
  }[];
  name: string;
  phone: string;
}

export interface IResponseData {
  createEntry: {
    date: string;
    time: string;
  }
}

interface EntryInput {
  name: string,
  phone: string,
  service: ServicesEnum | ICalendarQuery['service'];
  category: string | ICalendarQuery['category'];
  date: string;
  time: string,
}

export default function EnlistForm() {

  const router = useRouter()
  const query = router.query as ICalendarQuery
  const [graphqlPostEntries, { data, loading, error }] = useMutation<IResponseData, EntryInput>(postEntries, { client });
  const { getAvailableTime } = useDate()

  const formatQueryParameters = () => {
    let closedTime: string[] = []
    if (typeof query.closedTime === 'string') {
      closedTime.push(query.closedTime)
    }
    if (Array.isArray(query.closedTime)) {
      closedTime = query.closedTime
    }
    return closedTime
  }

  const closedTime = formatQueryParameters()
  const times = getAvailableTime(closedTime, START_WORK, END_WORK, DURATION_OF_SERVICE)
  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      time: '',
      services:
        [{
          service: query.service ? query.service : ServicesEnum.brows,
          category: '',
        }],
      name: '',
      phone: '',
    },
  })

  const { fields, append, remove } = useFieldArray({
    name: "services",
    control
  });
  const addInputs = () => append({ service: ServicesEnum.brows, category: '' })
  const closeInputs = (index: number) => remove(index)

  const watchServiceField = watch('services')
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const sortedData: EntryInput[] = data.services.map((service, index) => {
      return {
        name: data.name,
        phone: data.phone,
        service: service.service,
        category: service.category,
        date: query.dateString,
        time: (parseInt(data.time) + (index * DURATION_OF_SERVICE)).toString().padStart(2, '0') + ":00",
      }
    })
    sortedData.map((entry) => graphqlPostEntries({
      variables: {
        name: entry.name,
        phone: entry.phone,
        service: entry.service,
        category: entry.category,
        date: entry.date,
        time: entry.time
      }
    }))
  }

  const closeForm = () => {
    router.push({
      pathname: '/enlist/calendar',
      query: query,
    }, '/enlist/calendar')
  }

  useEffect(() => {
    if (!query.day) {
      closeForm()
    }
  }, [query.day])


  return (
    <>
      <Head>
        <title>Запись на процедуру</title>
      </Head>
      {(data || loading || error) && <ModalWindow data={data} loading={loading} error={error} />}
      <h1 className={styles.header}>Записаться на {query.day} {query.month}</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.group_header}>Доступные даты:</h2>
        <div className={styles.radio}>
          {times.map((time) =>
            <RadioGroup register={register} key={time} value={time} />
          )}
        </div>
        <span className={styles.error}>{errors.time && 'необходимо выбрать время'}</span>
        <div className={styles.select}>
          {fields.map((field, index) => <InputsGroup key={field.id} register={register} setValue={setValue} index={index}
            watchServiceField={watchServiceField[index].service} query={query}
            closeInputs={closeInputs} />
          )}
        </div>
        <button type="button" className={styles.append}
          onClick={addInputs}>
          добавить услугу
        </button>
        <label className={styles.field}>Имя</label>
        <input className={styles.input} type='text' {...register('name', { required: true })} />
        <span className={styles.error}>{errors.name && 'необходимо ввести имя'}</span>
        <label className={styles.field}>Телефон</label>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputMask mask='+7\ (999) 999-99-99' {...field} className={styles.input} />
          )} />
        <span className={styles.error}>{errors.phone && 'необходимо ввести номер телефона'}</span>
        <button className={styles.submit}>Записаться</button>
        <span className={styles.close} onClick={closeForm}></span>
      </form><p className={styles.info}>После записи, с Вами свяжется мастер что бы
        рассказать об оплате, а также дать рекомендации для подготовки к процедуре.</p>
    </>

  )
}
