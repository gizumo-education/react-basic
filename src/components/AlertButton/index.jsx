import styles from './index.module.css'

export const AlertButton = () => {
  return <button onClick={() => alert('Alertがクリックされました')} className={styles.button}>Alert</button>
}
