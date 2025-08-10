import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


function Navbar({setInput}) {
    //  const naviga=useNavigate()

  return (
    <div className='bg-amber-300'>

      <input type="text"  onChange={(e)=>{setInput(e.target.value)}} className='my-3 bg-white' />
      {/* <button onClick={()=>(naviga('/'))}>click</button> */}
    </div>
  )
}

export default Navbar
