import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Header from './header/header'
import About from './about/about'
import Achievement from './achievement/achievement'
import Contacts from './contacts/contacts'

import Navbar from './nav/navbar'
import Background from './background/background'
import Projects from './projects/projects'
import Aboutme from './pages/aboutme/aboutme'

export const app = () => {
  return (
    <Router>
      <Background/> 
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Achievement />
            <Projects />
            <Contacts />
            <Navbar/>
          </>
        } />
        <Route path='/p/aboutme' element={
          <>
            <Aboutme/>
          </>
        }/>
      </Routes>
      

    </Router>
  )
}

export default app