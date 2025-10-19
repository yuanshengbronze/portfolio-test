import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import {assets} from '@/assets/assets'

const header = () => {
  return (
    <div className = 'w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='profile image' className= 'rounded-full w-26'/>
        </div>
        <h3 className ='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Joost'> 
                Hi! I'm Elbert Tristan Lie <Image src={assets.hand_icon} alt='hand wave' className='w-6'/>
        </h3>
        <h1 className = 'text-3xl sm:text-6xl lg:text-[66px] font-Joost'>
            Software Engineering Enthusiast, CS Undergrad @NUS
        </h1>
        <div className ='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <Link href='#contact'
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex
            items-center gap-2'>
                contact me <Image src={assets.right_arrow_white} alt='arrow icon' className='w-4'/>
            </Link>

            <Link href="sample-resume.pdf" download
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                my resume <Image src={assets.download_icon} alt='download icon' className='w-4'/>
            </Link>
        </div>
    </div>
  )
}

export default header
