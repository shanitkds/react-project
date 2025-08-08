import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Home from './component/home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './component/About'
import Navbar from './component/Navbar'
// import { useState } from 'react'


function App() {
    const [input, setInput] = useState('')


  return (
    <>
     <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home input={input} setInput={setInput}/>}/>
         <Route path='/about/:index' element={<About/>}/>
         <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
