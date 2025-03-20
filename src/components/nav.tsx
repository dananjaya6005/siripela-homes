import {FloatingNav} from '@/components/ui/floating-dock'
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils"

import logo from '../assets/logo.png';

import { useLocation } from 'react-router-dom'
export default function NavbarExample() {
  const location = useLocation()
  const pathname = location.pathname

  const { scrollY } = useScroll()
  const [showExtraElements, setShowExtraElements] = useState(true)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight) {
      setShowExtraElements(false)
    } else {
      setShowExtraElements(true)
    }
  })
  
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
       title : 'Lands',
       href : 'lands'
    },
    {
      title: "Services",
      href: "/services",
    },

    {
      title: "About",
      href: "/about-us",
    },

    {
      title: "Contact",
      href: "/contact",
    },
  ]


  

  return (

  
    <div className="fixed top-4 inset-x-0 max-w-screen mx-8  z-50 drop-shadow-md flex items-center  justify-between">
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={showExtraElements ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="flex items-center "
      >
        <Link to="/">
      
          <div className="flex items-center  md:drop-shadow-sm">
          
          <img src={logo} alt="logo" className='w-16 rounded-full mr-3' />
            <div>
              <h1 className={cn("text-2xl font-bold text-white" 
              ,pathname === '/' ? 'text-white' : 'text-black'
               )}>LEO HOLDINGS LANKA</h1>
              <p className={cn("text-xs  mt-1 tracking-[5] text-white" ,  pathname === '/' ? 'text-white' : 'text-black') }>We Realize Your Aspiration</p>
            </div>
          </div>
 
    
        </Link>
      </motion.div>

    

      <div className='md-max:hidden'>
      <FloatingNav items={navItems} />
      </div>

      <div
      className='
      md:hidden
      w-full
      fixed
      top-4
      z-50'
      >
 

       
      <FloatingNav 
     
      items={navItems} />
    
      </div>
    


      {/* <motion.div
      initial={{ opacity: 1, x: 0 }}
      animate={showExtraElements ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="flex items-center"
    >
      <Link href="/contact">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
          Contact
        </button>
      </Link>
    </motion.div> */}
  </div>



    
  )
}



