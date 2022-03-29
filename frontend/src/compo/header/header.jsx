import React from 'react';
import { useState , useEffect} from 'react';
import './header.css';
import { urlFor, client }  from '../../client'
import Imgme from './imgme/imgme'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram , BsFillArrowUpRightSquareFill} from 'react-icons/bs'


const Header = () => {
  const [Links, setLinks] = useState("#");

  useEffect(() => {
    client
      .fetch('*[_type == "links"]')
      .then(
        (data) => {
          setLinks(data)
        })
  },[]);

  return (
    <div className='container header__main '>
      <p className='mar0 ptop'>hello i'm </p>
      <div className="wrapper">
        <h1 className='mar0 typing-demo'>Dhiraj kumar </h1>
      </div>
      <p className='mar0 ptop1'>Fullstack developer</p>
      <div className="sa">
        <a href={Links[0].github_url}><AiFillGithub  className='a__headder'/></a>
        <a href={Links[0].inst_url}><BsInstagram className='a__headder'/></a>
        <a href=""><BsFillArrowUpRightSquareFill className='a__headder'/></a>
      </div>
      <div>
        <a href="#about" className="scd">Scroll Down</a>
      </div>
      <Imgme/>
    </div>
  )
}

export default Header