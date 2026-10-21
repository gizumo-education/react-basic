import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button' //s4練習問題
import { Profile } from './components/Profile'//s5練習問題
import { Country } from './components/Country'//s6練習問題
import { Card } from './components/Card'//s6練習問題の2
import { TodoItem } from './components/TodoItem'//s7練習問題
import { LanguageList } from './components/LanguageList'//s8練習問題
import { AlertButton } from './components/AlertButton'//s9練習問題
import { InputField } from './components/InputField'//s10練習問題
import { CharacterImage } from './components/CharacterImage'//s11練習問題

export const App =()=> {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

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

      <hr />
      <ul>
        <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
        <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
        <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
      </ul>

      <hr />
      <LanguageList />

      <hr />
      <AlertButton />

      <hr />
      <InputField />

      <hr />
      <CharacterImage />

    </div>
  )
}