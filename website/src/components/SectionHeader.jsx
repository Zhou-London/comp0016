import styles from '../App.module.css'

export default function SectionHeader({ title, subtitle }) {
  return (
    <header className={styles.sectionHeader}>
      <p className={styles.sectionLabel}>Documentation</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  )
}
