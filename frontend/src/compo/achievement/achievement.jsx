import React from 'react'
import './achievement.sass'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const achievement = () => {
  return (
    <div className='experience' id='experience'>
      <p className='cen1'>Skills I Have </p>
      <h2  className='cen'>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h4>Frontend Development</h4>
          <div className="experience__content">
            <article className='experience__details'>

              <BsFillPatchCheckFill/>
             <div>
             <h4 >HTML</h4>
              <small className='text-light'>EXPERIENCED </small>
             </div>
            </article> 
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4 >CSS</h4>
              <small className='text-light'>EXPERIENCED </small>
              </div>
              </article>
            <article className='experience__details'>
              
            <BsFillPatchCheckFill className='experience__details-icon'/>
              
             <div>
             <h4 >JAVASCRIPT </h4>
              <small className='text-light'>EXPERIENCED </small>
             </div>
              </article>
            <article className='experience__details'>
              
            <BsFillPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4 >BOOTSTRAP</h4>
              <small className='text-light'>INTERMEDIATE </small>
              </div>
              </article>
              <article className='experience__details'>

              <BsFillPatchCheckFill className='experience__details-icon'/>

            <div>
            <h4 >TAILWINDCSS</h4>
              <small className='text-light'>INTERMEDIATE </small>
            </div>
              </article>

          </div>
        </div>
        <div className="experience__backend">
          <h4>Backend Development</h4>
          <div className="experience__content">
          <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4 >Node Js</h4>
                  <small className='text-light'>BEGINNER </small>
                </div>
                 
              </article>
              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4 >MongoDb</h4>
                 <small className='text-light'>BEGINNER </small>
                </div>
              </article>
              <article className='experience__details'>
              
              <BsFillPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4 >JAVASCRIPT </h4>
              <small className='text-light'>EXPERIENCED </small>
              </div>
              </article>
              <article className='experience__details'>
                 <BsFillPatchCheckFill/>
                <div>
                <h4 >Python</h4>
                 <small className='text-light'>BEGINNER </small>
                </div>
              </article>

          </div>
              
        </div>

      </div>

    </div>
  )
}

export default achievement