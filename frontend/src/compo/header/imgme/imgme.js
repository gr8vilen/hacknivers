import React from 'react'
import './imgme.sass'
import { urlFor, client }  from '../../../client'
import { useEffect , useState } from 'react'

const Imgme= ()=>{

      
  const [mainImg, setHeader] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "header"]{imageurl{asset->{url}}}')
      .then(
        (data) => {
          setHeader(data[0].imageurl.asset.url)
        })
  },[]);
  
  return (

    <div>
        <img src={mainImg} className='me' alt="loding" />
        
    </div>
  )
}

export default Imgme