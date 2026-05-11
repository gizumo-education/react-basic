import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  const checkMark = isCompleted ? '✔︎': '';
  return isToday && <li className={styles.name}>{name} {checkMark}</li>;
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}
