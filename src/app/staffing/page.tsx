import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Blurred Background */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Expert Staffing Solutions</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Connecting top talent with leading organizations across IT, non-IT, and healthcare sectors
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Request Staff
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Staffing Categories Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Staffing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className=" backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-700">IT Staffing</CardTitle>
                <CardDescription>Technical talent for your digital needs</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-purple-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-700 h-8 w-8"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <Link href="#it-staffing" className="text-purple-700 font-medium hover:underline">
                  Learn More
                </Link>
              </CardContent>
            </Card>

            <Card className=" backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-700">Non-IT Staffing</CardTitle>
                <CardDescription>Professional talent across industries</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700 h-8 w-8"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <Link href="#non-it-staffing" className="text-blue-700 font-medium hover:underline">
                  Learn More
                </Link>
              </CardContent>
            </Card>

            <Card className=" backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-teal-700">Healthcare Staffing</CardTitle>
                <CardDescription>Licensed professionals for medical facilities</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-teal-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-700 h-8 w-8"
                  >
                    <path d="M19 9h-5V4H9v5H4v6h5v5h6v-5h5z" />
                  </svg>
                </div>
                <Link href="#healthcare-staffing" className="text-teal-700 font-medium hover:underline">
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IT Staffing Section */}
      <section id="it-staffing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-purple-700">IT Staffing</h2>
              <p className="text-lg mb-6">
                The technology sector demands specialized skills and expertise. We connect qualified IT professionals
                with companies seeking to enhance their technical capabilities and drive digital transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>Providing skilled developers, engineers, data scientists, and IT administrators</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>Supporting tech companies and IT departments with project-based and permanent staff</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>Ensuring candidates have up-to-date technical certifications and skills</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/two.png"
                alt="IT Professionals working"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Non-IT Staffing Section with Blurred Background */}
      <section id="non-it-staffing" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0  backdrop-blur-sm z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">Non-IT Staffing</h2>
              <p className="text-lg mb-6">
                Beyond technology, businesses need talented professionals across various departments. We provide
                staffing solutions for administrative, financial, marketing, and operational roles to help organizations
                run smoothly.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>Connecting businesses with administrative staff, financial experts, and marketing professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>Providing both entry-level and executive talent for growing organizations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>Ensuring candidates have relevant experience and professional qualifications</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/three.png"
                alt="Business professionals in meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Staffing Section */}
      <section id="healthcare-staffing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-teal-700">Healthcare Staffing</h2>
              <p className="text-lg mb-6">
                The healthcare industry needs skilled and licensed professionals to provide good care for patients. We
                connect qualified healthcare workers with hospitals, clinics, and medical facilities to meet the rising
                demand for staff.
              </p>
              <div className="space-y-6">
                <div className=" p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-teal-700 mb-2">
                    Providing qualified doctors, nurses, medical technicians, and healthcare administrators
                  </h3>
                  <p>
                    We provide trained doctors, nurses, medical assistants, and administrative staff who are crucial for
                    quality care and facility management. All candidates undergo careful checks to ensure they meet the
                    required standards. We focus on placing professionals in positions where they can make the most
                    difference, helping healthcare facilities provide excellent care.
                  </p>
                </div>
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-teal-700 mb-2">
                    Supporting hospitals, clinics, and healthcare providers with temporary and permanent staff
                  </h3>
                  <p>
                    The need for healthcare professionals can change based on patient demand and emergencies. We offer
                    both temporary and permanent staffing solutions to help hospitals and clinics maintain a strong
                    workforce. Our temporary staff can quickly fill in gaps, while our permanent staff provides
                    long-term support. Our solutions help healthcare organizations provide consistent and high-quality
                    medical services.
                  </p>
                </div>
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-teal-700 mb-2">
                    Ensuring compliance with healthcare industry regulations and hiring standards
                  </h3>
                  <p>
                    Making sure we follow the rules and standards for hiring in healthcare is very important. We check
                    every job candidate to make sure they have the right licenses and certifications. This helps reduce
                    legal problems for healthcare providers and ensures that patients get care from qualified workers.
                    We also help healthcare organizations keep up with changing rules and best practices for managing
                    staff. Our staffing services not only find people to fill jobs but also make sure they meet all the
                    necessary state and federal standards. This helps healthcare facilities provide good care and avoid
                    problems with compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/hospital.png"
                alt="Healthcare professionals"
                width={600}
                height={400}
                className="rounded-lg shadow-lg mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/hospital1.png"
                  alt="Medical staff"
                  width={290}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src="/images/hospital2.png"
                  alt="Hospital setting"
                  width={290}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Blurred Background */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-teal-900/10 backdrop-blur-sm z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Elevate Your Business</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Partner with us to find the perfect talent for your organization needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/career">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700"
            >
              Request Staffing Services
            </Button>
            </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Our Team
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
