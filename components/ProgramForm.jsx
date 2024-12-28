"use client"
import React, { useState} from 'react'
import Button from '@/components/Button'

export default function ProgramForm(props) {

    const courses = props.courses
    const price = props.price
    const program = props.program

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ mode, setMode ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ course, setCourse] = useState("");


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
              program: program,
              name: name,
              email: email,
              number: number,
              course: course,
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
            <h3 className=" text-2xl font-medium pb-2">Register, We’ve Helped Thousands Of Grads Go From Beginner To Pro.</h3>
            <p className='text-lg font-medium pb-5'>Price : {price}</p>
            <form onSubmit={handleSubmit} className=" w-full">
              <div className=" flex flex-col gap-8 mt-1">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  name="number"
                  id="email"
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                  onChange={(e) => setNumber(e.target.value)}
                />
                
                <select name='Gender' onChange={(e) => setGender(e.target.value)} className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
                <option className=' text-gray-300'>Select Gender</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
            </select>

              {courses && 
              <select name='Course' onChange={(e) => setCourse(e.target.value)} className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
              <option className=' text-gray-300'>Select a course</option>
              {courses && courses.map((course, index) => {
                  return (
                      <option value={course} key={index}>
                          {course}
                      </option>
                  );
              })}
          </select>}
                
                <select name='Training mode' onChange={(e) => setMode(e.target.value)} className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
                <option className=' text-gray-300'>Training Mode</option>
                <option value="Online">Online</option>
                <option value="Offline" >Offline</option>
            </select>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
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
