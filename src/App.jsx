import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button' //s4練習問題
import { Profile } from './components/Profile'//s5練習問題
import { Country } from './components/Country'//s6練習問題
import { Card } from './components/Card'//s6練習問題の2

export const App =()=> {
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
      <Card>
        <Country
          info={{
          imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
          name: 'アメリカ'
        }} />
      </Card>

    </div>
  )
}