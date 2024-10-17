import React, { useRef } from 'react'
import applegirl from '../../assets/applegirl.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
const power = useRef()
const sell = useRef()
const ai = useRef()
const virtual = useRef()
const soul = useRef()
const girl = useRef()

useGSAP(()=>{

gsap.from(soul.current,{
  opacity:0,
  duration:1,
  delay:0.3,
})

gsap.from(sell.current,{
  opacity:0,
  duration:1,
  delay:0.6,
})
gsap.from(ai.current,{
  opacity:0,
  duration:1,
  delay:0.9,
})

gsap.from(power.current,{
  opacity:0,
  duration:1,
  delay:1.2,
})

gsap.from(virtual.current,{
  opacity:0,
  duration:1,
  delay:1.5,
})

gsap.from(girl.current,{
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
      trigger: girl.current,
      start:'top 90%',
      end:'top top',
    
    }
})
})

  return (
    <div className='py-[5rem] pt-[10rem] text-[#CDD4F0]  '>
     <div  className='text-center px-5'>
       <h1 className='text-[30px] font-[600] mb-4' ref={soul}>Soulmate AI is an innovative website</h1>
       <h1 className='text-[#9D67DA] font-[600] mb-3 text-[30px] md:text-[55px]' ref={sell}>that specializes in selling</h1>
       <h1 className='text-[30px] font-[600]' ref={ai}>AI-generated characters</h1>
     </div>

     <div className='font-sans text-center mt-[4rem] px-5 '>
      <h2 ref={power}>With the power artificial intelligence, Soulmate AI offers virtual companions and friends <br /> for individuals seeking meaningful connections.</h2>

      <h2 className='mt-[5rem]' ref={virtual}>Wether you're looking for a virtual partner or a virtual friends, Soulmate AI provides a unique <br />
      experience Where you can interact with AI-generated personalities tailored to your preferences. <br />
      Discover the world of virtual companionship and forge deep connections with these AI-created <br />characters through Soulmate AI</h2>
     </div>
     

     <div className='lg:px-[9rem] px-[2rem] flex justify-center mt-[9rem]' ref={girl}>
        <img src={applegirl} alt=""  />
      </div>

      <div className='text-center lg:text-[56px] text-[30px] mt-[5rem] px-10'>
      <h2 className='text-white'>Texto <span className='text-[#9D67DA] font-[600] mr-3'>simulado</span>  que se</h2>
      <h2 className='text-white'><span className='text-[#9D67DA] font-[600]'>suscriban</span> al boletin</h2>
     </div>

     
     <div className='flex justify-center mt-[3rem]  max-w-[604px] mx-auto'>
       <form className='flex md:flex-row flex-col gap-5 ' action="">
        <input type="text" className='bg-transparent border border-[#CDD4F0]  py-[13px] px-4 pr-[100px] placeholder:font-normal text-xl text-[#CDD4F0] rounded-[48px] text-[20px]' placeholder='Enter your email address' />
        <button className='py-[12px] bg-[#CDD4F0] rounded-[48px] px-5  font-[600] text-[#141b30]'>Subscribe right now</button>
       </form>
     </div>
    </div>
  )
}

export default About