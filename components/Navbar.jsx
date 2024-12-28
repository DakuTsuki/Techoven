'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/TECHCOVEN-PNG.png'
import arrow from '@/public/arrow-down.svg'
import { usePathname } from 'next/navigation'
import Button from './Button'
import 'animate.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const handleOpen = (openValue) => {
    setIsOpen(openValue)
  }

  const linkActive = usePathname()

  return (
    <>
      <nav className="   h-[70px] md:text-xs lg:text-base flex justify-center fixed z-50 bg-white-10 w-full shadow-lg">
        <div className='animate__animated animate__slideInDown  flex flex-between px-5 lg:px-16 w-full'>
        <Link href={'/'}>
          <Image
            src={logo}
            width={200}
            height={50}
            alt="TechCoven log"
            className=" w-[100px] lg:w-[150px]"
          />
        </Link>


        <Link href={'/contact'} className="block">
          <Button
            type={'button'}
            title={'Contact us'}
            variant={' btn-orange text-xs lg:text-base'}
          />
        </Link>
        </div>

      </nav>
    </>
  )
}
