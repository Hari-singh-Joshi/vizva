"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How to Stand Out in a Competitive IT Job Market in 2024?",
    excerpt:
      "In the present dynamically changing world, the area of Information Technology (IT) does not seem to slow down, which means an abundance of opportunities for even the most skilled professionals. The surprising thing was the fact that the higher the demand, the fiercer the competition...",
    image: "/images/blog1.png",
    date: "June 15, 2023",
    category: "Employee",
  },
  {
    id: 2,
    title: "Future-Proof Your IT Skills for 2024: What Employers Value Most",
    excerpt:
      "Explore the current IT skills that will prove most valuable by 2024. Learn the secrets for excelling with your IT skills and avoid having them become obsolete in an evolving tech landscape...",
    image: "/images/blog2.png",
    date: "May 28, 2023",
    category: "Professionals",
  },
  {
    id: 3,
    title: "Crack the Code: Resume Optimization Hacks for a 2024 Job Market Win",
    excerpt:
      "Get ahead of the competition with resume strategies designed for 2024. Leverage branding, ATS keywords, and powerful networking to land your dream job...",
    image: "/images/resume.png",
    date: "April 10, 2023",
    category: "Resume",
  },
]

export default function BlogSection() {
  return (
    <div className="relative">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/one.png" 
          alt="Background"
          fill
          className="object-cover blur-sm brightness-75"
        />
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tips, and industry updates from our team of experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white text-black"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-2 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-8">
              View All Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
