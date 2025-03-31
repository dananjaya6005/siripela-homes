
import { Check, Maximize2, Share2, Printer, Bed, Bath, SquareCode } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import supabase from "@/lib/supabaseClient"

export default function PropertyListing() {

  const { propertyId } = useParams();
  const [property, setProperty] = useState<any>(null);


  useEffect(() => {
    fetchPropertyDetails()
  }, [])

  const fetchPropertyDetails = async () => {
    const { data, error } = await supabase
      .from('siripela-homes')
      .select('*')
      .eq('id',  Number(propertyId) )
      .single()

      console.warn('data', data)

    

    if (error) {
      console.error('Error fetching property details:', error)
      return
    }

    setProperty(data)
  }


  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
     
      <div className="mb-6">
      <h1 className="text-2xl font-semibold text-zinc-800 "> {property?.title} </h1>
        <h1 className="text-sm font-semibold text-zinc-400">
          {property?.location}
        </h1>
        
      </div>

      {/* Image Carousel */}
      <div className="relative mb-8">
        <Carousel className="w-full">
          <CarouselContent>

            {property?.images.map((image: string, index: number) => (
                    <CarouselItem>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt="Property exterior view"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                      />
                    </div>
                  </CarouselItem>
               
            ))}

          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
        <div className="md:col-span-3">
          <div className="mb-6 border-b pb-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-medium text-amber-600">Property ID: {property?.title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
                  <Maximize2 className="h-5 w-5" />
                </button>
                <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
                  <Printer className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100">
                  <Bed className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">{property?.bedrooms}</div>
                  <div>Bedrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100">
                  <Bath className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">{property?.bathrooms}</div>
                  <div>Bathrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100">
                  <SquareCode className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold"> {property?.area} </div>
                  <div>Sq Ft</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold text-gray-800">Description</h3>
            <p className="text-gray-700">
            {
              property?.description.length > 0 ? property?.description : "No description available."
            }
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold text-gray-800">Features</h3>
            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 md:grid-cols-3">

              {property?.features.length === 0 && <p className="text-gray-800">No features available.</p>}



              {property?.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-700" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

