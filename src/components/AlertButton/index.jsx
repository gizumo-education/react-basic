import styles from "./index.module.css";

const handleAlert = () => {
  alert("hoge");
};

export const AlertButton = () => {
  return (
    <button onClick={handleAlert} className={styles.button}>
      Alert
    </button>
  );
};
