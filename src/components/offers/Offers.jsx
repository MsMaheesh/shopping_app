import React from 'react'
import image from '../../asse/offer-img.png'
import './offers.css'
function Offers() {
  return (
    <div  className='offers'>
        <div className='offers-left'>
           <h1>Exclusive</h1>
           <h1>Offers for you</h1>
           <p>ONLY ON BEST SELLERS PRODUCTS</p>
           <button>Check Now</button>
        </div>
        <div className='offers-right'>
           <img src={image}></img>
        </div>
    </div>
  )
}

export default Offers