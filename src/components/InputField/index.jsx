import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [inputValue,setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };



  return (
    <>
      <input
        onChange={handleInputChange}
        value={inputValue}
        className={styles.input}
        placeholder='任意の文字を入力' />
      <p>入力文字：{inputValue}</p>
    </>
  )
}
