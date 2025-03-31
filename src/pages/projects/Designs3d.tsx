import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRight, Badge, Bath, Bed, Building, Building2, Eye, Home, Ruler } from "lucide-react";
import { motion } from "framer-motion";


const buildingTypes = [
  {
    id: "single-storey",
    title: "Single Storey House",
    description: "Modern minimalist designs with optimal space utilization for comfortable living.",
    features: ["Open floor plan", "Energy efficient", "Smart home integration"],
    icon: <Home className="h-5 w-5" />,
    image:
      "https://files.catbox.moe/ilzddg.jpg",
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


const Designs3d = () => {

  const [activeCard, setActiveCard] = React.useState<number | null>(null)


  return (
    <>
    <div className="text-center text-3xl font-bold text-slate-800 dark:text-white mb-12">
    <p>3D DESIGNS </p>
    <p className='text-lg  font-normal text-slate-600 my-2'>
    Bringing your ideas to life with precision and creativity. Explore our services for innovative, high-quality 3D solutions tailored to your needs.


    </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
       {
        buildingTypes.map((product , index)=>(
              
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
        ))
       }
    </div>

   
    </>
  )
}

export default Designs3d;