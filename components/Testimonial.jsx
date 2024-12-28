'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import left from '@/public/arrow-left.svg'
import right from '@/public/arrow-right.svg'
import she from '@/public/avatar.svg'
import he from '@/public/avatar2.svg'

export default function Testimonial(props) {
  const data = props.data
  console.log(data)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  //   useEffect(() => {
  //       let slider = set
  //   })
  return (
    <div>
      {data.map((item, indexPeople) => {
        console.log(item.body)
        const { id, name, female, male, body, role } = item;
        let position = 'nextSlide'
        if (indexPeople === index) {
          position = 'activeSlide'
        }
        if (
          indexPeople === index - 1 ||
          (index === 0 && indexPeople === data.length - 1)
        ) {
          position = 'lastSlide'
        }
        return (
          <div className={`slide ${position}`} key={id}>
            <div className=" flex flex-col gap-10 items-start border-l border-l-orange-10 px-8 lg:px-16 max-w-[800px]">
              <p>{body}</p>
              <div className=" flex items-center gap-8">
                {female && <Image src={she} alt="avatar image" width={60} height={60} />}
                {male &&  <div className='p-[1px] bg-gray-300 rounded-full'><Image src={he} alt="avatar image" width={60} height={60} /></div>}
                <div>
                  <p className=" capitalize text-lg font-semibold">{name}</p>
                  <p className=" capitalize text-sm">{role}</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-between items-center pt-20">
                <button onClick={() => setIndex(index - 1)}>
                <Image src={left} alt="left arrow" width={30} height={30} />
                </button>
              <button onClick={() => setIndex(index + 1)}>
              <Image src={right} alt="right arrow" width={30} height={30} />
              </button>
              
            </div>
          </div>
        )
      })}

      {/* <div className=" flex flex-col gap-10 items-start border-l border-l-orange-10 px-8 lg:px-16 max-w-[800px]">
              <p>
                We have years of experience and hands-on you can bank on. We
                develop Solutions and Tools to ease your business processes via
                the web. We also train and support our{' '}
              </p>
              <div className=" flex items-center gap-8">
                <Image src={avatar} alt="avatar image" width={60} height={60} />
                <div>
                  <p className=" text-lg font-semibold">Olayode Usman</p>
                  <p className=" text-sm">Andela, Project Manager</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-between items-center pt-20">
              <Image src={left} alt="left arrow" width={30} height={30} />
              <Image src={right} alt="right arrow" width={30} height={30} />
            </div> */}
    </div>
  )
}
