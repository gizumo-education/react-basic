import PropTypes from 'prop-types'
import styles from './index.module.css'


export const Country = ({imgInfo,width,height}) => {
  return (
    <div>
      <img src={imgInfo.imgUrl}
        width={width}
        height={height} />
      <p className={styles.name}>
        {imgInfo.name}
      </p>
    </div>
  )
}

Country.propTypes = {
  imgInfo: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

Country.defaultProps = {
  width: 120,
  height: 80
}