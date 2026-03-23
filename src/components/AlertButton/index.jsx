import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('エラーが発生しました')
  }

  return (
    <button className={styles.button} onClick={handleAlert}>
      Alert
    </button>
  )
}
