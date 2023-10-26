import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.container}>
        <h3 className={styles.heading}>Адрес салона:</h3>
        <p className={styles.adress}>
          Краснодар, Фестивальный микрорайон, ул. Гагарина 135
          <br />
          <span> помещение салона &quot;Like&quot;</span>
        </p>
      </div>
      <div className={styles.container}>
        <h3 className={styles.heading}>Телефон:</h3>
        <a href='tel:89883670897' className={styles.contact}>8 (988) 367-08-97</a>
      </div>
      <h3 className={styles.heading}>Новости в соцсетях:</h3>
      <div className={styles.groups}>
        <a className={styles.group} href='https://vk.com/tatooagekrd' target='_blanc'>
          <span className={`${styles.logo} ${styles.logo_vk}`}></span>
          группа VK
        </a>
        <a className={styles.group} href='https://instagram.com/ilonka.master.pm' target='_blanc'>
          <span className={`${styles.logo} ${styles.logo_ig}`}></span>
          Instagram
        </a>
      </div>
      <p className={styles.copyright}>© Студия Илоны Измайловой, 2023</p>
    </footer>
  )
}