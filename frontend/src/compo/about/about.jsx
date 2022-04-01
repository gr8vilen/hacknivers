import React from 'react'
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { urlFor, client }  from '../../client'

import {VscFolderLibrary} from 'react-icons/vsc'
import './about.sass'

const About = () => {
  const [imgLinks, setImgLinks] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "header"]{imageurl{asset->{url}}}')
      .then(
        (data) => {
          setImgLinks(data[1].imageurl.asset.url)
        })
  },[]);
  
  const[aboutdata , setaboutdata ] = useState([])

  useEffect(() => {
    if(aboutdata == []){
      console.log('getting data')
    }else{
      client
        .fetch('*[_type == "about"]').then((data)=>{setaboutdata(data[0])})
    }
  }, [])
  
  // console.log(aboutdata)

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
              <small>{aboutdata.experience}</small>
           </article>
           <article className="about__card">
             <VscFolderLibrary className='about__icon'/>
             <h5>projects</h5>
              <small>{aboutdata.projects}</small>
           </article>
           <article className="about__card hid_m">
             <FiUsers className='about__icon'/>
             <h5>clints</h5>
              <small>{aboutdata.clints}</small>
           </article>
           </div>
          <p>
            {aboutdata.name}
          </p>

          <Link to="/p/aboutme">
          </Link>
         </div>
      </div>

      </div> 
    </>
  )
}

export default About