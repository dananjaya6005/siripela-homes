"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { ArrowRight, Building, Building2, HomeIcon as Home1 } from "lucide-react"
import { useMediaQuery } from "@/hook/use-mobile"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const ProductCard = ({
  product,
}: {
  product: {
    id: string
    title: string
    description: string
    features: string[]
    icon: React.ReactNode
    image: string
    color: string
  }
}) => {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <div className="h-full w-full group">
      <Card
        className="overflow-hidden h-full border-0 shadow-xl bg-white dark:bg-slate-900 pb-5"
        onMouseEnter={() => setActiveCard(product.id)}
        onMouseLeave={() => setActiveCard(null)}
      >
        <div className="relative h-64 overflow-hidden">
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
            <Badge className="text-white border-0">
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
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

export default function ProductCarousel() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const buildingTypes = [
    {
      id: "single-storey",
      title: "Single Storey House",
      description: "Modern minimalist designs with optimal space utilization for comfortable living.",
      features: ["Open floor plan", "Energy efficient", "Smart home integration"],
      icon: <Home1 className="h-5 w-5" />,
      image: "https://files.catbox.moe/ilzddg.jpg",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: "multi-storey",
      title: "Multi Storey House",
      description: "Elegant multi-level homes with contemporary aesthetics and functional spaces.",
      features: ["Panoramic views", "Luxury finishes", "Sustainable design"],
      icon: <Building2 className="h-5 w-5" />,
      image: "https://files.catbox.moe/s91570.jpg",
      color: "from-emerald-600 to-emerald-400",
    },
    {
      id: "commercial",
      title: "Commercial Building",
      description: "Innovative commercial spaces designed for productivity and brand expression.",
      features: ["Flexible layouts", "Premium amenities", "Strategic locations"],
      icon: <Building className="h-5 w-5" />,
      image: "https://files.catbox.moe/lwoapp.jpg",
      color: "from-purple-600 to-purple-400",
    },
  ]

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % buildingTypes.length
    setCurrentIndex(newIndex)

    if (containerRef.current) {
      const newX = `-${newIndex * 100}%`
      controls.start({ x: newX, transition: { duration: 0.5 } })
    }
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + buildingTypes.length) % buildingTypes.length
    setCurrentIndex(newIndex)

    if (containerRef.current) {
      const newX = `-${newIndex * 100}%`
      controls.start({ x: newX, transition: { duration: 0.5 } })
    }
  }

  // Autoplay functionality
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex, isMobile])

  // If not mobile, don't render the carousel
  if (!isMobile) {
    return (
      <div className="hidden md:flex gap-6 overflow-x-auto py-8 px-4">
        {buildingTypes.map((product) => (
          <div key={product.id} className="w-[450px] max-w-[450px] flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="md:hidden relative overflow-hidden ">
      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex"
          animate={controls}
          initial={{ x: 0 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x

            if (Math.abs(swipe) > 100) {
              if (swipe < 0) {
                nextSlide()
              } else {
                prevSlide()
              }
            } else {
              // Reset to current slide if swipe wasn't strong enough
              const newX = `-${currentIndex * 100}%`
              controls.start({ x: newX, transition: { duration: 0.5 } })
            }
          }}
        >
          {buildingTypes.map((product) => (
            <div key={product.id} className="w-full min-w-full flex-shrink-0 px-4">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {buildingTypes.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              const newX = `-${index * 100}%`
              controls.start({ x: newX, transition: { duration: 0.5 } })
            }}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

