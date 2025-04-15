import styles from './index.module.css'

export const AlertButton = () => {
  const Alert = () => {
    alert('こんにちワンダフル、今日も1日頑張るニャン！')
  }

  return <button onClick={Alert} className={styles.button}>Alert</button>
}
