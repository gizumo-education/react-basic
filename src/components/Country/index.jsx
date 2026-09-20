import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({info, width, height, Customstyles = styles}) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={Customstyles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  Customstyles: PropTypes.object
}
Country.defaultProps = {
  width: 120,
  height: 80
}