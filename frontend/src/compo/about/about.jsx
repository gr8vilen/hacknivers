import React from 'react'
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import sanityClient  from '../../client'

import {VscFolderLibrary} from 'react-icons/vsc'
import './about.sass'

const About = () => {
  const [imgLinks, setImgLinks] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "header"]{imageurl{asset->{url}}}')
      .then(
        (data) => {
          setImgLinks(data[1].imageurl.asset.url)
        })
  },[]);
  
  return (
    <>
      <div className="about" id='about'>
        <p className='cen1'>Get To Know</p>
        <h2  className='cen'>About me</h2>

        <div className="container about__container">
         <div className="about__me">
            <div className="about__me-img">
              <img src={imgLinks} alt="up coming" />
            </div>
         </div>
         <div className="about__content">
           <div className="about__cards">
           <article className="about__card">
             <FaAward className='about__icon'/>
             <h5>experience</h5>
              <small>1+ years</small>
           </article>
           <article className="about__card">
             <VscFolderLibrary className='about__icon'/>
             <h5>projects</h5>
              <small>20+</small>
           </article>
           <article className="about__card hid_m">
             <FiUsers className='about__icon'/>
             <h5>clints</h5>
              <small>10+</small>
           </article>
           </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi accusamus maiores quod incidunt? Dolor, sapiente, non expedita id necessitatibus tenetur delectus, vel soluta eligendi repellendus saepe omnis consequatur placeat!
          </p>

          <Link to="/p/aboutme">
          <button  className='btn btn-outline-primary btn1'>
          know more..
          </button>
          </Link>
         </div>
      </div>

      </div> 
    </>
  )
}

export default About