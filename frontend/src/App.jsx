import React from 'react'
import Navbar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Register from './pages/Register'

const App = () => {

  const location = useLocation() ;

  return (
    <>
    {
      location.pathname !== '/register' && <Navbar/>
    }
    

    <div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/projects' element ={<Projects/>}/> 
        <Route path='/contact' element ={<Contact/>}/> 
        <Route path='/register' element ={<Register/>}/> 
      </Routes>

    </div>
     {
      location.pathname !== '/register' && <Footer/>
    }
    </>
    
  )
}

export default App