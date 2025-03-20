
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function GradientButton({
  children = "Click me",
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Button
      className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background gradient layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 transition-opacity duration-500 ${
          isHovering ? "opacity-80" : "opacity-100"
        }`}
      />

      {/* Shine effect on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 ${
          isHovering ? "opacity-20" : "opacity-0"
        }`}
        style={{
          transform: `translateX(${isHovering ? "100%" : "-100%"})`,
          transition: "transform 0.8s ease-in-out, opacity 0.5s ease-in-out",
        }}
      />

      {/* Button content */}
      <span className="relative z-10 font-medium text-white">{children}</span>
    </Button>
  )
}

