import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')

  useEffect (() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) => {
      const url =res.data.sprites.other['official-artwork']['front_default']
      console.log(url) 
      setImgUrl(url)
  })
},[])

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}
