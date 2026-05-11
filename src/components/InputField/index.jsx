import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [value, setValue] = useState('')
  const handleInput = (inputValue) =>{
    setValue(inputValue)
  }
  return (
    <>
      <input onChange={(e) => handleInput(e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
