import React from 'react'
import service from '../assets/images/images11.jpg'
import ser1 from "../assets/kola/health4.jpg"







function Service() {
    
    return (
        <div  class="relative isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols drop-out  lg:px-6 sm:py-32" id='services'>
            <div className=' '>
               <h1 className='text-3xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-6xl'>Our Services </h1>
                
            </div>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
               
                 
                  <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                   <img src={ser1} alt="" />
                </div>
                    
                
               
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'> What We Offer</h3>
                    <p className='font-Poppins text-sm '>Diverse Selection: Explore our extensive collection of books spanning fiction, non-fiction, classics, bestsellers, and more. Whether you're seeking thrilling mysteries, heartwarming romances, thought-provoking memoirs, or educational textbooks, we've got you covered.</p >
                    <p className='font-Poppins text-sm '>Expert Curation: Our team of passionate bibliophiles carefully selects each book featured on our platform. We strive to showcase a diverse range of voices and perspectives, ensuring that there's something for every reader.</p >
                    <p className='font-Poppins text-sm '>Community Engagement: Join our vibrant community of book lovers to share recommendations, engage in discussions, and participate in literary events. Connect with fellow readers who share your interests and discover new books to add to your reading list.</p >

                    </div>
               
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    
                <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'> Get in Touch</h3>
                <p className='font-Poppins text-sm '>We're always here to assist you on your literary journey. Whether you have questions about our services, need book recommendations, or simply want to share your love for reading, don't hesitate to reach out to us. Contact our friendly team via email, phone, or social media, and let's embark on this literary adventure together.</p >
                <p className='font-Poppins text-sm '>Thank you for choosing [Website Name] as your trusted source for all things books. Happy reading!</p >
                </div>
            </div>
            
           
        </div>
    
    )
}

export default Service