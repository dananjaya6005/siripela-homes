export default function AboutUsSection() {
    return (
      <section className="relative w-full py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Company name */}
          <h3 className="text-center text-rose-600 font-medium mb-2">Siripela Homes</h3>
  
          {/* Main heading */}
          <h1 className="text-center text-5xl font-bold text-gray-900 mb-2">ABOUT US</h1>
  
          {/* Subtitle */}
          <p className="text-center text-gray-500 mb-12">What we have done for people</p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* YouTube Video Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/cIVCf4a_TXk?start=1"
                  title="Luxury Modern House | Siripela Homes | House for Sale"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
  
            {/* Text content */}
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-4">
                We have established a unique position among our customer minds as we use the latest technology & highest
                quality material for our construction work. As an esteemed player in the industry, we are pioneers in
                providing solutions in order to exceed our customer expectations.
              </p>
              <p>
                Our employees are gifted with intense set of skills & creativity which helps us to complete our
                construction projects within stipulated timelines with the highest possible quality. Our brand esteem
                itself is your mirror of trust which keeps us alive in the construction industry in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
  
        {/* Decorative element at bottom */}
        <div className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-r from-transparent to-rose-500 transform skew-y-1"></div>
      </section>
    )
  }
  
  