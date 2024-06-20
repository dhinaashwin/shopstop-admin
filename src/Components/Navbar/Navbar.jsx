import React from 'react'
import avtImg from '../../assests/images/AvImg.jpg'
import shopBag from '../../assests/images/Shopping-Bag.jpg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar flex h-auto justify-between px-10 py-5'>
      <div className='flex'>
      <img src={shopBag} className='w-12' alt="" srcset="" />
    <div className='flex items-center font-b'> 
     <h2>Admin panel</h2>
    </div>
    </div>
    <img src={avtImg} alt="" className="rounded-full w-10" srcset="" />
    
    </div>
  )
}

export default Navbar