"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "We hired Vizva Consultancy Services for strategic recruitment and compliance management for our growing business. They not only helped us find the right talent but also made sure we met all the regulations. ",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The team's expertise in both design and development made our project a success. They were responsive, professional, and truly cared about our business goals. I highly recommend their services to anyone looking for quality web solutions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, Artisan Crafts",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "As a small business owner, I needed a partner who could guide me through the process of creating an online presence. This team did exactly that, providing valuable insights and creating a beautiful website that perfectly represents my brand.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO, Enterprise Solutions",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The technical expertise of this team is impressive. They tackled complex integration challenges with ease and delivered a robust platform that has significantly improved our operational efficiency.",
    rating: 4,
  },
]

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Do not just take our word for it — hear from some of our satisfied clients
          </p>
        </div>

        <div className="relative">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="relative h-20 w-20 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400">{testimonial.position}</p>
                        <div className="flex mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-5 w-5",
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600",
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg md:text-xl italic text-gray-300">{testimonial.quote}</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/30 text-white hover:bg-black/50 pointer-events-auto"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/30 text-white hover:bg-black/50 pointer-events-auto"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
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
      </div>
    </section>
  )
}
