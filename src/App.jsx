import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button';
import { Profile } from './components/Profile';
import { Country } from './components/Country';
import { Card } from './components/Card';
import { TodoItem } from './components/TodoItem';
import { LanguageList } from './components/LanguageList';
import { AlertButton } from './components/AlertButton';

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

        <hr/>
        {/* section6 練習問題1 Countryを表示 */}
        <Country
            info={{
                imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
                name: 'アメリカ'
            }}
        />

        <hr/>
        {/* section6 練習問題2 Countryを表示 */}
        <Card>
            <Country
                info={{
                    imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
                    name: 'アメリカ'
                }}
            />
        </Card>

        <hr/>
        {/* section7 練習問題2 条件付きレンダー */}
        <ul>
            <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
            <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
            <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
        </ul>

        <hr/>
        {/* section8  リストレンダー */}
        <LanguageList/>

        <hr/>
        {/* section9  イベントハンドラ */}
        <AlertButton/>
        </div>
    );
};
