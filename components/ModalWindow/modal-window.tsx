import styles from './modal-window.module.scss'
import { ApolloError } from '@apollo/client';
import { useRouter } from 'next/router';

interface ModalWindowData {
  id?: string;
  date?: string;
  time?: string;
}

interface ModalWindowProps {
  data: ModalWindowData | undefined
  loading: boolean;
  error: ApolloError | undefined;
  errorMessage: string;
}

const parseData = (date: string) => new Date(Number(date)).toLocaleDateString()

export default function ModalWindow({ data, loading, error, errorMessage }: ModalWindowProps) {

  const router = useRouter()

  const redirect = () => {
    router.push('/enlist/calendar')
  }

  return (
    <div className={styles.modal}>
      <div className={styles.layout}>
        {data?.date &&
          <div className={styles.info}>
            <p className={styles.message}>Вы успешно записались на</p>
            <p className={`${styles.message} ${styles.message_type_number}`}>
              {data.time} {parseData(data.date)}
            </p>
          </div>
        }
        {data?.id &&
          <p className={`${styles.message} ${styles.message_align}`}>
            Заявка успешно отправлена
          </p>
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
              {error.networkError ? errorMessage : error.message}
            </p>
          </div>
        }
      </div>
      <button className={styles.button} onClick={redirect}>ОК</button>
    </div>
  )
}