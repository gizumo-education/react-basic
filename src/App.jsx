import reactLogo from './assets/react.svg'
import styles from './App.module.css'
//Section4 named importしてるよ
import { Button } from './components/Button/index'
//Section5 
import { Profile } from './components/Profile/index'

export const App = () => {
  return (
    <div>
<img src={reactLogo} className={styles['react-logo']} />
<h1>Hello React!</h1>
{/* 以下に練習問題の回答を記述してください */} 
<hr />
<Button/><Button/><Button/>
<hr />
<Profile/>
</div>
  )
}

