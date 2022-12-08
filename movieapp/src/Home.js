import React, { useContext } from 'react'
import { AppContext } from './context'

const Home = () => {
  const name = useContext(AppContext);
  return (
    <div>home   {name}</div>
  )
}

export default Home