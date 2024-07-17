import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import {Profile} from './components/Profile/index'
import { Country } from './components/Country'
import { Card } from './components/Card'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}
      <hr />
      <Button />
      <Button />
      <Button />

      <hr />
      <Profile />

      <hr />
      <Country info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}/>

      <hr />
      <Card>
        <Country info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}/>
      </Card>
    </div>
  )
}
