import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Адрес салона:</h3>
        <p className={styles.adress}>
        Краснодар. ул. 40 лет Победы 37/1
        <br />
        <span> помещение салона &quot;Адам и Ева&quot;</span>
      </p>
      </div>
      <div className={styles.container}>
      <h3 className={styles.heading}>Телефон:</h3>
        <a href='tel:89883670897' className={styles.contact}>8 (988) 367-08-97</a>
      </div>
      <div className={styles.groups}>
        <a className={styles.group} href='#' target='_blanc'>группа VK</a>
        <a className={styles.group} href='#' target='_blanc'>Instagram</a>
      </div>
      <p className={styles.copyright}>© Студия Илоны Измайловой, 2023</p>
    </footer>
  )
}