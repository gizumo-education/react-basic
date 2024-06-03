import styles from './index.module.css'

export const LanguageList = () => {
  const languages = [
    { id: 1, name: 'HTML', imgUrl: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { id: 2, name: 'JavaScript', imgUrl: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { id: 3, name: 'TypeScript', imgUrl: 'https://img.icons8.com/color/48/typescript.png' },
  ]

  return (
    <>
      {
        languages.map((languages) => ( 
        <ul key ={languages.id} className={styles.wrapper}>
      <li className={styles.item}>
      <img src={languages.imgUrl} />
      <p>{languages.name}</p>
      </li>
    </ul>
        ))
      }
    </>
  )
}
