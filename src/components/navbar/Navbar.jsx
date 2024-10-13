import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaFacebook, FaInstagram, FaShoppingCart, FaTimes, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {  FaPerson } from 'react-icons/fa6'
const Navbar = () => {
const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (

    <div className='nav text-white fixed w-full backdrop-blur-md  '>
      <div className='flex md:justify-normal justify-between flex-row-reverse items-center  gap-2 z-[5] cursor-pointer md:w-[auto] w-full'>
        {
         toggle ?<FaTimes  onClick={handleToggle} className='text-gray-200 md:hidden block' size={22}/>:  <FaBars onClick={handleToggle} className='text-gray-200 md:hidden block' size={22}/> 
        }
       <Link to='/' onClick={handleToggle}><h2 className='text-2xl font-semibold flex'><FaPerson/> CHAR</h2></Link>
      </div>

      <div className=' gap-10 text-sm md:flex hidden'>
       
      <Link to='/about us' >About us</Link>
      <Link to='/characters' >Characters</Link>
      <Link to='/contact' >Contact</Link>
      </div>

{
   <div className={` gap-5 hidden-menu ${toggle ? 'show' : 'hide'}  text-slate-100`}>
      <Link to='/about us' onClick={handleToggle}>About us</Link>
      <Link to='/characters' onClick={handleToggle} >Characters</Link>
      <Link to='/contact' onClick={handleToggle} >Contact</Link>

   <div className='flex border items-center gap-10 relative py-2 px-3 rounded-full mt-[30px]'>
    <button className='text-sm font-thin '>View Cart</button>
    <div>
            <FaShoppingCart size={15}/>
            <div className='absolute top-1 right-3'><h2 className='text-sm font-thin font-mono mb-1 bg-red-500 h-[10px] w-[12px] flex justify-center items-center rounded-full'>0</h2></div>
          </div> 
   </div>

   <div className='w-[200px] bg-slate-400 h-[1px] mt-[30px]'></div>

   <div className='flex text-sm gap-3'>
    <FaInstagram/>
    <FaTwitter/>
    <FaFacebook/>
   </div>
   </div>
}
     

        <div className='md:flex items-center justify-between gap-4 border py-2 px-4 rounded-full relative hidden '>
          <button>View Cart</button>
          <div>
            <FaShoppingCart size={20}/>
            <div className='bg-red-500 flex justify-center items-center absolute right-3 top-1 rounded-full h-[15px] w-[15px] font-mono'><h2 className='text-sm '>0</h2></div>
          </div>
        </div>
      
    </div>
  )
}

export default Navbar