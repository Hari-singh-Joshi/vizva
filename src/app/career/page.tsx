"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import JobForm from "@/components/job-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import jobs from "@/data/jobs.json"

export default function CareerPage() {
  return (
    <div className="relative min-h-screen">
      {/* Blurred background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-20 z-0"
        style={{
          backgroundImage: "url('images/one.png')",
          filter: "blur(8px)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen py-12 px-4 md:px-6">
        <main className="mx-auto max-w-5xl">
          <section className="py-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Careers at Vizva Consulting
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground text-lg md:text-xl mb-8">
              Join our team and be part of shaping the future of technology and business solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#careers">View Positions</Link>
              </Button>

              <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">Apply Here</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
  <DialogHeader>
    <DialogTitle>Apply for New Opening</DialogTitle>
    <DialogDescription>
      Welcome to Vizva Career Portal. Kindly fill in your details.
    </DialogDescription>
  </DialogHeader>
 
 <JobForm/>

</DialogContent>

    </Dialog>              
            </div>
          </section>

          <section id="about" className="py-12">
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">About Vizva Consulting Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Vizva Consulting Services is a leading technology and business consulting firm dedicated to delivering
                  innovative solutions to clients across various industries. With offices in Gurugram and Ahmedabad, we
                  provide comprehensive services in software development, recruitment, data analytics, and professional
                  writing.
                </p>
                <p>
                  Our team consists of talented professionals who are passionate about their work and committed to
                  excellence. We foster a collaborative environment that encourages creativity, continuous learning, and
                  professional growth.
                </p>
                <p>
                  At Vizva, we believe in empowering our employees to reach their full potential while making meaningful
                  contributions to our client success. Join us and be part of a dynamic organization that values
                  innovation, integrity, and teamwork.
                </p>
              </CardContent>
            </Card>
          </section>

           <section id="careers" className="py-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Open Positions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <Card key={job.id} className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{job.details}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">{job.type}</span>
                      {job.locations.map((location) => (
                        <span key={location} className="text-sm bg-muted px-3 py-1 rounded-full">
                          {location}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Apply Now</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                          <DialogDescription>
                            Welcome to Vizva Career Portal. Kindly fill in your details.
                          </DialogDescription>
                        </DialogHeader>
                        <JobForm jobTitle={job.title} />
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section id="locations" className="py-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Locations</h2>
            <Tabs defaultValue="gurugram" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="gurugram">Gurugram</TabsTrigger>
                <TabsTrigger value="ahmedabad">Ahmedabad</TabsTrigger>
              </TabsList>
              <TabsContent value="gurugram" className="mt-6">
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Gurugram Office</CardTitle>
                    <CardDescription>Our headquarters in the National Capital Region</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span>Cyber City, Gurugram, Haryana, India</span>
                    </div>
                    <p>
                      Our Gurugram office is located in a prime business district with modern facilities and excellent
                      connectivity. The workspace is designed to foster collaboration and innovation.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ahmedabad" className="mt-6">
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Ahmedabad Office</CardTitle>
                    <CardDescription>Our growing presence in Western India</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span>GIFT City, Ahmedabad, Gujarat, India</span>
                    </div>
                    <p>
                      Our Ahmedabad office is situated in a vibrant tech park with state-of-the-art amenities. The
                      environment is designed to inspire creativity and productivity.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section id="apply" className="py-12">
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">How to Apply</CardTitle>
                <CardDescription>Follow these steps to join our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  To apply for a position at Vizva Consulting Services, please send an email to{" "}
                  <span className="font-semibold">careers@vizvaconsulting.com</span> with the following:
                </p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Your updated resume/CV in PDF format</li>
                  <li>A cover letter explaining your interest in the specific position</li>
                  <li>
                    The job title you are applying for in the email subject line (Application for Software
                    Developer Position)
                  </li>
                  <li>Your preferred location (Gurugram or Ahmedabad)</li>
                  <li>Any portfolio links or work samples, if applicable</li>
                </ol>
                <div className="mt-6 flex items-center gap-2 rounded-lg border p-4 bg-background/50">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">careers@vizvaconsulting.com</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Our recruitment team will review your application and get back to you within 5-7 business days. If
                  your qualifications match our requirements, we will invite you for an interview.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => {
                    window.location.href = "mailto:careers@vizvaconsulting.com?subject=Job Application"
                  }}
                >
                  Send Email Now
                </Button>
              </CardFooter>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}
