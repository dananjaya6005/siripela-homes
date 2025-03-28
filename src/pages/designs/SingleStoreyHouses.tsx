import React, { useEffect } from 'react'
import PropertyCard from '@/components/property-card'
import supabase from '@/lib/supabaseClient';


const sampleSingleStoreyHouses = [
  {
    id: "12345",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    image: "https://files.catbox.moe/ilzddg.jpg"
  },
  {
    id: "12346",
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    image: "https://files.catbox.moe/ex31p2.jpg"
  },
  {
    id: "12347",
    bedrooms: 5,
    bathrooms: 4,
    area: 2500,
    image: "https://files.catbox.moe/g83p4o.jpg"
  },
  {
    id: "12345",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    image: "https://files.catbox.moe/ilzddg.jpg"
  },
  {
    id: "12346",
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    image: "https://files.catbox.moe/ex31p2.jpg"
  },
  {
    id: "12347",
    bedrooms: 5,
    bathrooms: 4,
    area: 2500,
    image: "https://files.catbox.moe/g83p4o.jpg"
  }
]

const SingleStoreyHouses = () => {

  useEffect(() => {
    fetchSingleStoreyHouses()
  }, [])

  const fetchSingleStoreyHouses = async () => {
    const { data, error } = await supabase
      .from('single_storey_houses')
      .select('*')

    if (error) {
      console.error('error', error)
      return
    }

    console.log('data',
      data) 
  }



  return (
    <div className="container px-4 py-12 mx-auto bg-gradient-to-b from-white to-secondary/5">
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-bold text-primary mb-2">Single Storey Properties</h2>
        <div className=" mt-5 h-1 bg-secondary "></div>



      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {sampleSingleStoreyHouses.map((property) => (
          <PropertyCard
            key={property.id}
            type="Single Storey House"
            id={property.id}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
            image={property.image}
          />
        ))}
     

      </div>
    </div>
  )
}

export default SingleStoreyHouses