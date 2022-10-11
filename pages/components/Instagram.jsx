import React from 'react'
import IgImg1 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/hhh.png'
import IgImg2 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img100.png'
import IgImg3 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img9.jpg'
import IgImg4 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img15.png'
import IgImg5 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img11.webp'
import IgImg6 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img12.webp'
import InstagramImg from './InstagramImg'

function Instagram() {
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto text-center py-24' >
      <p className='text-2xl font-bold'> We take pride in helping out with our honest work</p>
      <p className='pb-4'>@Instagram</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
        <InstagramImg socialImg={IgImg6} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg1} />
       
        <InstagramImg socialImg={IgImg2} /> 
        <InstagramImg socialImg={IgImg4} /> 
        <InstagramImg socialImg={IgImg5} /> 
        
      </div>
    </div>
  )
}

export default Instagram