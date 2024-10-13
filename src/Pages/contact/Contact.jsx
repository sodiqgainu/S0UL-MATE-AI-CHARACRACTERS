import React from 'react'

const Contact = () => {
  return (
    <div className='pt-[10rem]'>
      <div className='grid lg:grid-cols-2 grid-cols-1 px-10 py-[3rem] max-w-[1300px] mx-auto text-[32px] font-[600] gap-10'>

        <div className='text-[#CDD4F0] text-center lg:text-left '>
         <h1>Discover AI-generated</h1>
         <h1 className='md:text-[68px] text-[40px] mt-3 font-[600] text-[#9D67DA]'>characters</h1>
         <h2 className='md:text-[60px] text-[40px] mt-3 font-[600] text-[#9D67DA]'>for virtuals</h2>
         <div className='font-sans  font-[300] mt-9 md:text-[20px] xs:text-[15px] text-[15px]'>
         <p >We have all been in this industry for far too long to</p>
         <p>not make the security of your funds our number</p>
         <p>one priority. We've had audits from Open Zeppelin</p>
         <p>and Trail of Bits, as well as code reviews from</p>
         <p> white hat hackers.</p>
         </div>
        </div>

        <div className='w-[100%]'>
          <form className='flex flex-col gap-4 w-[100%]'>
           <input type="text" name="" id="" className='rounded-[20px] bg-[#0e1322] hover:border text-sm text-white font-sans py-8 px-3 outline-none placeholder:text-[20px] placeholder:font-normal' placeholder='Correo' />
           <input type="text" name="" id="" className='rounded-[20px] bg-[#0e1322] placeholder:text-[20px] placeholder:font-normal hover:border text-white text-sm py-8 px-3 outline-none font-sans' placeholder='Asunto' />
           <textarea name="" id="" cols="30" rows="20" className='rounded-[20px] placeholder:text-[20px] placeholder:font-normal bg-[#0e1322] hover:border text-white text-sm  py-8 px-3 outline-none font-sans' placeholder='Mensaje'></textarea>
          </form>

          <div className=' flex md:justify-end justify-center'>
            <button className='text-[#CDD4F0] border mt-6 text-[15px] font-sans py-2 px-8 rounded-[48px] '>Enviar mensaje</button>
          </div>
        </div>

      </div>

      <div className='text-center lg:text-[56px] text-[30px] mt-[5rem] px-10'>
      <h2 className='text-white'>Texto <span className='text-[#9D67DA] font-[600] mr-3'>simulado</span>  que se</h2>
      <h2 className='text-white'><span className='text-[#9D67DA] font-[600]'>suscriban</span> al boletin</h2>
     </div>

    
     <div className='flex justify-center mt-[3rem]  '>
       <form className='flex md:flex-row flex-col gap-5 ' action="">
        <input type="text" className='bg-transparent border border-[#CDD4F0]  py-[16px] px-4 placeholder:font-normal text-2xl text-[#CDD4F0] rounded-[48px] text-[20px]' placeholder='Enter your email address' />
        <button className='py-[18px] bg-[#CDD4F0] rounded-[48px] px-2 font-[600] text-[#141b30]'>Subscribe right now</button>
       </form>
     </div>
    </div>
  )
}

export default Contact