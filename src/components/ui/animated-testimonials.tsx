
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";


type Testimonial = {
  quote: string
  name: string
  designation: string
  source: string
  src: string
  rating: number
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  title = "What Our Clients Say",
  subtitle = "Hear from our satisfied customers about their experience with Siripela Homes & Construction",
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
  title?: string
  subtitle?: string
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
              <p className="text-gray-500 font-medium">Siripela Homes</p>
            </div>

            <div className="grid grid-cols-5 gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive(index) ? "bg-orange-500 w-8" : "bg-gray-200 w-6"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <motion.p className="text-gray-800 font-medium mb-4">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonials[active].rating ? "fill-orange-500 text-orange-500" : "fill-gray-200 text-gray-200"}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src={testimonials[active].src || "/placeholder.svg"}
                  alt={testimonials[active].name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{testimonials[active].name}</h3>
                <p className="text-sm text-gray-500">{testimonials[active].source}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-4 pt-6 justify-end">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-orange-50 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover/button:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-orange-50 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover/button:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

