import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Services from './components/Services'


const App = () => {
  return (
    <div className='bg-[#1a1a29] max-w-12xl mx-auto'>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
