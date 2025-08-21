import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button';
import { Profile } from './components/Profile';

export const App = () => {
    return (
        <div>
         <img src={reactLogo} alt="" className={styles['react-logo']}/>
         <h1>Hello React!</h1>

         {/* 以下に練習問題の回答をしてください */}

         <hr />
         {/* section4 Buttonのコンポーネントタグを３つ追加 */}
        <Button />
        <Button />
        <Button />

        <hr />
        {/* section5 Profileを表示 */}
        <Profile/>
        </div>
    );
};
