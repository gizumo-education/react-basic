import styles from './index.module.css'

export const AlertButton = () => {
  const handleClick = () => {
    alert("アラートが発生しました");
  };
  return <button className={styles.button}
  onClick={handleClick}>
    Alert
  </button>
}
