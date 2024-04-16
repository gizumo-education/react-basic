import reactLogo from './assets/react.svg'
import styles from './App.module.css'

{/* 以下に練習問題の回答を記述してください */}
import { Button } from './components/Button';
import { Profile } from './components/Profile';
import { Country } from './components/Country';
import { Card } from './components/Card';

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>
      <hr />
      {/* <!-- Buttonコンポーネントのタグをここに3つ記述 --> */}
      <Button />
      <Button />
      <Button />
      <hr />
      {/* <!-- Profileコンポーネントのタグをここに記述 --> */}
      <Profile />
      <hr />
      {/* <!-- CardコンポーネントとCountryコンポーネントのタグをここに記述 --> */}
      <Card>
      <Country
      info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}
    /></Card>
    </div>
  )
};
