import { useState } from 'react'
import styles from './index.module.css'

export const InputField = () => {

  const [value, setValue] = useState('');
  const handleStr = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <input onChange={handleStr} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )

  // let value = ''

  // return (
  //   <>
  //     <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
  //     <p>入力文字：{value}</p>
  //   </>
  // )
}
