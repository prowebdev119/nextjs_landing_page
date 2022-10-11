import React from 'react'


const About = () => {
  return (
    <div>
               <div className='grid grid-cols-1 sm:md:md:grid-cols-3 group bg-white shadow-lg shadow-neutral-100 border'>
                 <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50">
                <span className="p-5 rounded-full bg-[#bef264] text-white shadow-lg shadow-[#bef264]-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                    <p className="text-xl font-medium text-slate-700 mt-3">Team of Experts</p>
                <p className="mt-2 text-sm text-slate-500">Years of insurance experience helping clients prepare for the unknown.</p>
            </div>
            <div className="p-10 flex flex-col items-center text-center group bg-white md:lg:xl:border-b hover:bg-slate-50">
                <span className="p-5 rounded-full bg-[#ea580c] text-white shadow-lg shadow-[#ea580c]-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Coverages </p>
                <p className="mt-2 text-sm text-slate-500">Ask about home, auto, fire, flood, theft, and many more! We can access any insurance product so you get the right one for your needs.</p>
            </div>
            <div className="p-10 flex flex-col items-center text-center bg-white group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50">
                <span className="p-5 rounded-full bg-blue-500 text-white shadow-lg shadow-blue-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Community First</p>
                <p className="mt-2 text-sm text-slate-500">Supporting those in need with honest work, after adverse situations.</p>
            </div>
                </div>
  
            
    </div>
  )
}

export default About