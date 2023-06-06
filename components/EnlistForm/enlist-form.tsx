import styles from './enlist-form.module.scss'
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
// @ts-ignore
import InputMask from '@mona-health/react-input-mask'
import { ServicesEnum } from '@/types/IServices'
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

  const addInputs = () => append({ service: ServicesEnum.brows, category: '' })
  const closeInputs = (index: number) => remove(index)

  const watchServiceField = watch('services')

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) =>
          <InputsGroup key={field.id} register={register} setValue={setValue} index={index}
            watchServiceField={watchServiceField[index].service} query={query}
             closeInputs={closeInputs} />
        )}
        <button type="button" className={styles.append}
          onClick={addInputs}>
          добавить услугу
        </button>
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
        <button className={styles.submit}>Записаться</button>
        <span className={styles.close} onClick={closeForm}></span>
      </form>
      <p className={styles.info}>После записи, с Вами свяжется мастер что бы
        рассказать об оплате, а также дать рекомендации для подготовки к процедуре.</p>
    </div>
  )
}
