import Button from "@/components/Button";
import Image from "next/image";
import heroImg from "@/public/home.jpg";
import one from "@/public/leumax/one.JPG";
import two from "@/public/leumax/two.JPG";
import three from "@/public/leumax/three.JPG";
import four from "@/public/leumax/four.JPG";
import five from "@/public/leumax/five.JPG";
import six from "@/public/leumax/six.JPG";
import seven from "@/public/leumax/seven.JPG";
import eight from "@/public/leumax/eight.JPG";
import nine from "@/public/leumax/nine.JPG";
import landing from "@/public/landing.png";
import ux from "@/public/ux.png";
import it from "@/public/it-solutions.png";
import js from "@/public/homeIcons/js.svg";
import next from "@/public/homeIcons/nextjs.svg";
import tail from "@/public/homeIcons/tailwind.svg";
import css from "@/public/homeIcons/css.svg";
import html from "@/public/homeIcons/html.svg";
import react from "@/public/homeIcons/react-js.svg";
import boot from "@/public/homeIcons/bootstrap.svg";
import python from "@/public/homeIcons/python.svg";
import node from "@/public/homeIcons/nodejs.svg";
import collin from "@/public/sponsors/collin-logo.png";
import google from "@/public/sponsors/google-logo.png";
import innermen from "@/public/sponsors/innermen-logo.png";
import microsoft from "@/public/sponsors/microsoft-logo.png";
import osun from "@/public/sponsors/osun-logo.png";
import ondo from "@/public/sponsors/ondo-logo.png";
import premier from "@/public/sponsors/premier-logo.png";
import Faq from "@/components/Faq";
import { Arrow } from "@/components/Arrow";
import "animate.css";
import Link from "next/link";
import Academy from "./academy/page";

export default function Home() {
  const data = [
    {
      title: "IT Consultant",
      body: "IT consulting, also referred to as technology consulting, relates to services aimed at helping clients on how they can utilise information technology (IT) and digital to optimally achieve their business goals.",
    },
    {
      title: "Product Design",
      body: "Product design is the process designers use to blend user needs with business goals to help brands make consistently successful products.",
    },
    {
      title: "IOT Engineering",
      body: "IoT (Internet of Things) engineers create and maintain smart technology for products ranging from automobiles and smartwatches to virtual assistant devices and pacemakers.",
    },
    {
      title: "Sales & Marketing",
      body: "Sales & Marketing refers to businesses’ strategic approach and activities to promote their products or services, generate leads, and drive revenue through sales channels.",
    },
    {
      title: "Web Development",
      body: "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.",
    },
    {
      title: "Mobile App Development",
      body: "Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.",
    },
  ];
  const itemClasses = {
    base: "pt-4",
    title: "text-xl mr-auto",
    indicator: "ml-auto",
    content: "pb-8",
  };

  return (
<main className=" text-base lg:text-lg">
      {/* Hero section */}
      <section className=" animate__animated animate__fadeIn relative">
        <div className=" relative min-h-screen  flex justify-center">
          <Image
            src={js}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-[50%] left-0"
          />
          <Image
            src={python}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-16 left-5"
          />
          <Image
            src={react}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute bottom-24 right-10"
          />
          <Image
            src={css}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute bottom-24 left-8"
          />
          <Image
            src={html}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-[50%] right-5 "
          />
          <Image
            src={boot}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-24 right-10"
          />
          <Image
            src={node}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-5 right-1/2"
          />
          <Image
            src={tail}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute bottom-32 left-1/2"
          />
          <Image
            src={next}
            alt="javascript icon"
            className=" w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-0 right-0"
          />

          <div
            className="relative m-auto  z-30 md:text-center max-w-[600px] 
          lg:max-w-[1200px] px-5 md:px-0 flex flex-col  md:m-auto lg:px-16"
          >
            <p className="border text-sm border-orange-10 absolute -top-10 justify-start  flex md:justify-center md:self-center px-2 rounded-full">
              We Build To Last
            </p>
            <h1 className="lg:text-5xl md:text-5xl text-3xl">
              {/* From ideation to value{" "} */}
              We are connecting
              <span className=" block font-bold">
                {" "}
                People, Technology & Data
              </span>
            </h1>
            <p className="max-w-2xl m-auto pt-5 hero-text">
              We connect your ideas with digital reality, creatng impactful
              solutions that accelerate business growth, nurture employee
              engagement, and enrich customer experiences.
            </p>
            <div className=" pt-10 flex items-center justify-start gap-5 md:justify-center">
              <Link href={"/services"}>
                <Button
                  title={"Our Services"}
                  type={"button"}
                  variant={"btn-orange"}
                />
              </Link>
              <Link href={"/academy"}>
                <Button
                  title={"Our Training"}
                  type={"button"}
                  variant={"btn-orange-outline"}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

     <Academy/>
    </main>
    );
}
