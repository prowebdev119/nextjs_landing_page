import React from 'react'

const BarGraph = () => {
    return (
        <div className='group group-hover:block box-border p-28'>        <div className="flex items-cen flex-grow w-full mt-2 space-x-2 sm:space-x-3">
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold">$57,500</span>
                <div className="flex items-baseline w-80  ">
                    <div className="relative flex justify-center flex-grow h-18 bg-red-400 p-3"></div>
                    <span className="absolute bottom-0 text-xs font-bold whitespace-normal">Without a Public Adjuster</span>
                    <div className='relative flex justify-center flex-grow h2 bg-transparent w-[10]'></div>
                    <div className="relative flex justify-center flex-grow h-32 bg-blue-400 p-10"></div>
                    <span className="absolute bottom-0 text-xs font-semibold"></span>
                    <span className="absolute bottom-0 right-0 text-xs font-semibold">With a Public Adjuster</span>
                </div>
            </div>
        </div>
            <div className="flex w-full mt-3">
                <div className="flex items-center ml-auto ">
                    <span className="block w-4 h-4 bg-red-400 ro"></span>
                    <span className="ml-1 text-xs font-medium">Existing</span>
                </div>

                <div className="flex items-center ml-4">
                    <span className="block w-4  h-4 bg-indigo-400"></span>
                    <span className="ml-1 text-xs font-medium">New</span>
                </div>
            </div>
        </div>
    )
}

export default BarGraph