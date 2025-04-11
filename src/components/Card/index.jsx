import PropTypes from 'prop-types'
import styles from './index.module.css'

export const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <card>
        {children}
      </card>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}
