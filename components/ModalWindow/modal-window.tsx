import styles from './modal-window.module.scss'
import { IResponseData } from '@/pages/enlist/calendar/enlist-form'
import { useRouter } from 'next/router';

interface ModalWindowProps {
  data: IResponseData | null | undefined;
  loading: boolean;
  error: any
}

export default function ModalWindow({ data, loading, error }: ModalWindowProps) {

  const router = useRouter()
  let date = ''
  if (data) {
    date = new Date(Number(data!.createEntry.date)).toLocaleDateString()
  }

  const redirect = () => {
    router.push('/enlist/calendar')
  }

  return (
    <div className={styles.modal}>
      <div className={styles.layout}>
        {data &&
          <div className={styles.info}>
            <p className={styles.message}>Вы успешно записались на</p>
            <p className={`${styles.message} ${styles.message_type_number}`}>
              {data.createEntry.time} {date}
            </p>
          </div>
        }
        {loading &&
          <div className={styles.loader}>
            <span className={styles.loader__element}></span>
            <span className={styles.loader__element}></span>
            <span className={styles.loader__element}></span>
          </div>
        }
        {error &&
          <div className={styles.info}>
            <p className={`${styles.message} ${styles.message_type_error}`}>
              Не удалось записаться. Попробуйте позже или выберите другой вариант записи.
            </p>
          </div>
        }
      </div>
      <button className={styles.button} onClick={redirect}>ОК</button>
    </div>
  )
}