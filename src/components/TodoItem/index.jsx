import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  return isToday ? ( //isTodayがtrueなら以下を処理
    //↓<li>タグに.nameのクラスを付与して、{name}を表示。{isCompleted} が true なら ✔︎ を追加、false なら何も追加しない
  <li className={styles.name}>{name} {isCompleted ? '✓' : ''}
  </li>) : null; //isTodayがfalseなら何も表示しない(null)
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

