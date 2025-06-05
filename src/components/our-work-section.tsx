"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const companyLogos = [
  { id: 1, name: "Company 1", logo: "/images/logo1.webp" },
  { id: 2, name: "Company 2", logo: "/images/logo2.webp" },
  { id: 3, name: "Company 3", logo: "/images/logo3.webp" },
  { id: 4, name: "Company 4", logo: "/images/logo4.webp" },
  { id: 5, name: "Company 5", logo: "/images/logo5.webp" },
  { id: 6, name: "Company 6", logo: "/images/logo1.webp" },
  { id: 7, name: "Company 7", logo: "/images/logo2.webp" },
  { id: 8, name: "Company 8", logo: "/images/logo3.webp" },
]

export default function OurWorkSection() {
  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const logoContainerRef = useRef<HTMLDivElement>(null)

  const nextLogo = () => {
    if (logoContainerRef.current) {
      const container = logoContainerRef.current
      const scrollAmount = container.scrollWidth / companyLogos.length
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })

      setActiveLogoIndex((prev) => (prev === companyLogos.length - 4 ? 0 : prev + 1))
    }
  }

  const prevLogo = () => {
    if (logoContainerRef.current) {
      const container = logoContainerRef.current
      const scrollAmount = container.scrollWidth / companyLogos.length
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })

      setActiveLogoIndex((prev) => (prev === 0 ? companyLogos.length - 4 : prev - 1))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextLogo()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  mb-4">Our Work</h2>
          <p className="text-xl  max-w-3xl mx-auto">
            We have partnered with amazing companies to deliver exceptional results
          </p>
        </div>

        {/* Company logo carousel */}
        <div className="relative mb-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-10 h-10 w-10 rounded-full  shadow-md hover:bg-gray-100"
              onClick={prevLogo}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div ref={logoContainerRef} className="flex overflow-hidden mx-12 py-8">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.id}
                  className={cn(
                    "flex-shrink-0 w-1/4 px-4 transition-all duration-300",
                    index < activeLogoIndex || index >= activeLogoIndex + 4 ? "opacity-0" : "opacity-100",
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-24 flex items-center justify-center bg-gray-50 p-4 rounded-lg">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={150}
                      height={60}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-10 h-10 w-10 rounded-full  shadow-md hover:bg-gray-100"
              onClick={nextLogo}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Featured work banner */}
        <div className="relative h-64 w-full rounded-xl overflow-hidden mb-16">
          <Image src="/images/one.png" alt="Featured work" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h3 className="text-3xl font-bold mb-4">Our Featured Projects</h3>
              <p className="text-lg mb-6">Discover how we have helped businesses transform their digital presence</p>
              <div className="flex justify-center gap-4">
                <Button className="bg-white text-black hover:bg-gray-200" size="lg">
                   Project
                </Button>
                <Button className="bg-white text-black hover:bg-gray-200" size="lg">
                 Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
