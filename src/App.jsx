import reactLogo from './assets/react.svg'
import React from 'react';
import styles from './App.module.css'


export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']}/>
      <h1>Welcome React!</h1>
      <p>React Lessonへようこそ</p>
    </div>
  )
};