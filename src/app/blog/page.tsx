import Image from "next/image"
import { ArrowRight, Calendar, ChevronRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

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
  {
    id: 4,
    title: "The Rise of AI in Recruitment: What Candidates Need to Know",
    excerpt:
      "Artificial Intelligence is revolutionizing how companies hire. Discover how AI-powered tools are changing recruitment processes and how to prepare for AI-driven interviews and assessments...",
    image: "/images/employment.png",
    date: "July 5, 2023",
    category: "Technology",
  },
  {
    id: 5,
    title: "Remote Work Revolution: Building a Successful Career from Anywhere",
    excerpt:
      "The pandemic accelerated the shift to remote work, but is it here to stay? Learn strategies for thriving in a remote environment and positioning yourself for long-term success in the digital workplace...",
    image: "/images/one.png",
    date: "August 12, 2023",
    category: "Workplace",
  },
  {
    id: 6,
    title: "Navigating Career Transitions: From Technical to Leadership Roles",
    excerpt:
      "Making the leap from a technical position to a leadership role requires more than just technical expertise. Explore the essential skills, mindset shifts, and strategies for a successful transition...",
    image: "/images/two.png",
    date: "September 3, 2023",
    category: "Career Growth",
  },
]

const categories = ["All", "Employee", "Professionals", "Resume", "Technology", "Workplace", "Career Growth"]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Blurred Background */}
        <section className="relative overflow-hidden py-24">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/two.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(5px)",
              opacity: 0.15,
            }}
          />
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Insights for Your Career Growth
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Expert advice, industry trends, and practical strategies to help you navigate the ever-evolving
                professional landscape.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    className="text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="container py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/blog.png"
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Badge className="w-fit mb-4">{blogPosts[0].category}</Badge>
              <h2 className="text-3xl font-bold tracking-tight">{blogPosts[0].title}</h2>
              <p className="mt-4 text-muted-foreground">{blogPosts[0].excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{blogPosts[0].date}</span>
              </div>
              <Button className="mt-6 w-fit" size="lg">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
            <Button variant="outline">
              View All <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section with Blurred Background */}
        <section className="relative py-24">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/blog.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
              opacity: 0.1,
            }}
          />
          <div className="container relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Stay Updated with Industry Insights</h2>
              <p className="mt-4 text-muted-foreground">
                Subscribe to our newsletter to receive the latest career advice, industry trends, and job opportunities
                directly in your inbox.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative flex-1 max-w-sm">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="email" placeholder="Enter your email" className="pl-10" />
                </div>
                <Button>Subscribe</Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Popular Topics</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Resume Building", "Interview Preparation", "Career Transitions", "Skill Development"].map((topic) => (
              <Card key={topic} className="group cursor-pointer hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{topic}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Explore <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
