import styles from './index.module.css'

export const AlertButton = () => {
  return <button className={styles.button} onClick={handleClick}>Alert</button>
}

const handleClick = () => {
  alert('onClick Triggerd!');
}
