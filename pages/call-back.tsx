// @ts-ignore
import InputMask from '@mona-health/react-input-mask'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from '@/styles/call-back.module.scss'
import Head from 'next/head'
import { useRouter } from 'next/router';

interface FormInput {
  name: string;
  phone: string;
}

export default function CallBack() {

  const router = useRouter()
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormInput>({
    defaultValues: {
      name: '',
      phone: ''
    }
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  const closeForm = () => {
    router.push('/enlist')
  }

  return (
    <>
      <Head>
        <title>Оставить номер телефона</title>
      </Head>
      <section className={styles.content}>
      <h1 className={styles.header}>Оставить номер телефона</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        <button className={styles.submit}>Отправить</button>
        <span className={styles.close} onClick={closeForm}></span>
      </form>
      <p className={styles.info}>
        С Вами свяжется мастер, что бы ответить на все Ваши вопросы.
      </p>
      </section>
    </>
  )
}