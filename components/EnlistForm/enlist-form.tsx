import styles from './enlist-form.module.scss'
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
// @ts-ignore
import InputMask from '@mona-health/react-input-mask'
import { ServicesEnum } from '@/types/IServices'
import { useEffect, useMemo } from 'react'
import { servicesData } from '@/config/servicesData'
import { ParsedUrlQuery } from 'querystring'
import InputsGroup from '../InputsGroup/inputs-group'

type EnlistFormProps = {
  closeForm: () => void
  query: ParsedUrlQuery
  /* submitForm: (value: string) => void */
}

export interface IFormInput {
  services: {
    service: ServicesEnum | ParsedUrlQuery[string];
    category: string | ParsedUrlQuery[string];
  }[];
  name: string;
  phone: string;
}

export default function EnlistForm({ closeForm, query }: EnlistFormProps) {

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
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

  const watchServiceField = watch('services')

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) =>
          <InputsGroup key={field.id} register={register} setValue={setValue} index={index}
            watchServiceField={watchServiceField[index].service} query={query} />
        )}
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
        <button type="button"
          onClick={() => append({service: ServicesEnum.brows,category: ''})}>
            добавить услугу
        </button>
        <button type="button"
          onClick={() => remove(length)}>
            удалить услугу
        </button>
      </form>
      <p className={styles.info}>После записи, с Вами свяжется мастер что бы
        рассказать об оплате, а также дать рекомендации для подготовки к процедуре.</p>
    </div>
  )
}
