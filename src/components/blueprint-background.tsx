
import { useEffect, useRef } from "react"

export function BlueprintBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }

    const animate = () => {
      currentX += (mouseX * 15 - currentX) * 0.10
      currentY += (mouseY * 15 - currentY) * 0.10

      if (container) {
        container.style.transform = `translate(${currentX}px, ${currentY}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 bg-background/90 z-0" />
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          ref={containerRef}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] transition-transform duration-75 ease-out"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Diagonal grid pattern */}
              <pattern
                id="diagonalGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="40" stroke="#BFD7ED" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="0" y1="0" x2="40" y2="0" stroke="#BFD7ED" strokeWidth="0.5" strokeOpacity="0.3" />
              </pattern>

              {/* Larger grid pattern */}
              <pattern
                id="largeGrid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="80" stroke="#92B4D4" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="0" y1="0" x2="80" y2="0" stroke="#92B4D4" strokeWidth="1" strokeOpacity="0.4" />
              </pattern>

              {/* House plan pattern */}
              <pattern id="housePlan" width="800" height="600" patternUnits="userSpaceOnUse">
                {/* Main house outline */}
                <rect
                  x="100"
                  y="100"
                  width="600"
                  height="400"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                />

                {/* Interior walls */}
                {/* Living room / Kitchen divider */}
                <line x1="400" y1="100" x2="400" y2="300" stroke="#6B9AC4" strokeWidth="3" strokeOpacity="0.6" />

                {/* Bedroom walls */}
                <line x1="400" y1="300" x2="700" y2="300" stroke="#6B9AC4" strokeWidth="3" strokeOpacity="0.6" />
                <line x1="550" y1="300" x2="550" y2="500" stroke="#6B9AC4" strokeWidth="3" strokeOpacity="0.6" />

                {/* Bathroom wall */}
                <line x1="100" y1="300" x2="250" y2="300" stroke="#6B9AC4" strokeWidth="3" strokeOpacity="0.6" />
                <line x1="250" y1="300" x2="250" y2="500" stroke="#6B9AC4" strokeWidth="3" strokeOpacity="0.6" />

                {/* Windows */}
                {/* Living room windows */}
                <line x1="150" y1="100" x2="250" y2="100" stroke="#6B9AC4" strokeWidth="5" strokeOpacity="0.5" />
                <line x1="300" y1="100" x2="350" y2="100" stroke="#6B9AC4" strokeWidth="5" strokeOpacity="0.5" />

                {/* Kitchen window */}
                <line x1="500" y1="100" x2="600" y2="100" stroke="#6B9AC4" strokeWidth="5" strokeOpacity="0.5" />

                {/* Bedroom windows */}
                <line x1="700" y1="350" x2="700" y2="400" stroke="#6B9AC4" strokeWidth="5" strokeOpacity="0.5" />
                <line x1="700" y1="450" x2="700" y2="480" stroke="#6B9AC4" strokeWidth="5" strokeOpacity="0.5" />

                {/* Bathroom window */}
                <line x1="100" y1="350" x2="100" y2="400" stroke="#6B9AC4" strokeWidth="5" strokeOpacity="0.5" />

                {/* Doors */}
                {/* Front door */}
                <path
                  d="M 100,200 A 50,50 0 0,1 150,150"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />

                {/* Kitchen door */}
                <path
                  d="M 400,200 A 30,30 0 0,0 430,170"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />

                {/* Bedroom doors */}
                <path
                  d="M 450,300 A 30,30 0 0,0 480,330"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />
                <path
                  d="M 600,300 A 30,30 0 0,0 630,330"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />

                {/* Bathroom door */}
                <path
                  d="M 250,350 A 30,30 0 0,1 220,380"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />

                {/* Furniture */}
                {/* Living room sofa */}
                <rect
                  x="150"
                  y="180"
                  width="100"
                  height="40"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  rx="5"
                />

                {/* Living room coffee table */}
                <rect
                  x="180"
                  y="240"
                  width="40"
                  height="30"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />

                {/* Kitchen table */}
                <circle cx="500" cy="200" r="30" fill="none" stroke="#6B9AC4" strokeWidth="1.5" strokeOpacity="0.4" />

                {/* Kitchen chairs */}
                <circle cx="470" cy="200" r="10" fill="none" stroke="#6B9AC4" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="530" cy="200" r="10" fill="none" stroke="#6B9AC4" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="500" cy="170" r="10" fill="none" stroke="#6B9AC4" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="500" cy="230" r="10" fill="none" stroke="#6B9AC4" strokeWidth="1" strokeOpacity="0.4" />

                {/* Kitchen counter */}
                <rect
                  x="450"
                  y="100"
                  width="150"
                  height="30"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />

                {/* Kitchen sink */}
                <rect
                  x="500"
                  y="105"
                  width="30"
                  height="20"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  rx="2"
                />

                {/* Beds */}
                <rect
                  x="600"
                  y="350"
                  width="80"
                  height="120"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  rx="5"
                />
                <rect
                  x="450"
                  y="350"
                  width="80"
                  height="120"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  rx="5"
                />

                {/* Bathroom fixtures */}
                {/* Toilet */}
                <rect
                  x="120"
                  y="450"
                  width="30"
                  height="40"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  rx="15"
                />

                {/* Sink */}
                <circle cx="180" cy="460" r="15" fill="none" stroke="#6B9AC4" strokeWidth="1.5" strokeOpacity="0.4" />

                {/* Shower */}
                <rect
                  x="120"
                  y="320"
                  width="80"
                  height="80"
                  fill="none"
                  stroke="#6B9AC4"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  rx="2"
                />

                {/* Room labels */}
                {/* <text x="200" y="150" fill="#6B9AC4" fontSize="14" opacity="0.7" fontFamily="Arial">
                  LIVING ROOM
                </text>
                <text x="500" y="150" fill="#6B9AC4" fontSize="14" opacity="0.7" fontFamily="Arial">
                  KITCHEN
                </text>
                <text x="450" y="350" fill="#6B9AC4" fontSize="14" opacity="0.7" fontFamily="Arial">
                  BEDROOM 1
                </text>
                <text x="600" y="350" fill="#6B9AC4" fontSize="14" opacity="0.7" fontFamily="Arial">
                  BEDROOM 2
                </text>
                <text x="150" y="350" fill="#6B9AC4" fontSize="14" opacity="0.7" fontFamily="Arial">
                  BATH
                </text> */}

                {/* Dimension lines */}
                <line
                  x1="100"
                  y1="80"
                  x2="700"
                  y2="80"
                  stroke="#6B9AC4"
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                  strokeDasharray="5,5"
                />
                <line x1="100" y1="80" x2="100" y2="75" stroke="#6B9AC4" strokeWidth="0.5" strokeOpacity="0.5" />
                <line x1="700" y1="80" x2="700" y2="75" stroke="#6B9AC4" strokeWidth="0.5" strokeOpacity="0.5" />
                <text x="400" y="70" fill="#6B9AC4" fontSize="10" opacity="0.7" textAnchor="middle" fontFamily="Arial">
                  15.0 m
                </text>

                <line
                  x1="80"
                  y1="100"
                  x2="80"
                  y2="500"
                  stroke="#6B9AC4"
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                  strokeDasharray="5,5"
                />
                <line x1="80" y1="100" x2="75" y2="100" stroke="#6B9AC4" strokeWidth="0.5" strokeOpacity="0.5" />
                <line x1="80" y1="500" x2="75" y2="500" stroke="#6B9AC4" strokeWidth="0.5" strokeOpacity="0.5" />
                <text
                  x="60"
                  y="300"
                  fill="#6B9AC4"
                  fontSize="10"
                  opacity="0.7"
                  textAnchor="middle"
                  fontFamily="Arial"
                  transform="rotate(-90, 60, 300)"
                >
                  10.0 m
                </text>

                {/* North arrow */}
                <g transform="translate(650, 450)">
                  <circle cx="0" cy="0" r="20" fill="none" stroke="#6B9AC4" strokeWidth="0.5" strokeOpacity="0.6" />
                  <line x1="0" y1="-15" x2="0" y2="15" stroke="#6B9AC4" strokeWidth="0.75" strokeOpacity="0.6" />
                  <line x1="-15" y1="0" x2="15" y2="0" stroke="#6B9AC4" strokeWidth="0.75" strokeOpacity="0.6" />
                  <text x="0" y="-5" fill="#6B9AC4" fontSize="12" opacity="0.8" textAnchor="middle" fontFamily="Arial">
                    N
                  </text>
                </g>

                {/* Scale */}
                <line x1="100" y1="550" x2="200" y2="550" stroke="#6B9AC4" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="100" y1="545" x2="100" y2="555" stroke="#6B9AC4" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="200" y1="545" x2="200" y2="555" stroke="#6B9AC4" strokeWidth="1" strokeOpacity="0.6" />
                <text x="150" y="570" fill="#6B9AC4" fontSize="10" opacity="0.7" textAnchor="middle" fontFamily="Arial">
                  SCALE 1:100
                </text>
              </pattern>

              {/* Gradient overlay */}
              <radialGradient id="fadeOut">
                <stop offset="50%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0.5" />
              </radialGradient>
            </defs>

            {/* Base layer with small diagonal grid */}
            <rect width="100%" height="100%" fill="url(#diagonalGrid)" />

            {/* Medium layer with larger grid */}
            <rect width="100%" height="100%" fill="url(#largeGrid)" />

            {/* House plan layer */}
            <rect width="100%" height="100%" fill="url(#housePlan)" />

            {/* Gradient overlay for fade effect */}
            <rect width="100%" height="100%" fill="url(#fadeOut)" />
          </svg>
        </div>
      </div>
    </>
  )
}

