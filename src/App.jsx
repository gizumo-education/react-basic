import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Profile } from './components/Profile'
import { Card } from './components/Card' 
import { Country } from './components/Country'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']}></img>
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}
      <hr />
      {/*-- Buttonコンポーネントのタグをここに3つ記述 --*/}
      <Button />
      <Button />
      <Button />

    <hr />
    {/*!-- Profileコンポーネントのタグをここに記述 --*/}
      <Profile />

    <hr />
    {/*!-- CardコンポーネントとCountryコンポーネントのタグをここに記述 --*/}
      <Card>
      <Country />
      </Card>
     </div>
  )
}



