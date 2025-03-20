import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Thanks Siripela Homes & Construction for making our dream reality. From designing to completion it was a hassle free journey.",
      name: "Hemal Mahagegerawatte",
      designation: "Client",
      source: "via Facebook",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "Siripela Homes transformed our outdated space into a modern masterpiece. Their attention to detail and commitment to quality is unmatched.",
      name: "Sarah Perera",
      designation: "Client",
      source: "via Google",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "Professional, punctual, and perfect execution. Our renovation was completed on time and within budget. Couldn't be happier with the results!",
      name: "Rajiv Mendis",
      designation: "Client",
      source: "via Instagram",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "The team at Siripela Homes understood our vision perfectly. They guided us through every step of the construction process with expertise and patience.",
      name: "Amali Fernando",
      designation: "Client",
      source: "via Facebook",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "From the initial consultation to the final walkthrough, Siripela Homes exceeded our expectations. Their craftsmanship and attention to detail are evident in every corner of our new home.",
      name: "Dinesh Jayawardena",
      designation: "Client",
      source: "via Google",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
  ]

  return (
    <AnimatedTestimonials
      testimonials={testimonials}
      autoplay={true}
      title="What Our Clients Say"
      subtitle="Discover why our clients trust Siripela Homes & Construction to bring their dream homes to life"
    />
  )
}

