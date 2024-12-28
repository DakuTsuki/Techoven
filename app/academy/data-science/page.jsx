
import React from 'react'
import Image from 'next/image'
import hero from '@/public/academy/data-science-bg.jpg'
import clock from '@/public/clock.svg'
import mark from '@/public/mark.png'
import QuoteForm from '@/components/QuoteForm'

export default function DataScience() {

  return (
    <div className=" text-base lg:text-lg xl:text-xl relative">
      <section className=" relative hero-img">
        <Image
          src={hero}
          alt="web development page background image"
          className="w-full h-96 object-cover relative"
        />
        <div className=" text-white-10 px-5 lg:px-16 absolute z-30 left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center  text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Data Science</h2>
          <p className=" capitalize mt-5 max-w-[600px]">
          This course covers the fundamentals of Version Control, Python programming, SQL, Statistics and data science.
          </p>
        </div>
      </section>


      <section className="px-5 lg:px-16 py-24">
        <div className=' max-w-[850px] m-auto'>
          <div>
            <h2 className=' text-2xl md:text-3xl font-medium border-b pb-2 border-b-lightGray-10'>Data Science</h2>
            <p className=' pt-5'>
            Data science is the process of analyzing raw data to extract insights and valuable information that can be used to make informed decisions. It involves various techniques, including data mining, statistical analysis, machine learning, and visualization
            </p>
          </div>


          <div className=' pt-10'>
            <h3 className=' font-medium text-2xl border-b pb-2'>Courses</h3>
              <ul className=' flex flex-col gap-y-3 mt-4'>
                  <li className=' flex items-center gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>SQL</h4>
                  </li>
                  <li className=' flex items-center gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Python and NumPy</h4>
                  </li>
                  <li className=' flex items-center gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Statistics</h4>
                  </li>
                  <li className=' flex items-center gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Pandas(Data Manipulation, Analysis) and Visualization</h4>
                  </li>
                  <li className=' flex items-center gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Machine Learning</h4>
                  </li>
                  <li className=' flex items-center gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <h4 className=' font-medium'>Code Testing, Model Validation And Web Scraping</h4>
                  </li>
              </ul>
            <div className=' pt-16'>
              <h5 className=' font-medium text-xl border-b pb-2'>Duration</h5>
              <div className=' flex items-center gap-x-2 pt-5'>
                <Image src={clock} alt=' clock image' className=' w-7 h-7'/>
              <p>The program is set to run for 4 months.</p>
              </div>
              
            </div>
        </div>
        <div className=' md:py-12 py-8 md:px-10 px-5 rounded-lg price-card text-white-10 mt-12'>
          <h3 className=' md:text-2xl text-lg  font-medium'>Full Tuition Option</h3>
          <h2 className=' md:text-5xl text-3xl font-medium py-3'>₦250,000</h2>
          <p>Pay your fees 100% upfront. No other charges come up during your learning.</p>
        </div>
        

          <QuoteForm course={"Data Science"}  />
        </div>
      </section>
    </div>
  )
}
