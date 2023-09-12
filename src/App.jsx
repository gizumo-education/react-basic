import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button';
import { Profile } from './components/Profile';
import { Country } from './components/Country';
import { Card } from './components/Card';
import { TodoItem } from './components/TodoItem';
import { LanguageList } from './components/LanguageList';
import { AlertButton } from './components/AlertButton';
import { InputField } from './components/InputField';
import { CharacterImage } from './components/CharacterImage';


    
    export const App = () => {
      return (
        <div>
          <img src={reactLogo} className={styles['react-logo']} />
          <h1>Hello React!</h1>
          <hr />
          <Button className={styles.button}>Button</Button>
          <Button className={styles.button}>Button</Button>
          <Button className={styles.button}>Button</Button>
          <hr />
          <Profile/>
          <hr />
          <Card >
            <Country info={{imgUrl:'https://www.civillink.net/sozai/kokki100/pics2654.gif',name:'アメリカ'}}/>
          </Card>
          <hr />
          <ul>
           <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
           <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
           <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
          </ul>
          <hr />
          <LanguageList></LanguageList>
          <hr />
          <AlertButton></AlertButton>
          <hr />
          <InputField></InputField>
          <hr />
          <CharacterImage></CharacterImage>
        </div>
      )
    };
  
    
