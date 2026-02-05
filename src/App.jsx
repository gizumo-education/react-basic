import reactLogo from './assets/react.svg'
import styles from './App.module.css'

import Button from './components/Button/index'
import { Profile } from './components/Profile'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      <hr />
      { /* Section 4 */ }
      <Button /><Button /><Button />
      
      <hr />
      { /* Section 5 */ }
      <Profile />
    </div>
  )
}
