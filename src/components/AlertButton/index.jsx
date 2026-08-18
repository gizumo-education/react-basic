import styles from './index.module.css'

export const AlertButton = () => (
  <button 
    onClick={() => alert('ボタンが押されました.yournext')}
    className={styles.button}
  >
    Alert
  </button>
)
