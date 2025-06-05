"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const carouselItems = [
  {
    id: 1,
    image: "/images/one.png",
    title: "Welcome to Our Agency",
    description: "We provide staffing",
    buttons: true,
  },
  {
    id: 2,
    image: "/images/two.png",
    title: "Creative Solutions",
    description: "Transforming ideas into reality",
    buttons: false,
  },
  {
    id: 3,
    image: "/images/three.png",
    title: "Expert Team",
    description: "Dedicated professionals at your service",
    buttons: false,
  },
  {
    id: 4,
    image: "/images/four.png",
    title: "Welcome to Excellence",
    description: "We provide excellent training",
    buttons: false,
  },
]

const teamValues = [
  {
    title: "Team Unity",
    description: "At Vizva Consultancy Services, we believe great businesses are built by strong teams. We focus on creating policies that bring people together, improve teamwork, and encourage positive practices. By understanding how your team works, we help you build collaboration and achieve outstanding results.",
    icon: "🤝",
  },
  {
    title: "Communication",
    description: "Clear communication is key to success in any business. At Vizva, we create employee benefit plans and communication strategies that improve satisfaction and engagement. Our solutions make information sharing easy, reduce misunderstandings, and build better relationships within your team.",
    icon: "💬",
  },
  {
    title: "Expert Requirement",
    description: "Finding the right talent is important for your business growth. At Vizva Consultancy Services, we excel at finding skilled professionals who fit your requirements. Let us take care of finding the perfect candidates, so you can focus on growing your business.",
    icon: "🧠",
  },
  {
    title: "Strategy",
    description: "Creating a great workplace starts with smart planning. At Vizva, we create benefit plans that attract and keep top talent. By using strategic thinking, we make sure these plans match your business goals, helping you become a top employer.",
    icon: "📊",
  },
  {
    title: "Team Leadership",
    description: "Strong leadership is about more than giving directions. It’s about inspiring, guiding, and supporting your team to achieve common goals. At Vizva, we help leaders grow so they can bring out the best in their teams.",
    icon: "👑",
  },
  {
    title: "Team Building",
    description: "A happy team is a productive team. We offer solutions to improve teamwork, boost morale, and create a positive workplace. By regularly checking on team interactions, we help build strong connections and solve problems together.",
    icon: "🏗️",
  },
]

const services = [
  {
    title: "Employment Opportunity",
    description: "Connecting job seekers with the right employers across various industries to create meaningful career paths.",
    image: "/images/employment.png",
  },
  {
    title: "Technical Training",
    description: "Providing hands-on training and skill development to prepare individuals for the latest technology roles.",
    image: "/images/training.png",
  },
  {
    title: "Resume Optimization",
    description: "Enhancing resumes to effectively highlight skills, experience, and achievements for better job prospects.",
    image: "/images/resume.png",
  },
  {
    title: "Onboarding Assistance",
    description: "Supporting new hires with smooth transitions through structured onboarding and integration processes.",
    image: "/images/boarding.png",
  },
];


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative">
      {/* Full-screen carousel */}
      <div className="relative h-screen w-full overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{item.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">{item.description}</p>
              {item.buttons && (
                <div className="flex gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Our Services
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 bg-transparent text-white hover:bg-white hover:text-black"
                  >
                    Get a Quote
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Carousel controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-black/30 text-white hover:bg-black/50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-black/30 text-white hover:bg-black/50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-3 w-3 rounded-full transition-all",
                index === currentSlide ? "bg-white w-8" : "bg-white/50",
              )}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Team values grid */}
      <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white-900 mb-4">Welcome to Vizva Consultancy Services</h2>
          <p className="text-xl  max-w-3xl mx-auto">
          At Vizva Consultancy Services, we help businesses and individuals achieve their goals through expert career and business support. Our services focus on building strong teams, offering strategic guidance, and ensuring effective communication for lasting success. 

          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamValues.map((value, index) => (
            <div key={index} className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services section */}
      <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white-900 mb-4">Team Unity</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className=" rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
