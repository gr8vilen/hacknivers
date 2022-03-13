import db from '../../firebase';
import React from 'react';
import './header.css';
const data = db.collection('headder')
console.log(data)

const header = () => {
  return (
    <div className='container header__main '>
      <p className='mar0 ptop'>wellcome to </p>
      <div className="wrapper">
        <h1 className='mar0 typing-demo'>Hackniverse</h1>
      </div>
    </div>
  )
}

export default header