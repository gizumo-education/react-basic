import reactLogo from './assets/react.svg';
import styles from './App.module.css';
import Button from './components/Button/index.jsx';
import Profile from './components/Profile/index.jsx';
import {Country} from './components/Country/index.jsx';
import { Card } from './components/Card'
import {TodoItem} from './components/TodoItem/index.jsx'
import {LanguageList} from './components/LanguageList/index.jsx'
import {AlertButton} from './components/AlertButton/index.jsx'
import {InputField} from './components/InputField/index.jsx'
import {CharacterImage} from './components/CharacterImage/index.jsx'


export const App = () => {
  {/*props問２*/}
  const countryInfo = {
    imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
           name: 'アメリカ'
  }
  return(
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Reactの練習問題</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <hr />
      {/*!-- Buttonコンポーネントのタグをここに3つ記述 --*/}

      <div>
        <Button />
        <Button />
        <Button />

      <hr />
      {/*!-- Profileコンポーネントのタグをここに記述 -->*/}
      <Profile />
      <hr />

      <hr />
       {/*<!-- CardコンポーネントとCountryコンポーネントのタグをここに記述 -->*/}
       {/*prop問1*/}
       {/*<Country
         info={{
          imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
          name: 'アメリカ'
         }}
         width={120}
         height={80}
         />*/}

       {/*問２*/}
      <Card>
        <Country info={countryInfo} width={120} height={80} />
      </Card>

      <hr />
        {/*<!-- ulタグとTodoItemコンポーネントのタグをここに記述 -->*/}
      <ul>
        <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
        <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
        <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
      </ul>

      <hr />
        {/*<!-- LanguageListコンポーネントのタグをここに記述 -->*/}
      <LanguageList />

      <hr />
        {/*<!-- AlertButtonコンポーネントのタグをここに記述 -->:*/}
      <AlertButton/>

      <hr />
        {/*<!-- InputFieldコンポーネントのタグをここに記述 -->*/}
      <InputField/> 

      <hr />
        {/*<!-- CharacterImageコンポーネントのタグをここに記述 -->*/}
      <CharacterImage/>
      </div>
    </div>
    
 
  );
};
export default App;



