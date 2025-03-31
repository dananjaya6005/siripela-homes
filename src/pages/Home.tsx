import React from 'react';
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { HeroParallax } from '@/components/hero-parallax';
import { Building, Building2, Home as Home1 } from 'lucide-react';
import AboutUsSection from '@/components/about-us';
import GradientButton from '@/components/nice-btn';
import AnimatedTestimonialsDemo from '@/components/animated-testimonials-demo';
import WhyChooseUs from '@/components/why-choose-us';
import BankingPartners from '@/components/banking-partners';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const houseModels = [
  {
    id: 1,
    title: "Modern Single Storey - Model A",
    type: "Single Storey",
    size: 1800,
    style: "Modern",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://files.catbox.moe/nwp3hs.jpg",
  },
  {
    id: 2,
    title: "Contemporary Two-Level - Model B",
    type: "Multi Storey",
    size: 2200,
    style: "Contemporary",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://files.catbox.moe/0z6n4c.jpg",
  },
  {
    id: 3,
    title: "Minimalist Office Space - Model C",
    type: "Commercial",
    size: 3000,
    style: "Minimalist",
    bedrooms: 0,
    bathrooms: 2,
    image: "https://files.catbox.moe/v8mnhi.jpg",
  },
]

const buildingTypes = [
  {
    id: "single-storey",
    title: "Single Storey House",
    description: "Modern minimalist designs with optimal space utilization for comfortable living.",
    features: ["Open floor plan", "Energy efficient", "Smart home integration"],
    icon: <Home1 className="h-5 w-5" />,
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


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
]

const Home = () => {
  return (
    <>
      <div className="">
        <HeroParallax products={buildingTypes} />
      </div>

      <div>
        <section className="py-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Design Your Dream Home
            </h2>
            <p className="text-muted-foreground">
              Explore our pre-designed house models and customize them to suit
              your lifestyle.
            </p>
          </div>

          <div className=" overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_80%,transparent)] ">
            <InfiniteMovingCards
              className="flex min-w-full shrink-0 gap-4  w-max flex-nowrap"
              speed="slow"
              items={houseModels}
            />
          </div>
          <div className="flex w-full">
            <GradientButton className="w-full max-w-xs mx-auto mt-8  ">
              Explore All Models
            </GradientButton>
          </div>
        </section>

        <AboutUsSection />
      </div>

      <div className="my-12">
        <WhyChooseUs />
      </div>

      <div>
        <AnimatedTestimonialsDemo />
      </div>

      <div>
        <BankingPartners />
      </div>


      <section className="bg-gradient-to-r from-rose-800 to-amber-600 py-16 text-white rounded-2xl max-w-7xl mx-auto mt-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Have Questions? Get in Touch!</h2>
          <p className="mb-8 text-lg text-emerald-100">
            Our team is ready to assist you with all your real estate needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">

          <a href="tel:+94112927505" className="inline-flex">
            <Button  size="lg" variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            </a>

            <a href="mailto:info@siripela.lk" className="inline-flex"> 
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
            </a>
          </div>
        </div>
      </section>

      <div className='mt-24'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31681.751648319547!2d79.94458543030572!3d6.983467569261789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f873c5c4f941%3A0x10c9b976599230da!2sSiripela%20Homes%20%26%20Construction!5e0!3m2!1sen!2slk!4v1742451997205!5m2!1sen!2slk"
          width="100%"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Home