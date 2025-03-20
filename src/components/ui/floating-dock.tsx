
import { cn } from "@/lib/utils"
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"
import { AnimatePresence, type MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { useMemo, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

export const FloatingNav = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  return (
    <>
      <FloatingNavDesktop items={items} className={desktopClassName} />
      <FloatingNavMobile items={items} className={mobileClassName} />
    </>
  )
}

const FloatingNavMobile = ({
  items,
  className,
}: {
  items: { title: string; href: string }[]
  className?: string
}) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  useMemo(() => {
    setOpen(false)
  }, [pathname]);


  return (
    <div className={cn("relative block md:hidden  flex justify-end ", className)}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute top-full mt-2 inset-x-0 flex flex-col gap-2">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  to={item.href}
                  key={item.title}
                  className="h-10 px-4 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center text-sm font-medium"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  )
}

const FloatingNavDesktop = ({
  items,
  className,
}: {
  items: { title: string; href: string }[]
  className?: string
}) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4",
        className,
      )}
    >
      {items.map((item) => (
        <NavItem mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function NavItem({
  mouseX,
  title,
  href,
}: {
  mouseX: MotionValue
  title: string
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [100, 120, 100])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 48, 40])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative "
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -2, x: "-50%" }}
              className="absolute left-1/2 top-full mt-2 px-3 py-1 rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 text-sm font-medium"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <span className="text-sm font-medium px-4">{title}</span>
      </motion.div>
    </Link>
  )
}

