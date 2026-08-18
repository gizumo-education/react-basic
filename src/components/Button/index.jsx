import styles from './index.module.css'

export default function Button() {
  return (
    <button className={styles.button}>Button</button>
  )
}
 export const Button_A = () => {
  return(
    Button()
  )
}; 
