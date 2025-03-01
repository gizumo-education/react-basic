import styles from "./index.module.css";

export const AlertButton = () => {
  const handleClick = () => {
    alert("hoge");
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Alert
    </button>
  );
};
