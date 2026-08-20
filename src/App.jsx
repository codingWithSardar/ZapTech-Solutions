import React from 'react'
import Navbar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {

  return (
    <>
    <Navbar/>

    <div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/projects' element ={<Projects/>}/> 
        <Route path='/contact' element ={<Contact/>}/> 
      </Routes>

    </div>
    <Footer/>
    </>
    
  )
}

export default App