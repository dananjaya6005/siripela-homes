"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 5
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className={`transition-all duration-500 ${isLoading ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}>
        <div className="relative flex flex-col items-center">
          {/* Logo with pulsing effect */}
          <div className="relative animate-pulse">
            <img
              src="https://files.catbox.moe/1sa4ge.png"
              alt="Siripela Homes & Construction"
              width={240}
              height={120}
              className="mb-8"
            />
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-orange-400 to-green-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading text with construction theme */}
          <div className="flex items-center gap-2 text-gray-600">
            <Loader2 className="h-4 w-4 animate-spin text-red-500" />
            <span className="text-sm font-medium">
              {progress < 33
                ? "Preparing foundation..."
                : progress < 66
                  ? "Building structure..."
                  : progress < 100
                    ? "Adding finishing touches..."
                    : "Ready!"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

