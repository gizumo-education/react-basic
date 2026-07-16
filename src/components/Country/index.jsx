import styles from "./index.module.css";
import PropTypes from "prop-types";

export const Country = ({ info, width = 120, height = 80 }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  );
};

Country.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};
