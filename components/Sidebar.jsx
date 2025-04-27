import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({expand,setExpand}) => {
  return (
    <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${expand ? 'p-4 w-64' : 'md:w-20 w-0 max-md:overflow-hidden'}`}>
        <div>
            <div className={`flex ${expand ? "flex-row gap-10" : "flex-col items-center gap-8"}`}>
                <Image className={expand ? "w-36" : "w-10"} src={expand ? assets.logo_text : assets.logo_icon} alt=''/>
                <div onClick={()=> expand ? setExpand(false) : setExpand(true)}
                className='group relative flex item center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-8 aspect-square rounded-lg cursor-pointer'>
                    <Image src={assets.menu_icon} alt='' className='md:hidden'/>
                    <Image src={expand ? assets.sidebar_close_icon : assets.sidebar_icon} alt='' className='hidden md:block w-7'/>
                    <div className={`absolute w-max ${expand ? "left-1/2 -translate-x-1/2 top-12"  : "-top-12 left-0"} opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}>
                        {expand ? "Close sidebar" : "Open sidebar"}
                        <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "left-1/2 -top-1.5 translate-x-1/2" : "left-4 bottom-1.5"}`}></div>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar