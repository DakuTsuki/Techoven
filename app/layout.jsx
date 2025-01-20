import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import localfont from 'next/font/local'
import Image from 'next/image';
import favicon from '@/public/TECHCOVEN-PNG.png';
import whatsapp from "@/public/whatsapp2.svg";

const sf = localfont ({
  src: [
    {
      path: "../public/font/SFPRODISPLAYBOLD.ttf",
      weight: "700"
    },
    {
      path: "../public/font/SFPRODISPLAYREGULAR.ttf",
      weight: "400"
    },
    {
      path: "../public/font/SFPRODISPLAYMEDIUM.ttf",
      weight: "500"
    },
  ],
  variable: "--font-sf",
});


export const metadata = {
  title: 'TechCoven',
  description: 'We offer high in demand tech courses such as Fullstack Website Development course, Product Design (UI/UX), Data Science/Analysis, Cyber Security and Frontend Engineering.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sf.variable}`}>
      <link rel="icon" href={favicon}/>
      <body className=" min-h-screen text-black-10"> 
        <Navbar />
        <main className=' relative top-[70px]'>
        {children}
        <Footer />
        </main>
        <div className=' fixed z-50 bottom-5 right-5'>
          <a href="https://wa.me/7053338151?text=Hello">
          <Image src={whatsapp} width={60} height={60}/>
          </a>
        </div>
        
      </body>
    </html>
  )
}
