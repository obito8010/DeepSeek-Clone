'use client';
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const[expand , setExpand] = useState(false);
  const[messages , setMessages] = useState([]);
  const[isLoading , setIsLoading] = useState(false);
  
  return (
    <div>
      <div className="flex h-screen">
      {/* --sidebar-- */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
        <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
          <Image onClick={()=> (expand ? setExpand(false):setExpand(true))}
          className="rotate-180" src={assets.menu_icon} alt=""/>
          <Image className="opacity-70" src={assets.chat_icon} alt=""/>
        </div>

        {messages.length ===0 ? (
          <> 
          <div className="flex items-center gap-3">
            <Image src={assets.logo_icon} alt="" className="h-16"/>
            <p className="text-2x1 font-medium">Hi, i am deepseek</p>
          </div>
          <p className="text-sm mt-2">How can i help you today</p>
          </>
        ):
        (<div></div>)
        }

        {/* --prompt box-- */}
        <p className="text-xs absolute bottom-1 test-gray-500">Ai generated , for reference only</p>


      </div>
      </div>
    </div>
  );
}
