import React, { useEffect , useMemo, useState} from 'react'
import PropertyCard from '@/components/property-card'
import supabase from '@/lib/supabaseClient';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import LoadingAnimation from '@/components/Loading';



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

const ITEMS_PER_PAGE = 9

const SingleStoreyHouses = () => {

   const [singleStoreyHouses, setSingleStoreyHouses] = React.useState([]);
   const [totalCount, setTotalCount] = useState(0);
   const [currentPage, setCurrentPage] = useState(1)
   const [totalPages, setTotalPages] = useState(0)
   const [loading, setLoading] = useState(true)

   useMemo(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" })
   },[
    currentPage
   ])



  useEffect(() => {
    fetchSingleStoreyHouses();
    getNumberofProperties();
  }, [
    currentPage
  ])

  const fetchSingleStoreyHouses = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('siripela-homes')
      .select('*')
      .eq('category', 'Single Storey')
      .range((currentPage -1)* ITEMS_PER_PAGE ,currentPage * ITEMS_PER_PAGE - 1 );
      setSingleStoreyHouses(data);

    if (error) {
      console.error('error', error)
      return
    }
    
    setLoading(false)

    console.log('data',
      data) 
  }

  async function getNumberofProperties() {
    const { count } = await supabase
      .from('siripela-homes')
      .select('*', { count: 'exact' })
      .eq('category', 'Single Storey');

    setTotalCount(count)
    setTotalPages(Math.ceil(count / ITEMS_PER_PAGE))

  
  }

  if(loading){
    return <LoadingAnimation />
  }
  if(!singleStoreyHouses || singleStoreyHouses.length === 0){
    return (
      <div className="container px-4 py-12 mx-auto bg-gradient-to-b from-white to-secondary/5">
        <h2 className="text-3xl font-bold text-primary mb-2">No Properties Available</h2>
      </div>
    )
  }



  return (
    <div className="container px-4 py-12 mx-auto bg-gradient-to-b from-white to-secondary/5">
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Single Storey Properties
        </h2>
        <div className=" mt-5 h-1 bg-secondary "></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {singleStoreyHouses.map((property) => (
          <PropertyCard
            key={property?.id}
            type="Single Storey House"
            title={property.title}
            description={property.description}
            id={property?.id}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
            image={property.images}
          />
        ))}
      </div>


      <div className="flex justify-center mt-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className=' cursor-pointer ' onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem className=' cursor-pointer ' key={index}>
                <PaginationLink onClick={() => setCurrentPage(index + 1)}>{index + 1}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext className=' cursor-pointer ' onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        </div>  
    </div>
  );
}

export default SingleStoreyHouses