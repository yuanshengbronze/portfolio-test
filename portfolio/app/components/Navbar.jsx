"use client";
import React, {useRef} from 'react'
import Link from 'next/link'
import Image from "next/image"
import {assets} from '@/assets/assets'

const Navbar = () => {
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'

    }
  return (
    <>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
            <Link href ="#top">
                <Image src={assets.logo} alt="logo" className='w-28 cursor-pointer mr-14'/>
            </Link>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                <li> <Link className = 'font-joost' href='#top'> Home </Link></li>
                <li> <Link className = 'font-joost' href='#about'> About me</Link></li>
                <li> <Link className = 'font-joost' href='#work'> My Work </Link></li>
                <li> <Link className = 'font-joost' href='#contact'> Contact Me </Link></li>
            </ul>

            <div className = 'flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt='moon icon' className='w-6'/>
                </button>
                <Link href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
                rounded-full ml-4'> Contact <Image src={assets.arrow_icon} alt = "arrow-icon" className='w-3'/></Link>

                <button className ='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='menu icon' className='w-6'/>
                </button>
            </div>

            {/* ......Mobile Menu...... */}
            <ul ref = {sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
            bg-rose-50 transition duration-500'>

                <div className ='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='close icon' className='w-5 cursor-pointer'/>
                </div>
                <li> <Link className = 'font-joost' onClick={closeMenu} href='#top'> Home </Link></li>
                <li> <Link className = 'font-joost' onClick={closeMenu} href='#about'> About me</Link></li>
                <li> <Link className = 'font-joost' onClick={closeMenu} href='#work'> My Work </Link></li>
                <li> <Link className = 'font-joost' onClick={closeMenu} href='#contact'> Contact Me </Link></li>
            </ul>


        </nav>
      
    </>
  )
}

export default Navbar
