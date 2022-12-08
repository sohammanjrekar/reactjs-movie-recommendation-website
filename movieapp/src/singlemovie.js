import React from 'react'
import { useParams } from 'react-router-dom'

const Singlemovie = () => {
    const { id }=useParams();
  return (
    <>
    <div>singlemovie  {id}</div>
    </>
  )
}

export default Singlemovie