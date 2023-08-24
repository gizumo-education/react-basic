import styles from './index.module.css'
import PropTypes from 'prop-types'

// Countryコンポーネント(子)
export const Country = ({info,width,height}) => {
  return (
    <div>
      <img
        src={info.imgUrl}
        width={width}
        height={height}
      />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.PropTypes = {
  info:PropTypes.exact({
    imgUrl:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  }).isRequired,
  width:PropTypes.number,
  height:PropTypes.number
}

