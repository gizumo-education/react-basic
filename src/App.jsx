import reactLogo from './assets/react.svg'
import styles from './App.module.css'

import Button from './components/Button/index'
import { Profile } from './components/Profile'
import { Country } from './components/Country'
import { Card } from './components/Card'

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

      <hr />
      { /* Section 6 */ }
      <Card>
        <Country 
            info={{
              imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
              name: 'アメリカ',
            }}
            width={120}
            height={80}
        />
      </Card>
    </div>
  )
}
