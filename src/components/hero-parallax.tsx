
import React, { useEffect, useState , useMemo } from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react"
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Badge, Bath, Bed, Building, Building2, Eye, Home, Ruler } from "lucide-react";
import HeroSection from "./hero-section";
import ProductCarousel from "./HeroCardFormobile";
import { useMediaQuery } from "@/hook/use-mobile";

import { Menu } from "./nav-bar";

const buildingTypes = [
    {
      id: "single-storey",
      title: "Single Storey House",
      description: "Modern minimalist designs with optimal space utilization for comfortable living.",
      features: ["Open floor plan", "Energy efficient", "Smart home integration"],
      icon: <Home className="h-5 w-5" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/998d9aa0c2b1bb41aa611fa01d0d8289.jpg-Fff1kpgvC7NfeWCmcign65jtEGdkBn.jpeg",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: "multi-storey",
      title: "Multi Storey House",
      description: "Elegant multi-level homes with contemporary aesthetics and functional spaces.",
      features: ["Panoramic views", "Luxury finishes", "Sustainable design"],
      icon: <Building2 className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      color: "from-emerald-600 to-emerald-400",
    },
    {
      id: "commercial",
      title: "Commercial Building",
      description: "Innovative commercial spaces designed for productivity and brand expression.",
      features: ["Flexible layouts", "Premium amenities", "Strategic locations"],
      icon: <Building className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-600 to-purple-400",
    },
  ]

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
    const firstRow = products.slice(0, 5)
    const secondRow = products.slice(5, 10)
    const thirdRow = products.slice(10, 15)
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],


      
    })
    const [loaded, setLoaded] = useState(false)

    const isMobile = useMediaQuery("(max-width: 768px)")
    const isDesktop = useMediaQuery("(min-width: 769px)")

     const bgImage = useMemo(() => {
        if (isMobile) {
          return "https://files.catbox.moe/1jeqjz.jpg"
        }
        if (isDesktop) {
          return "https://files.catbox.moe/9jw554.jpg"
        }
        return "https://files.catbox.moe/9jw554.jpg"
      }
      , [isMobile, isDesktop])
     

    useEffect(() => {
        const img = new Image()
        img.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VezP29DIwyOpXeg6gFBoGynOMHj8Ne.png"
        img.onload = () => setLoaded(true)
      }, [])
    
  
    const springConfig = { stiffness: 300, damping: 25, bounce: 100 }
  
    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [-200, 100]), springConfig)
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.1], [15, 0]), springConfig)
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.1], [0.2, 1]), springConfig)
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.1], [20, 0]), springConfig)
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.1], [-600, 0]), springConfig)
  return (
    <div
      ref={ref}
      className=" bg-gradient-to-b from-amber-500 to-slate-50 pt-40 max-sm:pt-10 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="custom-shape-divider-bottom-1742205806">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="absolute inset-0">
        <div
          className={`
            relative w-full h-full
             max-sm:mix-blend-screen
           
           bg-right-top  
         mix-blend-difference

        invert
        bg-no-repeat  
           
       
            transition-opacity duration-500
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: "url('https://files.catbox.moe/9jw554.jpg')",
          
          
        
          }}
        />
      </div>
     

      <Header />
      
      <div className="sm:hidden max-sm:block max-sm:mt-10">
      <ProductCarousel />
      </div>
      
      <div className=" max-sm:hidden">
      <motion.div

        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}

export const Header = () => {
  return (
    <HeroSection/>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {

    const [activeCard, setActiveCard] = useState<string | null>(null)
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product  w-[30rem]  max-[1600px]:max-w-[400px] max-[1400px]:max-w-[350px]  relative shrink-0 rounded-2xl border border-b-0  md:w-[450px]"
    >
          <div className="grid w-full ">

          <Card
            className="overflow-hidden h-full border-0 shadow-xl bg-white dark:bg-slate-900 mb-5"
            onMouseEnter={() => setActiveCard(product.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="relative h-64 overflow-hidden  ">
              <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-30 z-10`}></div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform: activeCard === product.id ? "scale(1.1)" : "scale(1)",
                }}
              />
              <div className="absolute top-4 left-4 z-20">
                <Badge className=" text-white  border-0">
                  {product.icon}
                  <span className="ml-1">{product.title}</span>
                </Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 dark:text-white">{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button className={`w-full bg-gradient-to-r ${product.color} hover:opacity-90 border-0 text-white`}>
                <span>Explore Designs</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
   
  
    </div>
        
      
    </motion.div>
  )
}

