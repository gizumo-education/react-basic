import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button_A } from './components/Button/index.jsx'
import { Profile } from './components/Profile/index.jsx'
import { Country } from './components/Country/index.jsx'
import { Card } from './components/Card/index.jsx'
    
  export const App = () => {
    return(
      <div>
        <img src={reactLogo} className={styles['react-logo']} />
        <h1>Hello React!</h1>
        {/* 以下に練習問題の回答を記述してください */} 
        <hr />
        {/*!-- Buttonコンポーネントのタグをここに3つ記述 --*/}
        <footer>
          <Button_A /><Button_A /><Button_A />
        </footer>
        <hr />
        {/*!-- Profileコンポーネントのタグをここに記述 --*/}
        <Profile/>
        {/*!-- Propsコンポーネント --*/}
        <hr />
        <Card>
          <Country
            info = {
              {
                imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
                name: 'アメリカ'
              }
            }
          />
        </Card>
      </div>
    )
  }  