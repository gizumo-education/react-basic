import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import Button from './components/Button'

export function App() {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      <hr />
    {/* Buttonコンポーネントのタグをここに3つ記述 */}
      <Button />
        <Button />
        <Button />
      
    </div>
  )

} 