import styles from './description.module.scss'

export default function Description() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Студия татуажа<br />Илоны Измайловой</h1>
      <blockquote className={styles.quote}>&#34;Каждая девушка достойна...
        <span className={styles.quote__parth}> ...быть красивой&#34;</span>
      </blockquote>
      <div className={styles.photo}></div>
      <p className={styles.about}>что мы можем сделать для Вас:</p>
      <ul className={styles.description}>
        <li className={styles.service}>
          <a href='#brows' className={styles.link}>Татуаж бровей</a>
        </li>
        <li className={styles.service}>
          <a href='#lips' className={styles.link}>Татуаж губ</a>
        </li>
        <li className={styles.service}>
          <a href='#eyelashes' className={styles.link}>Татуаж век</a>
        </li>
        <li className={styles.service}>
          <a href='#correction' className={styles.link}>Коррекция татуажа</a>
        </li>
        <li className={styles.service}>
          <a href='#overlap' className={styles.link}>Перекрытие татуажа</a>
        </li>
      </ul>
    </section>
  )
}