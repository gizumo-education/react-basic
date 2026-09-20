import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [value, setValue] = useState('');
  const hanldeInputChange = (e) => {
    return setValue(e.target.value);
  }

  return (
    <>
      <input
        onChange={hanldeInputChange}
        className={styles.input}
        placeholder='任意の文字を入力'
        value={ value }
      />
      <p>入力文字：{value}</p>
    </>
  )
}
