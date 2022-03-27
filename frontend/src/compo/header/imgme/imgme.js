import React from 'react'
import './imgme.sass'
import sanityClient  from '../../../client'
import { useEffect , useState } from 'react'

const Imgme= ()=>{

      
  const [mainImg, setHeader] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "header"]{imageurl{asset->{url}}}')
      .then(
        (data) => {
          setHeader(data[0].imageurl.asset.url)
        })
  },[]);
  
  return (

    <div>
        <button type="button" className="btn btn-outline-primary btn1">Get CV</button>
        <button type="button" className="btn btn-primary btn2">let's talk</button>
        <img src={mainImg} className='me' alt="loding" />
        
    </div>
  )
}

export default Imgme