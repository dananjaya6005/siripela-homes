
import { Check, Maximize2, Share2, Printer, Bed, Bath, SquareCode } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PropertyListing() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-znic-700">Single Storey Property</h1>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src="https://files.catbox.moe/ko5jqt.jpg"
                  alt="Property exterior view"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src="https://files.catbox.moe/ex31p2.jpg"
                  alt="Property interior view"
         
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src="https://files.catbox.moe/g83p4o.jpg"
                  alt="Property kitchen view"
            
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src="https://files.catbox.moe/ilzddg.jpg"
                  alt="Property backyard view"

                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src="https://files.catbox.moe/ex31p2.jpg"
                  alt="Property bathroom view"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>
            </CarouselItem>
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
                <h2 className="text-sm font-medium text-amber-600">Property ID: SS 016</h2>
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
                  <div className="font-semibold">3</div>
                  <div>Bedrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100">
                  <Bath className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">2</div>
                  <div>Bathrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100">
                  <SquareCode className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">2,500</div>
                  <div>Sq Ft</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold text-gray-800">Description</h3>
            <p className="text-gray-700">
              A beautiful single-story house with a spacious layout, featuring 3 bedrooms and 2 bathrooms. The property
              includes a carport, large garden area, and is surrounded by trees providing natural shade and privacy.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold text-gray-800">Features</h3>
            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                <span className="text-sm">Dining Area</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                <span className="text-sm">Living Area</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                <span className="text-sm">Double Car Porch</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                <span className="text-sm">Office Room</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                <span className="text-sm">Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-600" />
                <span className="text-sm">TV Lobby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

