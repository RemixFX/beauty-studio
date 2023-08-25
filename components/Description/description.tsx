import Image from 'next/image'
import styles from './description.module.scss'
import logo from '@/public/lib/logo/logo_type2.png'
import master from '@/public/lib/home/master.png'

export default function Description() {
  return (
    <section className={styles.section} id='services'>
      <div className={styles.left_block_mobile}>
        <h1 className={styles.title}>Студия<br />перманентного макияжа<br />Илоны Измайловой</h1>
        <blockquote className={styles.quote}>&#34;Каждая девушка достойна...
          <span className={styles.quote__parth}> ...быть красивой&#34;</span>
        </blockquote>
        <ul className={styles.description_mobile}>
          <li className={styles.element}>
            <span className={styles.mnemonic}>&#10003; </span>
            Сертифицированный мастер перманентного макияжа
            </li>
          <li className={styles.element}>
          <span className={styles.mnemonic}>&#10003; </span>
            Гарантия качественного и стойкого результата
            </li>
          <li className={styles.element}>
          <span className={styles.mnemonic}>&#10003; </span>
            5 лет практики и 3000 довольных клиентов
            </li>
          <li className={styles.element}>
          <span className={styles.mnemonic}>&#10003; </span>
            Сертифицированные пигменты класса Люкс
          </li>
        </ul>
      </div>
      <div className={styles.right_block_mobile}>
        <Image src={master} alt="мастер перманентного макияжа" className={styles.master} />
        <div className={styles.image_layout}>
        <Image src={logo} alt="студия перманентного макияжа" className={styles.logo} />
        </div>
      </div>
      <div className={styles.bottom_block_mobile}>
        <p className={styles.about}>что мы можем сделать для Вас:</p>
        <ul className={styles.services}>
          <li className={styles.service}>
            <a href='#brows' className={styles.link}>Перманентный макияж бровей</a>
          </li>
          <li className={styles.service}>
            <a href='#lips' className={styles.link}>Перманентный макияж губ</a>
          </li>
          <li className={styles.service}>
            <a href='#eyelashes' className={styles.link}>Перманентный макияж век</a>
          </li>
          <li className={styles.service}>
            <a href='#correction' className={styles.link}>Коррекция перманентного макияжа</a>
          </li>
          <li className={styles.service}>
            <a href='#overlap' className={styles.link}>Перекрытие татуажа</a>
          </li>
        </ul>
      </div>
    </section>
  )
}