import React from 'react'
import '../../nav/navbar.sass'
import 'react-icons/fa'
import { useState } from 'react'
import { AiOutlineHome , AiOutlineUser , AiOutlineProject} from 'react-icons/ai'
import {BiBook , BiMessageSquareDetail} from 'react-icons/bi'
import {Link} from "react-router-dom"


const Navbar1 = () => {
  const [ActiveNav , setActiveNav] = useState('#')
  return (
    <div className='navbar' >
      <div className='main'>
        
        <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={ActiveNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <Link to="/">
        <a href="/" onClick={()=> setActiveNav('/')} className={ActiveNav === '/' ? 'active' : ''}><AiOutlineHome /></a>
        </Link>
        <a href="#projects"  onClick={()=> setActiveNav('#projects')} className={ActiveNav === '#projects' ? 'active' : ''}><AiOutlineProject /></a>
        
      </div>
    </div>
  )
}

export default Navbar1