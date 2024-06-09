'use client';

import Link from "next/link";
import { SIDENAV_ITEMS } from '@/constants';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';



const SideNavbar = () => {
  const pathname = usePathname();

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);

  const handleSideBarOnClick = (item: any) => {
    setShowSubMenu(item.submenu);
    setSubMenuItems(item.subMenuItems);
  }

  useEffect(() => {

  }, [pathname])


  return (
    <>
      <div className="w-1/10  text-gray-700 p-4 bg-white h-screen  border-r border-zinc-200">

        <div className="flex flex-col space-y-6 w-full">

          <div className="flex flex-col space-y-2  ">
            {SIDENAV_ITEMS.map((item: any, idx) => {
              return (
                <div
                  key={idx}
                  className=""
                  onClick={() => handleSideBarOnClick(item)}
                // onMouseEnter={() => handleSideBarOnClick(item)}
                >
                  <Link
                    href={item.path}
                    className={`flex flex-col  items-center p-2 rounded-lg hover:bg-zinc-100 ${item.path === pathname ? 'bg-zinc-100' : ''
                      }`}
                  >
                    {item.icon}
                    <span className=" text-xl flex">{item.title}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {showSubMenu &&
        <div className="w-1/5 text-gray-700 p-4 bg-white h-screen  border-r border-zinc-200">
          <div className="flex flex-col space-y-6 w-full">
            <div
              className="space-x-4 pt-1 items-start justify-start border-b border-zinc-200 h-12 w-full"
            >
              <span className="font-semibold text-xl">User Name</span>
            </div>
            <div className="flex flex-col space-y-4  ">
              {subMenuItems.map((item: any, idx) => {
                return (
                  <Link
                    key={idx}
                    href={item.path}
                    className={`flex flex-col  items-start p-2 rounded-lg hover:bg-zinc-100 ${item.path === pathname ? 'bg-zinc-100' : ''
                      }`}
                  >
                    <span className=" text-xl flex">{item.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default SideNavbar;

