import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('これが表示されれば成功!!')
  }

  return (
    <button className={styles.button} onClick={handleAlert}>
      Alert
    </button>
  )
}