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



const ITEMS_PER_PAGE = 9

const CompletedProjects = () => {

   const [completedProjects, setCompletedProjects] = useState([])
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
      .eq('category', 'Completed Projects')
      .range((currentPage -1)* ITEMS_PER_PAGE ,currentPage * ITEMS_PER_PAGE - 1 );
      setCompletedProjects(data);

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
      .eq('category', 'Completed Projects');

    setTotalCount(count)
    setTotalPages(Math.ceil(count / ITEMS_PER_PAGE))

  
  }

  if(loading){
    return <LoadingAnimation />
  }
  if(!completedProjects || completedProjects.length === 0){
    return (
      <div className="container px-4 py-12 mx-auto bg-gradient-to-b from-white to-secondary/5">
        <h2 className="text-3xl font-bold text-primary mb-2">No Properties Available</h2>
      </div>
    )
  }



  return (
    <div className="container px-4 min-h-screen py-12 mx-auto bg-gradient-to-b from-white to-secondary/5">
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Completed Projects
        </h2>
        <div className=" mt-5 h-1 bg-secondary "></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {completedProjects.map((property) => (
          <PropertyCard
            key={property?.id}
            type="Single Storey House"
            title={property.client_name}
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

export default CompletedProjects;