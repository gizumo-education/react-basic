import styles from './index.module.css'

// export default function Button() {
//   return (
//     <button className={styles.button}>Button</button>
//   )
// }

// named exportに変更
export function Button() {
  return (
    <button className={styles.button}>Button</button>
  );
}
