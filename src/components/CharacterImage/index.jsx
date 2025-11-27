import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {

  axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
   
    setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
  })

}, [])

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )


}

// return文以外の処理は副作用
//falseの時はレンダーされない
//再レンダリングで画面が更新される


