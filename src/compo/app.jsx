import React from 'react'
import Header from './header/header'
import About from './about/about'
import Achievement from './achievement/achievement'
import Contacts from './contacts/contacts'
import Futter from './futter/futter'
import Navbar from './nav/navbar'

export const app = () => {
  return (
    <>
      <Header/>
      <About />
      <Achievement/>
      <Contacts/>
      <Futter/>
      <Navbar/>
    </>
  )
}

export default app