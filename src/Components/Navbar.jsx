import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import { MdAllInbox } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineInbox } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { VscDebugConsole } from "react-icons/vsc";
import { CiFileOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  const [Hover ,setHover] = useState(false);

  const expand = () =>{
    setHover(true);
  }
  const close = () =>{
    setHover(false);
  }


  return (
    <>
  <div onMouseEnter={expand} onMouseLeave={close}  className={`${Hover ? "w-[120px] bg-red-700 transition-all duration-500 grid gap-4" : "w-[50px] grid gap-4"}`}>
    <div className="grid gap-5">
          <img className='size-10 mx-3 mt-6 ' src="/materio logo.jfif" alt="Materio logo" />
        
       <div className="bg-[#E5E5EB] py-1 rounded-tr-3xl w-14 rounded-br-3xl">
         <IoMdHome size={20} className='mx-[18px]'/>
       </div>
        <LuFiles size={20} className='mx-[18px]'/>
    </div>
    <div className="w-[25px] border-t border-gray-400 mx-[18px] mt-10"></div>
    <div className="grid pt-6 gap-5">
      <MdAllInbox  size={20} className='mx-[18px]'/>
      <LuGraduationCap  size={20} className='mx-[18px]'/>
      <IoCarSportOutline size={20} className='mx-[18px]'/>
      <AiOutlineInbox size={20} className='mx-[18px]'/>
      <FaRegMessage size={20} className='mx-[18px]'/>
      <VscDebugConsole size={20} className='mx-[18px]'/>
      <CiFileOn size={20} className='mx-[18px]'/>
      <CgProfile size={20} className='mx-[18px]'/>
    </div>

  </div>




    {/* <div className="px-4">
  <div className="flex items-center">
    <div className=" w-[100px] border-t border-gray-300"></div>
    <span className="mx-3 text-xs uppercase text-gray-400">
      Apps & Pages
    </span>
    <div className="border-t border-gray-300 w-[100px]"></div>
  </div>
</div> */}

</>
  )
}

export default Navbar
