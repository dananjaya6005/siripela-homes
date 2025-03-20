import { motion } from "framer-motion"
import { ChevronRight, Clock, Award, Zap, Lightbulb, Shield, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const coreValues = [
    { icon: <Clock className="h-5 w-5" />, text: "Timely Delivery" },
    { icon: <Award className="h-5 w-5" />, text: "Driven By Customer Value" },
    { icon: <Zap className="h-5 w-5" />, text: "Obsession For Best Quality" },
    { icon: <Lightbulb className="h-5 w-5" />, text: "Passion For Creativity" },
    { icon: <Shield className="h-5 w-5" />, text: "Esteemed By Trust" },
    { icon: <Fingerprint className="h-5 w-5" />, text: "Mirror Of Uniqueness" },
  ]

  return (
    <div className="relative overflow-hidden  dark:from-zinc-900 z-10 ">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-zinc-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-zinc-700/25"></div>

      <div className="container   max-[1600px]:max-w-7xl  relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center ">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
                <span className="block text-primary ">Building Excellence,</span>
                <span className="block">Crafting Trust</span>
              </h1>
            </motion.div>

            <motion.p className="mt-6 max-w-3xl text-lg text-black  max-[1600px]:text-base  font-semibold " variants={itemVariants}>
              We have established a unique position among our customers by using the latest technology & highest quality
              materials for our construction work. As pioneers in the industry, we exceed expectations with our skilled
              team and timely delivery.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-4" variants={itemVariants}>
              <Button size="lg" className="gap-2">
                Our Projects <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Right column - Core values and image */}
          <div className="flex flex-col justify-center ">
            <motion.div
              className="relative rounded-2xl bg-zinc-50 p-6 shadow-lg dark:bg-zinc-800/50 dark:shadow-zinc-700/10"
              variants={itemVariants}
            >
              <div className="absolute -inset-px rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-700"></div>

              <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Our Core Values</h3>

              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-zinc-800"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {value.icon}
                    </div>
                    <span className="text-sm font-medium">{value.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* <motion.div className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400" variants={itemVariants}>
              Your mirror of trust in the construction industry
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

