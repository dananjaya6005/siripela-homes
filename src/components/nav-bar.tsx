

import type React from "react"
import logo from '../assets/logo.png';

import { useState } from "react"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 rounded-xl z-50 drop-shadow-md mx-4
    flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 mx-0">
    <div className="w-full flex h-16 items-center justify-between px-0">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 w-40 pb-2">
            <img src={logo} alt="Logo" className="rounded-md " />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block mr-10 ">
            <nav className="flex items-center space-x-3">
                <Link to="/" className="text-sm font-medium transition-colors bg-white px-6 py-2 rounded-4xl hover:text-primary">
                    Home
                </Link>

                <MenuItem  setActive={setActive} active={active} item="Projects">
                    <div className="grid grid-cols-1 gap-4 p-4 w-[300px]">
                        <HoveredLink to="/projects/designs3d">3D Design</HoveredLink>
                        <HoveredLink to="/projects/ongoing-project">Ongoing Projects</HoveredLink>
                        <HoveredLink to="/projects/completed-project">Completed Projects</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Designs">
                    <div className="grid grid-cols-1 gap-4 p-4 w-[300px]">
                        <ProductItem
                            title="Single Storey"
                            description="Modern single storey house designs"
                            href="/designs/single-storey-houses"
                            src="https://files.catbox.moe/hbigqj.jpg"
                        />
                        <ProductItem
                            title="Multi Storey"
                            description="Elegant multi-level residential buildings"
                            href="/designs/multi-storey-houses"
                            src="https://files.catbox.moe/1b7bcx.jpg"
                        />
                        <ProductItem
                            title="Commercial Buildings"
                            description="Professional commercial architecture"
                            href="/designs/commercial-buildings"
                            src="https://files.catbox.moe/odnnav.png"
                        />
                    </div>
                </MenuItem>

                <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary bg-white px-6 py-2 rounded-4xl">
                    About
                </Link>

                <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary bg-white px-6 py-2 rounded-4xl">
                    Contact
                </Link>
            </nav>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <MobileNav />
            </SheetContent>
        </Sheet>
    </div>
</header>
  )
}

// Mobile Navigation Component
function MobileNav() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  return (
    <nav className="flex flex-col space-y-4 pt-10">
      <Link to="/" className="text-lg  font-medium">
        Home
      </Link>

      <div className="border-t pt-4">
        <button
          onClick={() => toggleSubmenu("projects")}
          className="flex w-full items-center justify-between text-lg font-medium"
        >
          Projects
          <ChevronDown className={cn("h-5 w-5 transition-transform", openSubmenu === "projects" ? "rotate-180" : "")} />
        </button>

        {openSubmenu === "projects" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            className="mt-2 ml-4 flex flex-col space-y-2"
          >
            <Link to="/projects/3d-design" className="text-muted-foreground hover:text-foreground">
              3D Design
            </Link>
            <Link to="/projects/ongoing" className="text-muted-foreground hover:text-foreground">
              Ongoing Projects
            </Link>
            <Link to="/projects/completed" className="text-muted-foreground hover:text-foreground">
              Completed Projects
            </Link>
          </motion.div>
        )}
      </div>

      <div className="border-t pt-4">
        <button
          onClick={() => toggleSubmenu("designs")}
          className="flex w-full items-center justify-between text-lg font-medium"
        >
          Designs
          <ChevronDown className={cn("h-5 w-5 transition-transform", openSubmenu === "designs" ? "rotate-180" : "")} />
        </button>

        {openSubmenu === "designs" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            className="mt-2 ml-4 flex flex-col space-y-2"
          >
            <Link to="/designs/single-storey" className="text-muted-foreground hover:text-foreground">
              Single Storey
            </Link>
            <Link to="/designs/multi-storey" className="text-muted-foreground hover:text-foreground">
              Multi Storey
            </Link>
            <Link to="/designs/commercial" className="text-muted-foreground hover:text-foreground">
              Commercial Buildings
            </Link>
          </motion.div>
        )}
      </div>

      <Link to="/about" className="border-t pt-4 text-lg font-medium">
        About Us
      </Link>

      <Link to="/contact" className="border-t pt-4 text-lg font-medium">
        Contact Us
      </Link>
    </nav>
  )
}

// Replace the MenuItem component with this improved version
const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div className="relative group bg-white px-6 py-2 rounded-4xl ">
      {/* Create a hoverable area that includes both the menu item and a path to the submenu */}
      <div
        onMouseEnter={() => setActive(item)}
        className="cursor-pointer text-sm font-medium transition-colors hover:text-primary"
      >
        {item}
      </div>

      {/* Add an invisible connector between menu item and dropdown */}
      {active === item && (
        <div
          className="absolute left-0 right-0 h-8 bottom-0 translate-y-full z-40"
          onMouseEnter={() => setActive(item)}
        ></div>
      )}

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          onMouseEnter={() => setActive(item)} // Keep submenu open when hovering over it
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 z-50">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-background backdrop-blur-sm rounded-lg overflow-hidden border shadow-lg"
                onMouseLeave={() => setActive(null)} // Only close when actually leaving the submenu
              >
                <motion.div layout className="w-max h-full">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link to={href} className="flex space-x-2 p-2 rounded-md hover:bg-muted">
      <img
        src={src || "/placeholder.svg"}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-md"
      />
      <div>
        <h4 className="text-sm font-bold mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground max-w-[10rem]">{description}</p>
      </div>
    </Link>
  )
}

const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="block p-2  text-sm hover:bg-muted rounded-md transition-colors">
      {children}
    </Link>
  )
}

