import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  return isToday && <li className = {styles.name}>{name} {isCompleted && '✔︎'}</li>
  // 最初にすべての条件が通った時のコードを書き、そこから条件が追加された場合を考えて書く
  // ① return <li className = {styles.name}>{name}</li>
  // ② return isToday && <li className = {styles.name}>{name}</li> ← isTodayの条件式を書く
  // ③ return isToday && <li className = {styles.name}>{name} {isCompleted && '✔︎'}</li> ← isCompletedの条件式を書く
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

// isTodayがtrueのとき、Todo名を表示。isTodayがfalseのとき、Todo名を非表示。

// isTodayがtrueで isTodayがtrueのとき、✓を文字列をつなげて表示する。isTodayがfalseのとき、✓は付けないで文字列を表示。
