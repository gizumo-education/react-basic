import styles from "./index.module.css";

export const AlertButton = () => {
  const handleAlert = () => {
    alert("Hello!");
  };
  return (
    <button onClick={handleAlert} className={styles.button}>
      Alert
    </button>
  );
};
