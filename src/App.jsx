import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'


      {/* 以下に練習問題の回答を記述してください */}
      
export const App = () => {
   return (
      <div>
         <img src={reactLogo} className={styles['react-logo']} />
         <h1>Hello React!</h1>

         <hr />
         <div className={styles['btn_style']}>
            <Button />
            <Button />
            <Button />
         </div>


      </div>
   )
}

