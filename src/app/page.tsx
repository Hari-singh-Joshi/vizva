import HeroSection from "@/components/hero-section"
import OurWorkSection from "@/components/our-work-section"
import BlogSection from "@/components/blog-section"
import HowWeWorkSection from "@/components/how-we-work-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OurWorkSection />
      <BlogSection />
      <HowWeWorkSection />
      <TestimonialSection />
    </main>
  )
}


