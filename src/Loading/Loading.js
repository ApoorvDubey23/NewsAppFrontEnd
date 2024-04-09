import React from 'react'
import loading from './Ajax-loader.gif'
function Loading() {
  return (
    <div className='text-center w-[100%] flex justify-center items-center'>
      <img  src={loading} alt="a"/>
    </div>
  )
}

export default Loading
