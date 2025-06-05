import Image from "next/image"
import { Building, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const locations = [
  {
    id: "delaware",
    name: "Delaware",
    address: "1151 Walker Rd # 100, Dover, DE 19904, United States.",
    phone: "9109009456",
    email: "info@vizvainc.com",
    image: "/images/delware.webp",
    isPrimary: false
  },
  {
    id: "texas",
    name: "Texas",
    address: "3050 Post Oak Blvd Houston, TX 77056, USA.",
    phone: "9109009456",
    email: "info@vizvainc.com",
    image: "/images/texas.webp",
    isPrimary: false
  },
  {
    id: "gurugram",
    name: "Gurugram",
    address: "9th Floor, Reach Tower, Near Tulip Chowk, Sector 70, Gurgaon, 122101",
    phone: "9109009456",
    email: "info@vizvainc.com",
    image: "/images/gurugaram.webp",
    isPrimary: false
  },
  {
    id: "lucknow",
    name: "Lucknow",
    address: "301, Bhavya corporate tower TC VIBHUTI KHAND, GOMATI NAGAR, In front of Bank of Baroda Lucknow 226010.",
    phone: "9109009456",
    email: "info@vizvainc.com",
    image: "/images/lucknow.webp",
    isPrimary: false
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    address: "16th floor, Wing A, Westgate Business BAY, Makarba, Ahmedabad, Gujarat 380051",
    phone: "9109009456",
    email: "info@vizvainc.com",
    image: "/images/aoffice.webp",
    isPrimary: true
  },
]

export default function LocationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/ahemdabad.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(1px)",
              opacity: 0.1,
            }}
          />
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Global Presence
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                With our headquarters in Ahmedabad and offices across India and the United States, 
                we are positioned to serve clients worldwide with exceptional consultancy services.
              </p>
            </div>
          </div>
        </section>

        {/* Headquarters Section */}
        <section className="container py-12">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Our Headquarters</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Our main office is located in Ahmedabad, where our core team works to deliver exceptional consultancy services.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/aoffice.webp"
                alt="Ahmedabad Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold">Ahmedabad</h3>
              <p className="mt-2 text-muted-foreground">
                16th floor, Wing A, Westgate Business BAY, Makarba, Ahmedabad, Gujarat 380051
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>9109009456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@vizvainc.com</span>
                </div>
              </div>
              
              <Button className="mt-6 w-fit" size="lg">
                <MapPin className="mr-2 h-4 w-4" /> View on Map
              </Button>
            </div>
          </div>
        </section>

        {/* Branch Offices Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Branch Offices</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Our branch offices across India and the United States allow us to serve clients globally with personalized attention.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {locations.filter(location => !location.isPrimary).map((location) => (
                <Card key={location.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{location.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{location.address}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">{location.email}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" /> Find on Map
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* World Map Section */}
        <section className="container py-16">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Global Reach</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              With offices strategically located in India and the United States, we provide consultancy services to clients worldwide.
            </p>
          </div>
          
          
        </section>

        {/* Get Started Section */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(100px)",
              opacity: 0.1,
            }}
          />
          <div className="container relative z-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">TIME TO GET STARTED</h2>
                <h3 className="text-2xl font-medium mt-2">Here for Your Career Moves</h3>
                <p className="mt-4 text-muted-foreground">
                  Stop searching for jobs and focus more on value. We will convert your skills to a successful career. 
                  We can find you the right IT opportunity to fulfil your ambitions and with our IT background, 
                  we take the time to understand what you want. Get in touch with us and begin your journey towards 
                  your success and career wish list today!
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Get A Free Quote</h3>
               
               <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
