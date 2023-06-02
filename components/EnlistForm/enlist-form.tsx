import styles from './enlist-form.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import InputMask from '@mona-health/react-input-mask'
import { ICategoriesOfServices, IServices, ServicesEnum } from '@/types/IServices'
import { useEffect, useMemo } from 'react'
import { servicesData } from '@/config/servicesData'

type EnlistFormProps = {
  closeForm: () => void
  /* submitForm: (value: string) => void */
}

interface IFormInput {
  service: ServicesEnum;
  category: string;
  name: string;
  phone: string;
}

export default function EnlistForm({ closeForm }: EnlistFormProps) {

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      service: ServicesEnum.brows,
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
      setValue('category', category[0].name)
    } else {
      setValue('category', '')
    }
  }, [category, setValue])

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.field}>Услуга</label>
        <select className={`${styles.input} ${styles.select}`} {...register("service")}>
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
