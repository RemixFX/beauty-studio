import styles from './nav-button.module.scss'

type NavProps = {
  isOpen: boolean;
  handleToggle: () => void;
}

export default function NavButton ({handleToggle, isOpen}: NavProps) {

  return (
    <button className={styles.button} onClick={handleToggle}>
      <span className={`${styles.element} ${isOpen ? styles.element_open : ''}`}></span>
      <span className={`${styles.element} ${isOpen ? styles.element_open : ''}`}></span>
      <span className={`${styles.element} ${isOpen ? styles.element_open : ''}`}></span>
    </button>
  )
}