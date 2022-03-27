import React from 'react'
import './navbar.sass'
import 'react-icons/fa'
import { useState } from 'react'
import { AiOutlineHome , AiOutlineUser} from 'react-icons/ai'
import {BiBook , BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'


const Navbar = () => {
  const [ActiveNav , setActiveNav] = useState('#')
  return (
    <div className='navbar' >
      <div className='main'>
        <a href="#about"  onClick={()=> setActiveNav('#about')} className={ActiveNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={ActiveNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <a href="#" onClick={()=> setActiveNav('#')} className={ActiveNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#projects"  onClick={()=> setActiveNav('#projects')} className={ActiveNav === '#projects' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={ActiveNav === '#contacts' ? 'active' : ''}><BiMessageSquareDetail /></a>
      </div>
    </div>
  )
}

export default Navbar