import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillWechat, AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";


export function PanelAside() {
  let la = true

  return (
    <aside className='flex flex-col items-center justify-around border-r-2 border-700-gray h-full'>
      <div className='flex flex-col items-center'>
        <div className='content-[""] w-8 h-8 bg-white rounded-full '></div>
        <span className='text-xs w-full text-white'>Douglas Nadoti</span>
      </div>
      <div className='flex flex-col gap-8 w-full items-center'>
        <Link to='/' className={`w-full flex items-center justify-center relative ${la === true ? 'after:content-[""] after:w-1 after:h-full after:bg-400-blue after:absolute after:right-0' : 'text-blue-100'}`} >
          <AiFillHome className={`text-700-gray hover:text-400-blue w-full z-10 ${la === true ? 'text-400-blue' : ''}`} size={30} />
        </Link>
        <Link to='/'>
          <AiFillWechat className='text-700-gray hover:text-400-blue ' size={30} />
        </Link>
        <Link to='/'>
          <FaUserAlt className='text-700-gray hover:text-400-blue' size={30} />
        </Link>
        <Link to='/'>
          <FaUserFriends className='text-700-gray hover:text-400-blue' size={30} />
        </Link>
        <Link to='/'>
          <AiFillSetting className='text-700-gray hover:text-400-blue' size={30} />
        </Link>
      </div>
      <div>
        <button>
          <GoSignOut className='text-700-gray hover:text-400-blue' size={30} />
        </button>
      </div>
    </aside>
  )
}
