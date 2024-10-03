import React, { useState } from 'react'
import { styles } from '../../styles'
import { Link } from "wouter"
import logo from "../../assets/Group.png"
import { navLinks } from '../../constants';
import CartLogo from './cartLogo';
import close from "../../assets/close.svg"
import menu from "../../assets/menu.svg"

export default function Navbar() {
  let [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 flex`}>
        <div className='w-full flex justify-between items-center mx-auto gap-20'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" />
            <p className="text-[22px] cursor-pointer flex">Pop Rock Crystall</p>
          </Link>
          <div className='flex justify-between items-center gap-20'>
            <ul className='list-none hidden sm:flex flex-row gap-20 ml-10'>
              {navLinks.map((link,index) => (
                <li key={index} 
                className={`${ active === link.title? "text-black":"text-white"}
                 hover:text-black text-[18px] curser-pointer`}
                 onClick={() => setActive(link.title)}>
                  <a href={`#${link}`} className='text-[18px]'>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className='sm:hidden flex flex:1 justify-end items-center'>
              <img src={`${toggle? close:menu}`} alt="menu" 
              className='w-[28px] h-[28px] object-contain curser-pointer'
              onClick={() => setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden':'flex'} p-6 bg-white absolute top-20 
              right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col'>
                  {navLinks.map((link) => (
                    <li key={link.id}
                    className={`${
                      active === link.title ? 
                      "text-green-600":"text-black"
                    } font-poppins text-[16px] font-medium curser-pointer`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)}}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <CartLogo />
            </div>
          </div>
        </div>
    </nav>
  )
}

