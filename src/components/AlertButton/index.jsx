import styles from './index.module.css'

export const AlertButton = () => {
  return <button onClick={() => alert("よくできました💮")} className={styles.button}>Alert</button>
}
