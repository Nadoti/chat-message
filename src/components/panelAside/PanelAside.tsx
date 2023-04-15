import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { AiFillWechat, AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";

const menuNav = [
  {
    id: 'home',
    url: 'home',
  },
  {
    id: 'chat',
    url: 'chat',
  },
  {
    id: 'contact',
    url: 'contact',
  },
  {
    id: 'groups',
    url: 'groups',
  },
  {
    id: 'settings',
    url: 'settings',
  },
]

export function PanelAside() {
  let pathUrl = useLocation();
  const routeChosen = pathUrl.pathname.split('/')[2]

  const icons = (rota:string, id:string) => {

    const icon = {
      'home': <AiFillHome className={`text-700-gray hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : ''}`} size={30} />,
      'chat': <AiFillWechat className={`text-700-gray hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : ''}`} size={30} />,
      'contact': <FaUserAlt className={`text-700-gray hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : ''}`} size={30} />,
      'groups': <FaUserFriends className={`text-700-gray hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : ''}`} size={30} />,
      'settings': <AiFillSetting className={`text-700-gray hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : ''}`} size={30} />,
    }
    
    return icon[rota]
  }

  return (
    <aside className='max-w-[7rem] w-full h-full flex flex-col items-center justify-around border-r-2 border-700-gray'>
      <div className='flex flex-col items-center'>
        <div className='content-[""] w-8 h-8 bg-white rounded-full '></div>
        <span className='text-xs w-full text-white'>Douglas Nadoti</span>
      </div>
      <div className='flex flex-col gap-8 w-full items-center'>
        {menuNav?.map(({id, url}) => (
          <Link
            key={id}
            to={url} 
            className={`w-full flex items-center justify-center relative ${id === routeChosen ? 'after:content-[""] after:w-1 after:h-full after:bg-400-blue after:absolute after:right-0' : 'text-blue-100'}`} 
          >
            {icons(url, id)}
          </Link>
        ))}
      </div>
      <div>
        <button>
          <GoSignOut className='text-700-gray hover:text-400-blue' size={30} />
        </button>
      </div>
    </aside>
  )
}
