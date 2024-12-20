import styles from './index.module.css'

export const AlertButton = () => {
   const handleAlert = () => {
    alert('本当に押していいんですか、、、？')
  }
  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
