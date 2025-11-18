import styles from './index.module.css'
import PropTypes from 'prop-types'

// propsを受け取れるようにする
export const Country = ( { info, width, height }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}


//propsの型の定義
Country.propTypes = {
  info: PropTypes.exact({
    imgUrl:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}


//propsのデフォルト値を設定
Country.defaultProps = {
  width: 120,
  height: 80
}
