import styles from './index.module.css'
import { useState } from 'react'

// export const InputField = () => {
//   let value = '';

//   return (
//     <>
//       <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
//       <p>入力文字：{value}</p>
//     </>
//   )
// }

export const InputField = () => {
  const [text, setText] = useState('')
  const handelInput = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <input onChange = {handelInput} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{text}</p>
    </>
  )
}