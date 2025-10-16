import styles from "./index.module.css";

export const AlertButton = () => (
  <button className={styles.button} onClick={() => alert("fuga piyo")}>
    Alert
  </button>
);
