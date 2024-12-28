import React from 'react'
import Image from 'next/image'
import contactImg from '@/public/contact-us.png'
import phone from '@/public/phone.svg'
import whatsapp from '@/public/whatsapp.svg'
import mail from '@/public/mail.svg'
import location from '@/public/location.svg'
import Button from '@/components/Button'
import map from '@/public/map.png'
import ContactForm from '@/components/ContactForm'

export default function ContactUs() {
  return (
    <div className=" text-base xl:text-lg relative">
      <section className=" relative hero-img">
        <Image
          src={contactImg}
          alt="contact page background image"
          className=" w-full h-96 object-cover relative"
        />
        <div className=" text-white-10 px-5 z-30 lg:px-16 absolute left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center max-w-[500px] text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Contact Us</h2>
          <p className=" mt-5">
            For more information about our courses, get in touch with Techoven contacts
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-16 py-24">
        <div className=' flex flex-col md:flex-row  justify-between gap-20 contact-form relative'>
          <div className=" flex flex-col gap-12 w-full ">
            <div>
              <div className=" flex items-center gap-2 mb-1">
                <Image src={phone} alt="phone icon" className=' w-5 aspect-square'/>
                <p className=" font-medium text-xl">Phone</p>
              </div>
              <p className=" w-full border border-bg-lightGray-10-10 px-2 py-2 text-base">
                <span>+2348166301570</span>
              </p>
            </div>

            <div>
              <div className=" flex items-center gap-2 mb-1">
                <Image src={whatsapp} alt="phone icon" className=' w-5 aspect-square' />
                <p className=" font-medium text-xl">Whatsapp</p>
              </div>
              <p className=" w-full border border-bg-lightGray-10-10 px-2 py-2 text-base">
                <span>+2347053338151</span>
              </p>
            </div>

            <div>
              <div className=" flex items-center gap-2 mb-1">
                <Image src={mail} alt="mail icon" className=' w-5 aspect-square'/>
                <p className=" font-medium text-xl">E-mail</p>
              </div>
              <p className=" w-full border border-bg-lightGray-10-10 px-2 py-2 text-base">
                <span>Hello@leumaxtechnology.com</span>
              </p>
            </div>

            <div>
              <div className=" flex items-center gap-2 mb-1">
                <Image src={location} alt="location icon" className=' w-5 aspect-square'/>
                <p className=" font-medium text-xl">Location</p>
              </div>
              <p className=" w-full border border-bg-lightGray-10-10 px-2 py-2 text-base">
                <span>13 Thorborn Ave, Sabo yaba, Lagos 101245, Lagos</span>
              </p>
            </div>
          </div>

          <ContactForm />
          {/* <form className=" w-full">
            <label className=" font-medium text-xl">Send us message</label>
            <div className=" flex flex-col gap-8 mt-1">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className=" w-full border border-lightGray-10 p-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className=" w-full border border-lightGray-10 p-2 outline-none"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className=" w-full border border-lightGray-10 p-2 min-h-[200px] outline-none"
              ></textarea>
              <Button
                title={'Send Message'}
                type={'submit'}
                variant={'btn-orange w-[200px] ml-auto'}
              />
            </div>
          </form> */}
        </div>
        <div className=' mt-32'>
          <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.983048252707!2d3.365569210838186!3d6.523823723131807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4d48ae516f%3A0x6a6290ced55cf34e!2s5%20Shiro%20St%2C%20Igbobi%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1735378235330!5m2!1sen!2sng"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
        </div>
      </section>
    </div>
  )
}
