import React from 'react'
import Header from './header/header'
import Navbar from '../../nav/navbar'
import Exp from './exp/exp'
import Cirt from './cirt/cirt'
import {motion} from 'framer-motion'

function Aboutme() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0 }}
    >
      <Header/>
      <Exp/>
      <Cirt/>
      <Navbar/>
    </motion.div> 
  )
}

export default Aboutme