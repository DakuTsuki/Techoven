import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo-2.png'


export default function Footer() {
  return (
    <footer className=" bg-black-10 text-white-10 px-5 lg:px-16">
      <div className=" flex flex-col justify-center items-center py-24">
        <h2 className=" text-center lg:text-5xl md:text-4xl font-medium lg:pt-20 leading-normal text-2xl mb-10">
          Have A Project In Mind?
          <br />
          Let’s Work Together
        </h2>
        <Link href={'/contact'}>
            <Button
              title={'Request Quote'}
              variant={'btn-orange'}
              type={'button'}
            />
            </Link>
      </div>

      <div className=' border-y py-10 flex items-start flex-wrap gap-20'>

        <div className=' max-w-sm'>
          <Link href={'/'}>
            <Image src={logo} width={200} height={50} alt="TechCoven log" />
          </Link>
          <p className=' text-lg mt-5 text-gray-10'>
          Techcoven bootcamp education prepares students for fulfilling careers in tech and beyond with immersive technologies that power the future. our rigorous curriculum prepares students to work with top-tier tech giants, innovative startups, and companies and organizations of all sizes across the nation.
          </p>
        </div>

        <div className=' flex gap-20 items-center flex-wrap'>
        {/* <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Company</p>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Home</Link>
            <Link href={"/about"} className=' hover:text-orange-10 transition-all'>About us</Link>
            <Link href={"/services"} className=' hover:text-orange-10 transition-all'>Services</Link>
            <Link href={"/academy"} className=' hover:text-orange-10 transition-all'>Academy</Link>
        </ul>
        <ul className=' flex items-left gap-4 flex-col text-gray-10 '>
            <p className=' mb-5 text-white-10 font-medium'>Programs</p>
            <Link href={"/programs/tech2kids"} className=' hover:text-orange-10 transition-all'>Tech2kids</Link>
            <Link href={"/programs/tech4japa"} className=' hover:text-orange-10 transition-all'>Tech4japa</Link>
            <Link href={"/programs/tech2jobs"} className=' hover:text-orange-10 transition-all'>Tech2jobs</Link>
            <Link href={"/programs/corps2tech"} className=' hover:text-orange-10 transition-all'>Corps2tech</Link>
        </ul> */}
        </div>
        <div className=' flex gap-20 items-start flex-wrap'>
        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Support</p>
            <Link href={"/#faq"} className=' hover:text-orange-10 transition-all'>FAQs</Link>
            <Link href={"/contact"} className=' hover:text-orange-10 transition-all'>Contact</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Term of use</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Cookie policy</Link>
        </ul>
        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Media</p>
            <Link href={"https://x.com/leumaxt?s=11"} className=' hover:text-orange-10 transition-all'>Twitter</Link>
            <Link href={"https://www.linkedin.com/company/18806510/admin/feed/posts/"} className=' hover:text-orange-10 transition-all'>LinkedIn</Link>
            <Link href={"https://www.instagram.com/leumaxtechnology/"} className=' hover:text-orange-10 transition-all'>Instagram</Link>
            <Link href={"https://www.facebook.com/leumaxtechnologies"} className=' hover:text-orange-10 transition-all'>Facebook</Link>
            <Link href={"https://www.youtube.com/@leumaxtechnology4949"} className=' hover:text-orange-10 transition-all'>Youtube</Link>
        </ul>
        </div>

        
      </div>
      <p className=' text-center py-10'>Copyright © 2025 TechOven All Rights Reserved by TechOven</p>
    </footer>
  )
}
