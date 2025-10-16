import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import Button from './components/Button'
import { Profile } from './components/Profile'
import { Country } from "./components/Country";
import { Card } from "./components/Card";
import { TodoItem } from "./components/TodoItem";
import { LanguageList } from './components/LanguageList'
import { AlertButton } from './components/AlertButton';
import { InputField } from './components/InputField';
import { CharacterImage } from './components/CharacterImage';

export const App =() => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

    <hr />
    {/* Section 4: Buttonコンポーネントのタグをここに3つ記述 */}
      <Button />
      <Button />
      <Button />

    <hr />
    {/* Section 5: Profileコンポーネントのタグをここに記述 */}
      <Profile />

    <hr />
    {/* Section 6: CardコンポーネントとCountryコンポーネントのタグをここに記述 */}
      <Card>
        <Country
          info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
          }}
        />
      </Card>

    <hr />
    {/* Section 7: ulタグとTodoItemコンポーネントのタグをここに記述 */}
    <ul>
      <TodoItem name="Reactの学習" isToday={true} isCompleted={true} />
      <TodoItem name="HTMLの復習" isToday={true} isCompleted={false} />
      <TodoItem name="React Hooksの予習" isToday={false} isCompleted={false} />
    </ul>

    <hr />
    {/* Section 8: LanguageListコンポーネントのタグをここに記述 */}
    <LanguageList />

    <hr />
    {/* Section 9: AlertButtonコンポーネントのタグをここに記述 */}
    <AlertButton />

    <hr />
    {/* Section 10: InputFieldコンポーネントのタグをここに記述 */}
    <InputField />

    <hr />
    {/* Section 11: CharacterImageコンポーネントのタグをここに記述 */}
    <CharacterImage />
      
    </div>
  )
} 