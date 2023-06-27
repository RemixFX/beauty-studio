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

export interface IFormInput {
  time: string;
  services: {
    service: ServicesEnum | ICalendarQuery['service'];
    category: string | ICalendarQuery['category'];
  }[];
  name: string;
  phone: string;
}

export default function EnlistForm() {

  const router = useRouter()
  const query = router.query as ICalendarQuery
  const { getAvailableTime } = useDate()
  const closedTime = query.closedTime ? query.closedTime : []
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

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
      <h1 className={styles.header}>Записаться на {query.day} {query.month}</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.group_header}>Доступные даты:</h2>
        <div className={styles.radio}>
          {times.map((time) => 
            <RadioGroup register={register} key={time} value={time} />
          )}
        </div>
        {fields.map((field, index) => <InputsGroup key={field.id} register={register} setValue={setValue} index={index}
          watchServiceField={watchServiceField[index].service} query={query}
          closeInputs={closeInputs} />
        )}
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
