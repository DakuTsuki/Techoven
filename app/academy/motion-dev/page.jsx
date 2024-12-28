import React from "react";
import Image from "next/image";
import hero from "@/public/academy/motion-dev-bg.jpg";
import clock from "@/public/clock.svg";
import mark from "@/public/mark.png";
import QuoteForm from "@/components/QuoteForm";

export default function MotionDevelopment() {
  return (
    <div className=" text-base lg:text-lg xl:text-xl relative">
      <section className=" relative hero-img">
        <Image
          src={hero}
          alt="web development page background image"
          className="w-full h-96 object-cover relative"
        />
        <div className=" text-white-10 px-5 lg:px-16 absolute z-30 left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center  text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">
            Motion Development
          </h2>
          <p className=" mt-5 max-w-[600px]">
            Motion Development is a form, a way, a convention, and a technique
            for creating animated, moving images.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-16 py-24">
        <div className=" max-w-[850px] m-auto">
          <div>
            <h2
              className=" text-2xl md:text-3xl font-medium border-b pb-2 
            border-b-lightGray-10"
            >
              Motion Development
            </h2>
            <p className=" pt-5">
              Motion Development course is appropriate for novice users of After
              Effects or for those working or wishing to work in the video
              field, or for Adobe users wishing to expand their skills in video
              effects. This class covers the core concepts and skills necessary
              to excel in motion graphics animation and visual effects, as well
              as advanced approaches and techniques.
            </p>
          </div>

          <div className=" pt-10">
            <h3 className=" font-medium text-xl border-b pb-2">Courses</h3>
            <ul className=" flex flex-col gap-y-3 mt-4">
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">
                  Introduction to Motion Graphics and After Effects
                </h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">
                  Basics of Animation in After Effects
                </h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">
                  Basic Animation Using Effects and Presets
                </h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">Animating Text</h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">Working with Shape Layers</h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">Working with Masks</h4>
              </li>

              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">Compositing & Green Screen</h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">Using 3D Effects</h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">
                  Advanced Editing Techniques and Effects
                </h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">Rendering and Outputting</h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">
                  Career Guidance & Industry Preparation
                </h4>
              </li>
              <li className=" flex items-start gap-x-3">
                <Image
                  src={mark}
                  alt="a mark image"
                  className=" w-[20px] h-[20px]"
                />
                <h4 className=" font-medium">
                  Project, Mentorship and Assessment
                </h4>
              </li>
            </ul>
            <div className=" pt-16">
              <h5 className=" font-medium text-xl border-b pb-2">Duration</h5>
              <div className=" flex items-center gap-x-2 pt-5">
                <Image src={clock} alt=" clock image" className=" w-7 h-7" />
                <p>The program is set to run for 4 months.</p>
              </div>
            </div>
          </div>
          <div className=" md:py-12 py-8 md:px-10 px-5 rounded-lg price-card text-white-10 mt-12">
            <h3 className=" md:text-2xl text-lg  font-medium">
              Full Tuition Option
            </h3>
            <h2 className=" md:text-5xl text-3xl font-medium py-3">₦350,000</h2>
            <p>
              Pay your fees 100% upfront. No other charges come up during your
              learning.
            </p>
          </div>

          <QuoteForm course={"Motion Development"} />
        </div>
      </section>
    </div>
  );
}
