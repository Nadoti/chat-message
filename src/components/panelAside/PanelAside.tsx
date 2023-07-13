import React, { ReactElement } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";

interface IconsProps  {
  url: string;
  id: string;
}

interface TypeIconProps {
  [key: string]: ReactElement<string>;
}

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

  const Icons = ({url, id}: IconsProps) => {

    const icon: TypeIconProps = {
      'home': <AiFillHome className={`hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : 'text-700-gray'}`} size={30} />,
      'chat': <BsFillChatDotsFill className={`hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : 'text-700-gray'}`} size={30} />,
      'contact': <FaUserAlt className={`hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : 'text-700-gray'}`} size={30} />,
      'groups': <FaUserFriends className={`hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : 'text-700-gray'}`} size={30} />,
      'settings': <AiFillSetting className={`hover:text-400-blue w-full z-10 ${id === routeChosen ? 'text-400-blue' : 'text-700-gray'}`} size={30} />,
    }
    return icon[url]
  }
  console.log(routeChosen)
  return (
    <aside className='max-w-[7rem] w-full h-full flex flex-col items-center justify-around border-r-2 border-700-gray'>
      <div className='flex flex-col items-center'>
        <div className='content-[""] w-8 h-8 bg-white rounded-full '></div>
      </div>
      <div className='flex flex-col gap-8 w-full items-center'>
        {menuNav?.map(({id, url}: IconsProps) => (
          <NavLink
            key={id}
            to={url} 
            className={`w-full flex items-center justify-center relative ${id === routeChosen ? 'after:content-[""] after:w-1 after:h-full after:bg-400-blue after:absolute after:right-0' : 'text-blue-100'}`} 
          >
            <Icons url={url} id={id} />
          </NavLink>
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
