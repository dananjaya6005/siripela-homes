
import { useState } from "react"
import { Bed, Bath, Ruler, ChevronDown, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import GradientButton from "./nice-btn";

// Sample data for completed projects
const completedProjects = [
  {
    id: 1,
    title: "Luxury Multi Storey - Colombo",
    type: "Multi Storey",
    location: "Colombo",
    year: 2023,
    bedrooms: 4,
    bathrooms: 3,
    size: 2500,
    image: "https://files.catbox.moe/pwd79t.jpg",
  },
  {
    id: 2,
    title: "Beachfront Villa - Galle",
    type: "Single Storey",
    location: "Galle",
    year: 2022,
    bedrooms: 3,
    bathrooms: 2,
    size: 1800,
    image: "https://files.catbox.moe/ex31p2.jpg",
  },
  {
    id: 3,
    title: "Modern Office Complex - Kandy",
    type: "Commercial",
    location: "Kandy",
    year: 2023,
    bedrooms: 0,
    bathrooms: 4,
    size: 5000,
    image: "https://files.catbox.moe/0z6n4c.jpg",
  },
  {
    id: 4,
    title: "Hillside Retreat - Nuwara Eliya",
    type: "Multi Storey",
    location: "Nuwara Eliya",
    year: 2021,
    bedrooms: 5,
    bathrooms: 4,
    size: 3200,
    image: "https://files.catbox.moe/qewftx.jpg",
  },
  {
    id: 5,
    title: "Coastal Bungalow - Negombo",
    type: "Single Storey",
    location: "Negombo",
    year: 2022,
    bedrooms: 2,
    bathrooms: 2,
    size: 1500,
    image: "https://files.catbox.moe/b32izz.jpg",
  },
  {
    id: 6,
    title: "Shopping Center - Batticaloa",
    type: "Commercial",
    location: "Batticaloa",
    year: 2021,
    bedrooms: 0,
    bathrooms: 6,
    size: 8000,
    image: "https://files.catbox.moe/f6uipj.jpg",
  },
]

export function CompletedProjectsSection() {

  return (
    <section className="py-8 shadow-xl   bg-background/80 backdrop-blur-sm rounded-xl p-6 sm-max:p-2">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Explore Our Creations</h2>
        <p className="text-muted-foreground">
          Discover the homes and buildings we've brought to life across the island.
        </p>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden group pb-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title}  className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4  max-sm:flex-col text-sm text-muted-foreground">
                {project.type !== "Commercial" && (
                  <>
                    <div className="flex items-center ">
                      <Bed className="h-4 w-4 mr-1" />
                      {project.bedrooms} Bedrooms
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {project.bathrooms} Bathrooms
                    </div>
                  </>
                )}
                <div className="flex items-center">
                  <Ruler className="h-4 w-4 mr-1" />
                  {project.size} sq. ft.
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <ImageIcon className="mr-2 h-4 w-4" />
                See More Details 
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center w-full mt-8">
        <GradientButton className="w-full max-w-xs mx-auto mt-8  ">
          Explore All Projects
        </GradientButton>
        </div>
    </section>
  )
}

