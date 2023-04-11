import styles from './description.module.scss'

export default function Description() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Студия татуажа<br />Илоны Измайловой</h1>
      <blockquote className={styles.quote}>&#34;Каждая девушка достойна...
        <span className={styles.quote__parth}> ...быть красивой&#34;</span>
      </blockquote>
      <p className={styles.about}>узнайте больше:</p>
      <ul className={styles.description}>
        <li className={styles.service}>
          <a href='#brows' className={styles.link}>Перманентный татуаж бровей</a>
        </li>
        <li className={styles.service}>
          <a href='#lips' className={styles.link}>Татуаж губ</a>
        </li>
        <li className={styles.service}>
          <a href='#eyelashes' className={styles.link}>Татуаж ресниц</a>
        </li>
      </ul>
    </section>
  )
}