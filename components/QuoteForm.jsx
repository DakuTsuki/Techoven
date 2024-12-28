"use client"
import React, { useState } from 'react'
import Button from '@/components/Button'

export default function QuoteForm({course}) {

  console.log(course);

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ number, setNumber ] = useState("");
  const [ gender, setGender ] = useState("");
  const [ mode, setMode ] = useState("");
  const [ message, setMessage ] = useState("");


  async function handleSubmit(e) {
          e.preventDefault();
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
              },
              body: JSON.stringify({
                  access_key: "c444cd7d-f20d-493e-91e3-7ed543be973a",
                  name: name,
                  email: email,
                  number: number,
                  gender: gender,
                  trainingMode: mode,
                  message: message,
              }),
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
              e.target.reset();
          }
      }

 

  return (
    <div className=' pt-16'>
            <h3 className=" text-3xl font-medium pb-10">Request a quote</h3>
            <form onSubmit={handleSubmit} className=" w-full">
              <div className=" flex flex-col gap-8 mt-1">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone number"
                  id="phone"
                  onChange={(e) => setNumber(e.target.value)}
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                />
               <select name='Gender' onChange={(e) => setGender(e.target.value)} className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
                <option className=' text-gray-300'>Select Gender</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
            </select>
                
                <select name='Training mode' onChange={(e) => setMode(e.target.value)} className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
                <option className=' text-gray-300'>Training Mode</option>
                <option value="Online">Online</option>
                <option value="Offline" >Offline</option>
            </select>
                <textarea
                  name="message"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className=" w-full border border-gray-300 rounded-lg p-2 min-h-[200px] outline-none"
                ></textarea>
                <Button
                  title={'Get a quote'}
                  type={'submit'}
                  variant={'btn-orange w-[200px] ml-auto'}
                />
              </div>
            </form>
          </div>
  )
}
