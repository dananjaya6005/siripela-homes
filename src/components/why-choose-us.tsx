
import { Home, Clock, DollarSign, Wrench, PenTool, UserCheck } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Home className="h-12 w-12 mb-4" />,
      title: "Modern Designs",
      description:
        "You can choose from our 200+ designs or our extremely talented designers will build your dream home with exquisite interior as well as exterior designs with an ultra-modern and unique touch.",
      borderColor: "border-red-500",
    },
    {
      icon: <Clock className="h-12 w-12 mb-4" />,
      title: "Timely delivery",
      description:
        "Our pre agreed timelines and delivery schedules will ensure timely completion of your dream home. We make promises that aren't broken!",
      borderColor: "border-green-600",
    },
    {
      icon: <DollarSign className="h-12 w-12 mb-4" />,
      title: "Best Price",
      description:
        "Tight budget? Do not worry. We guarantee the best price in the market! We will build your home at a pre-agreed lump-sum cost with absolutely no variations charged afterwards.",
      borderColor: "border-yellow-500",
    },
    {
      icon: <Wrench className="h-12 w-12 mb-4" />,
      title: "Guaranteed quality",
      description:
        "You will receive a 25 year structural warranty for your home. Our qualified professionals including Chartered Architects and Chartered Engineers are committed and engaged in designing the best homes in the market.",
      borderColor: "border-purple-500",
    },
    {
      icon: <PenTool className="h-12 w-12 mb-4" />,
      title: "At your convenience",
      description:
        "Tired of going behind unreachable house builders? Our agents will be at your service 24/7, 365. We value our customers more than anything!",
      borderColor: "border-blue-500",
    },
    {
      icon: <UserCheck className="h-12 w-12 mb-4" />,
      title: "27 years Trust",
      description:
        "Continuing the legacy of the trust that has been placed on us for more than two generations; Siripela proudly celebrates over 27 years of excellence!",
      borderColor: "border-pink-500",
    },
  ]

  return (
    <section className="py-16  px-4 md:py-2 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-green-500 font-medium mb-2">Siripela Homes</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHY CHOOSE US</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">What we provide with extra features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 flex flex-col items-center text-center border-2 ${feature.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="mb-2 text-gray-900">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

