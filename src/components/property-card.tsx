import { Bath, Bed, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PropertyCardProps {
  type: "Single Storey" | "Multi Storey" | "Commercial"
  id: string
  bedrooms?: number
  bathrooms?: number
  area: number
  image: string
}

export default function PropertyCard({ type, id, bedrooms, bathrooms, area, image }: PropertyCardProps) {
  const isCommercial = type === "Commercial"

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-primary">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={`${type} property`}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-accent text-black font-medium">ID: {id}</Badge>
      </div>
      <CardHeader className="relative p-4 bg-gradient-to-r from-secondary/10 to-white border-b">
        <h3 className="text-xl font-bold text-primary">{type} Property</h3>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-wrap justify-center gap-6">
          {!isCommercial && bedrooms !== undefined && (
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10">
                <Bed className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">{bedrooms}</span>
            </div>
          )}
          {!isCommercial && bathrooms !== undefined && (
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10">
                <Bath className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">{bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary/10">
              <Maximize className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium">{area} sq. ft.</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center p-4 border-t bg-gradient-to-r from-white to-secondary/5">
        <p className="mb-3 text-xs font-medium text-primary text-center">
          Timely Delivery • Driven By Customer Value • Obsession For Best Quality
        </p>
        <Button className="w-full bg-primary hover:bg-primary-hover transition-colors">View Details</Button>
      </CardFooter>
    </Card>
  )
}

