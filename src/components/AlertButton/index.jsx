import styles from './index.module.css';

export const AlertButton = () => {
	const handleClick = () => {
		alert('よりより美味しい');
	};

	return (
		<button className={styles.button} onClick={handleClick}>
			Alert
		</button>
	);
};
