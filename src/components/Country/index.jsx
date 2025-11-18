import PropTypes from 'prop-types'
import styles from './index.module.css'

export const Country = ({ info , width , height }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

// デフォルト値を設定
Country.defaultProps = {
  width: 120,
  height: 60
}

// propsの型を定義する
Country.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  width: PropTypes.number,
  height: PropTypes.number,
}