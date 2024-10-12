import React from 'react'
import { FaFacebook, FaInstagram, FaPerson, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import playapp from '../../assets/playapp.svg'

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col md:justify-between justify-center md:text-justify text-center mt-[12rem] py-[3rem] px-7 max-w-[1070px] mx-auto'>
      {/* left div */}
      <div>
      <Link to='/' className='text-white flex justify-center md:justify-normal'><h2 className='text-2xl font-semibold flex'><FaPerson/> CHAR</h2></Link>

      <p className='mt-4 text-[#CDD4F0] font-sans font-thin'>Build and manage finances <br /> more structured</p>

      <p className='font-sans font-thin text-[#CDD4F0] mt-5'>© Soul-Mate,Inc 2023</p>

      <div className='text-[#CDD4F0] flex gap-4 mt-6  justify-center md:justify-normal mb-[3rem] md:mb-auto'>
        <FaInstagram/>
        <FaTwitter/>
        <FaFacebook/>
      </div>
      </div>


      {/* right div */}

      <div className='font-sans text-[#CDD4F0]  list-none font-thin flex md:flex-row flex-col gap-[4rem]'>
        <div className='flex flex-col gap-3'>
        <li>Comapny</li>
        <li>How it Works</li>
        <li>Service</li>
        <li>Blog</li>
        <li>About us</li>
        </div>

        <div className='flex flex-col gap-2'>
        <li>Help Center</li>
        <li>FAQ</li>
        <li>Online Chat</li>
        <li>Newsletter</li>
        </div>

        <div className=' md:px-[0px] px-[7rem] sm:px-[15rem]'>
         <img src={playapp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer