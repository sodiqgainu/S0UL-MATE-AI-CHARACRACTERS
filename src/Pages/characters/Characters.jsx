import React, { useRef } from 'react'
import april from '../characters/April.png'
import blondie from '../characters/blondie.png'      
import brad from '../characters/Brad.png'
import denzel from '../characters/Denzel copy.png'
import george from '../characters/George.png'
import jacob from '../characters/Jacob.png'
import jazmine from '../characters/Jazmine.png'
import  joshua from '../characters/Joshua.png'
import jossie from '../characters/Jossie.png'
import nicole from '../characters/Nicole.png'
import ryan from '../characters/Ryan.png'
import taylor from '../characters/Taylor.png'
import rightarrow from '../../assets/rightarrow.svg'
import { FaHeart, FaShare, FaShareAlt, FaShoppingCart, FaStar, FaStarHalfAlt, FaStarOfDavid } from 'react-icons/fa'
import { FaArrowsUpToLine } from 'react-icons/fa6'
import './characters.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const characters = () => {
  const character = useRef()
  
  useGSAP(()=>{
    gsap.from('.characters',{
       opacity:0,
       duration:1,
       stagger:0.4,
       scrollTrigger:{
        trigger:character.current,
        start:'top 80%',
        end:'top 20%'
       }
    })
  })

  return (
    <div>
      <header className='text-white text-center  px-3 pt-[10rem]'>
        <h1 className='text-2xl font-bold text-[#CDD4F0]' >Discover AI-generated</h1>
        <h2 className='text-5xl mt-3 font-[600] text-[#9D67DA]' >characters for virtual</h2>
      </header>


      <div className='mt-[7rem] max-w-[1038px] flex justify-between mx-auto px-4 '>
        <h2 className='text-[#CDD4F0] text-2xl font-[600]'>characters</h2>
       <select  className='bg-transparent text-[#CDD4F0] px-2 outline-none'>
        <option value="">most view</option>
       </select>
      </div>
{/* characterss */}
      <div className=' character mt-[5rem]  pt-[5rem]' ref={character}>
{/* 1 */}
          <div className=' characters  border py-4  rounded-xl px-4 '>
            <img src={april} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4'>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
{/* 2 */}
          <div className=' characters border py-4  rounded-xl px-4 ' >
            <img src={taylor} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>

          {/* 3 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={joshua} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
{/* 4 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={brad} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
         {/* 5 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={denzel} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
      {/* 6 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={george} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
          
{/* 7 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={jacob} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
         
{/* 8 */}
          <div className='characters border py-4  rounded-xl px-4 '>
            <img src={jazmine} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
{/* 9 */}

          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={jossie} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
         {/* 10 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={nicole} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
        {/* 11 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={ryan} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>
        
{/* 12 */}
          <div className=' characters border py-4  rounded-xl px-4 '>
            <img src={taylor} className='w-full'  alt="" />
            <div className='flex justify-between items-center mt-3'>
              <h2 className='text-[#9D67DA] font-[600] text-xl'>Base Price<span className='text-[#CDD4F0] text-sm font-[400] ml-1'>9,99$</span></h2>

              <div className='flex gap-3'>
               <FaHeart className='text-white heart'/>
               <FaShareAlt className='text-white share'/>
              </div>
            </div>

            <div className='flex'>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]' size={13}/>
                <FaStar className='text-[#5febd3]'size={13}/>
                <FaStar className='text-white ' size={13}/>
                <FaStar className='text-white' size={13}/>
              </div>

              <div className='mt-6 flex justify-center  gap-7 w-full '>
                <button className=' gap-1 border flex items-center justify-center rounded-[48px] md:px-2 px-4 '>
                  <h2 className='text-[#CDD4F0] font-sans text-xs'>wiew profile</h2> <img src={rightarrow} className='w-[7px]' alt="" />
                </button>
                <button className='  flex items-center bg-[#4e5775] justify-center gap-1 border md:px-2 px-4 py-4 rounded-[48px] border-none'>
                  <h2 className='text-[#CDD4F0] font-sans border-0 text-xs'>Add to Cart</h2> <FaShoppingCart className='text-white'/>
                </button>
              </div>
          </div>

      </div>

      <div className='text-center mt-[7rem] '>
        <h2 className='text-[36px] font-[600] text-[#CDD4F0]'>More characterss</h2>
        <h1 className='text-[#9D67DA] md:text-[58px] text-[40px] font-[600]'>coming soon...</h1>
      </div>
    </div>
  )
}

export default characters