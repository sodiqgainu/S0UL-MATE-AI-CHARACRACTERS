import React, { useRef } from 'react'
import avatars from '../../designs/image.png'
import mask1 from '../../assets/Mask group-1.png'
import mask2 from '../../assets/Mask group-2.png'
import mask3 from '../../assets/Mask group-3.png'
import mask4 from '../../assets/Mask group-4.png'
import mask5 from '../../assets/Mask group-5.png'
import mask6 from '../../assets/Mask group-6.png'
import mask7 from '../../assets/Mask group-7.png'
import mask8 from '../../assets/Mask group-8.png'
import mask9 from '../../assets/Mask group-9.png'
import mask10 from '../../assets/Mask group.png'
import oldwoman1 from '../../assets/oldwoman1.png'
import oldwoman2 from '../../assets/oldwoman2.png'
import vector1 from '../../assets/Vector-1.svg'
import vector2 from '../../assets/Vector-2.svg'
import vector3 from '../../assets/Vector-3.svg'
import vector4 from '../../assets/Vector-4.svg'
import vector5 from '../../assets/Vector-5.svg'
import applegirl from '../../assets/applegirl.png'
import './Home.css'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Home = () => {

const companion = useRef(null)
const discover = useRef(null)
const virtual = useRef(null)
const innovative = useRef(null)



useGSAP(()=> {
  const tl = gsap.timeline()
tl.from(discover.current,{
  x:-400,
  opacity:0,
  duration:1.5,
  ease:'power2',
  skewX: 60,

})

tl.from(virtual.current,{
  opacity:0,
  duration:2,
  ease:'power1',
 
})

gsap.from(companion.current,{
  x:400,
  opacity:0,
  duration:1.5,
  ease:'power1',
  skewX: 60,
  delay:2
})

gsap.to(innovative.current,{
  y:0,
  opacity:1,
  duration:2,
  delay:1,
  ease:'power1',
  scrollTrigger:{
    trigger: innovative.current,
    start: 'top 90%',
    end: 'top 10%',
    toggleActions: 'play none none reverse',
   
  }
})

gsap.to('.images',{
  y:-30,
 stagger:0.4,
boxShadow:'0px 0px 50px 7px rgba(135, 149, 206, 0.75)',
  ease:'power1.inOut',
  scrollTrigger:{
    scrub:true,
    trigger: '.avatars',
    start: 'top 90%',
    // markers: true,
    end: 'bottom 10%',
    toggleActions: 'restart reverse play reverse',
  }
})

// ScrollTrigger.create({
//   trigger:'.avatars',
//   start: 'top 90%',
//   end: 'bottom 10%',
//   scrub: true,

//   onEnter: ()=>{
// gsap.to('.images',{
//   y:-30,
//    stagger:0.4,
//   boxShadow:'0px 0px 50px 7px rgba(135, 149, 206, 0.75)',
// })
//   },
// onLeave : () => {
//   gsap.to('.images',{
//     y:0,
//      stagger:0.4,
//      boxShadow:'none',
//   })
// }

// })

})



  return (
    <div>
      <header className='text-white text-center  px-3 pt-[11rem]'>
        <h1 className='text-2xl font-bold text-[#CDD4F0]' ref={discover}>Discover AI-generated</h1>
        <h2 className='text-5xl mt-3 font-[600] text-[#9D67DA]' ref={virtual}>characters for virtual</h2>
        <p className='text-2xl font-bold text-[#CDD4F0] mt-4' ref={companion}>companionship and friendship</p>
      </header>

      <section className='max-w-[1000px] mx-auto mt-[3rem]'>
        <img src={avatars} alt="" />
      </section>

      <div className='max-w-[1038px] mx-auto px-2 mt-[3rem] text-center'>
       <h2 className='text-[#CDD4F0] font-[400] opacity-0 translate-y-[100px]' ref={innovative}> Find your perfect virtual partner or friend through our innovative platform. Experience meaningful connections with AI-powered personalities. Explore the world of Soulmate AI today.</h2>
      </div>

      <div className='mt-[7rem] max-w-[1038px] flex justify-between mx-auto px-4 '>
        <h2 className='text-[#CDD4F0] text-2xl font-[600]'>Characters</h2>
       <select  className='bg-transparent text-[#CDD4F0] px-2 outline-none'>
        <option value="">most view</option>
       </select>
      </div>
      

      <section className='  mt-[4rem]'>
        <div className=' avatars max-w-[900px] mx-auto
        p-[2rem] justify-center grid grid-cols-2 md:grid-cols-4 gap-7'>

        
            <img className='images' src={mask1} alt="" />
        

        
            <img className='images' src={mask2} alt="" />
       

         
            <img className='images' src={mask3} alt="" />
          

       
            <img className='images' src={mask4} alt="" />
        

     
            <img className='images' src={mask5} alt="" />
        

       
            <img className='images' src={mask6} alt="" />
      


            <img className='images' src={mask7} alt="" />
       

      
            <img className='images' src={mask8} alt="" />
        

       
            <img className='images' src={mask9} alt="" />
          

         
            <img className='images' src={mask10} alt="" />
         

        
            <img className='images' src={oldwoman1} alt="" />
          

        
            <img className='images' src={oldwoman2} alt="" />
          
        </div>
      </section>

      <div className='my-[4rem]'>
        <h2 className='text-center md:text-[72px] text-[35px] font-semibold text-[#CDD4F033]'>TRUSTED 10,000+ COMPANY</h2>
      </div>
     
     <div className='grid md:grid-cols-5 items-center grid-cols-3  px-7 max-w-[1095px] mx-auto lg:gap-[8rem] gap-[4rem] '>
      <img src={vector1} alt="" />
      <img src={vector2} alt="" />
      <img src={vector3} alt="" />
      <img src={vector4} alt="" />
      <img src={vector5} alt="" />
     </div>

     <div className='text-center lg:text-[56px] text-[30px] mt-[8rem] px-5'>
      <h2 className='text-white'>Let's try to manage your monthly</h2>
      <h2 className='text-white'><span className='text-[#9D67DA] font-[600]'>finances easily</span> on our platform</h2>
     </div>
     <div className='flex justify-center mt-[3rem]'>
        <button className='border rounded-[48px] text-white px-[32px] py-[18px]'>Try it Now</button>
      </div>

{/* iphone girl */}
      <div className='lg:px-[9rem] px-[2rem] flex justify-center mt-[9rem]'>
        <img src={applegirl} alt="" />
      </div>

      {/* texto */}

      <div className='text-center lg:text-[56px] text-[30px] mt-[5rem] px-10'>
      <h2 className='text-white'>Texto <span className='text-[#9D67DA] font-[600] mr-3'>simulado</span>  que se</h2>
      <h2 className='text-white'><span className='text-[#9D67DA] font-[600]'>suscriban</span> al boletin</h2>
     </div>

     <div className='flex justify-center mt-[3rem]'>
       <form className='flex md:flex-row flex-col gap-5' action="">
        <input type="text" className='bg-transparent border border-[#CDD4F0]  py-[16px] pr-[78px] pl-[30px] placeholder:font-normal text-2xl text-[#CDD4F0] rounded-[48px] text-[20px]' placeholder='Enter your email address' />
        <button className='py-[18px] bg-[#CDD4F0] rounded-[48px] px-4 font-[600] text-[#141b30]'>Subscribe right now</button>
       </form>
     </div>

    </div>
    
  )
}

export default Home