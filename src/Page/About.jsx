import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import ser2 from "../assets/kola/WhatsApp Image 2024-04-22 at 08.29.41_9de7e328.jpg"

const About = () => {
  return (
    <div  class="relative isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols drop-out  lg:px-6 sm:py-32" id='services'>
        <div className=' '>
           <h1 className='text-3xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-6xl'>About us </h1>
            
        </div>
        <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
            
           
             
              <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
               <img src={ser2} alt="" />
            </div>
                
            
           
            <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                
                <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Who we are</h3>
                <p className='font-Poppins text-sm '>Welcome to Ay-ab resources library, your premier destination for all things literature. At Ay-ab resources, we're passionate about books and committed to providing book enthusiasts with a curated selection of captivating reads from various genres.</p >
            </div>
           

        </div>
        
       
    </div>

)
}

export default About