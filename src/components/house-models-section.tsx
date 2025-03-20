"use client"

import { useState } from "react"
import { Bed, Bath, Ruler, ChevronDown, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import GradientButton from "./nice-btn"
// Sample data for house models
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
    image: "https://files.catbox.moe/pwd79t.jpg",
  },
  {
    id: 4,
    title: "Traditional Family Home - Model D",
    type: "Single Storey",
    size: 1950,
    style: "Traditional",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://files.catbox.moe/pwd79t.jpg",
  },
  {
    id: 5,
    title: "Urban Loft Design - Model E",
    type: "Multi Storey",
    size: 1600,
    style: "Urban",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://files.catbox.moe/pwd79t.jpg",
  },
  {
    id: 6,
    title: "Retail Storefront - Model F",
    type: "Commercial",
    size: 2500,
    style: "Modern",
    bedrooms: 0,
    bathrooms: 1,
    image: "https://files.catbox.moe/pwd79t.jpg",
  },
]

export function HouseModelsSection() {
  const [filters, setFilters] = useState({
    type: "all",
    size: "all",
    style: "all",
  })
  const [sortBy, setSortBy] = useState("popular")

  // Filter and sort the house models
  const filteredModels = houseModels.filter((model) => {
    if (filters.type !== "all" && model.type !== filters.type) return false
    if (filters.style !== "all" && model.style !== filters.style) return false
    if (filters.size !== "all") {
      if (filters.size === "small" && model.size >= 2000) return false
      if (filters.size === "medium" && (model.size < 2000 || model.size >= 2500)) return false
      if (filters.size === "large" && model.size < 2500) return false
    }
    return true
  })

  // Sort the filtered models
  const sortedModels = [...filteredModels].sort((a, b) => {
    if (sortBy === "newest") return b.id - a.id
    if (sortBy === "largest") return b.size - a.size
    // Default: popular (no change to order)
    return 0
  })

  return (
    <div>

   
    <section className="py-8 bg-white sm-max:p-2  p-8 shadow-lg rounded-xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Design Your Dream Home</h2>
        <p className="text-muted-foreground">
          Explore our pre-designed house models and customize them to suit your lifestyle.
        </p>
      </div>

  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedModels.map((model) => (
          <Card
            key={model.id}
            className="overflow-hidden group pb-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={model.image || "/placeholder.svg"} alt={model.title}  className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{model.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4  max-sm:flex-col text-sm text-muted-foreground ">
                {model.type !== "Commercial" && (
                  <>
                    <div className="flex items-center justify-center">
                      <Bed className="h-4 w-4 " />
                      {model.bedrooms} Bedrooms
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {model.bathrooms} Bathrooms
                    </div>
                  </>
                )}
                <div className="flex items-center">
                  <Ruler className="h-4 w-4 mr-1" />
                  {model.size} sq. ft.
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full flex items-center justify-center" variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Explore This Model
              </Button>
            </CardFooter>
          </Card>
        ))}

   


      </div>
      <div className="flex justify-center w-full mt-8">
        <GradientButton className="w-full max-w-xs">Explore All Models</GradientButton>
        </div>
    </section>

    </div>
  )
}

