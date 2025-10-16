import styles from './index.module.css'

export const AlertButton = () => {
  const onClickAlert = () => {
    alert("hoge");
  };

  return (
    <button className={styles.button} type="button" onClick={onClickAlert}>
      Alert
    </button>
  );
}
