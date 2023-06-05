import styles from './enlist-form.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
// @ts-ignore
import InputMask from '@mona-health/react-input-mask'
import { ServicesEnum } from '@/types/IServices'
import { useEffect, useMemo } from 'react'
import { servicesData } from '@/config/servicesData'
import { ParsedUrlQuery } from 'querystring'

type EnlistFormProps = {
  closeForm: () => void
  query: ParsedUrlQuery
  /* submitForm: (value: string) => void */
}

interface IFormInput {
  service: ServicesEnum | ParsedUrlQuery[string];
  category: string | ParsedUrlQuery[string];
  name: string;
  phone: string;
}

export default function EnlistForm({ closeForm, query }: EnlistFormProps) {

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      service: query.service ? query.service : ServicesEnum.brows,
      category: '',
      name: '',
      phone: '',
    },
  })
  const watchServiceField = watch('service')

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const category = useMemo(() => {
    return servicesData.find((service) => service.name === watchServiceField)?.categories
  }, [watchServiceField])

  useEffect(() => {
    if (category) {
      setValue('category', query.category ? query.category : category[0].name)
    } else { 
      setValue('category', '')
    }
  }, [category, query.category, setValue])

  console.log(query)

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.field}>Услуга</label>
        <select className={`${styles.input} ${styles.select}`} {...register('service')}>
          {servicesData.map((service) =>
            <option key={service.name} value={service.name}>- {service.heading}</option>
          )}
        </select>
        {category &&
          <>
            <label className={styles.field}>Категория</label>
            <select className={`${styles.input} ${styles.select}`} {...register("category")}>
              {category.map((category) =>
                <option key={category.name} value={category.name}>- {category.heading}</option>
              )}
            </select>
          </>
        }
        <label className={styles.field}>Имя</label>
        <input className={styles.input} type='text' {...register("name", { required: true })} />
        <span className={styles.error}>{errors.name && 'необходимо ввести имя'}</span>
        <label className={styles.field}>Телефон</label>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputMask mask='+7\ (999) 999-99-99' {...field} className={styles.input} />
          )}
        />
        <span className={styles.error}>{errors.phone && 'необходимо ввести номер телефона'}</span>
        <button className={styles.button}>Записаться</button>
        <span className={styles.close} onClick={closeForm}></span>
      </form>
      <p className={styles.info}>После записи, с Вами свяжется мастер что бы
        рассказать об оплате, а также дать рекомендации для подготовки к процедуре.</p>
    </div>
  )
}
