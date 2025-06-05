import HeroSection from "@/components/hero-section"
import OurWorkSection from "@/components/our-work-section"
import BlogSection from "@/components/blog-section"
import HowWeWorkSection from "@/components/how-we-work-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1] blur-md opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/one.png)',
          filter: "blur(8px)",
        }}
      ></div>

      {/* Page Content */}
      <HeroSection />
      <OurWorkSection />
      <BlogSection />
      <HowWeWorkSection />
      <TestimonialSection />
    </main>
  );
}

