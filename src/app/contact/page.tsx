import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
        <br/>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Main Office */}
        <Card className="shadow-md">
          <CardHeader className="pb-4">
            
            <CardTitle className="text-2xl font-bold">Ahmedabad Office</CardTitle>
            <CardDescription className="font-medium text-lg">Headquarters</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>16th floor, Wing A, Westgate Business BAY, Makarba, Ahmedabad, Gujarat 380051</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p>9109009456</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <p>info@vizvainc.com</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <MapPin className="mr-2 h-4 w-4" />
              View on Map
            </Button>
          </CardFooter>
        </Card>

        {/* Map Iframe */}
        <div className="rounded-lg shadow-md flex items-center justify-center h-[300px] sm:h-[400px] md:h-[450px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9374621915185!2d77.02752827549199!3d28.390956775797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22c3ae1907e1%3A0x3f36ee7e064eac62!2sREACH%20MY%20TOWER!5e0!3m2!1sen!2sin!4v1748027175168!5m2!1sen!2sin"
            className="w-full h-full rounded-lg border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Branch Offices */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-2">Branch Offices</h2>
        <p className="mb-8">
          Our branch offices across India and the United States allow us to serve clients globally with personalized
          attention.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Reusable Office Card */}
          {[
            {
              title: "Delaware",
              address: "1151 Walker Rd # 100, Dover, DE 19904, United States.",
            },
            {
              title: "Texas",
              address: "3050 Post Oak Blvd Houston, TX 77056, USA.",
            },
            {
              title: "Gurugram",
              address: "9th Floor, Reach Tower, Near Tulip Chowk, Sector 70, Gurgaon, 122101",
            },
            {
              title: "Lucknow",
              address:
                "301, Bhavya corporate tower TC VIBHUTI KHAND, GOMATI NAGAR, In front of Bank of Baroda Lucknow 226010.",
            },
          ].map((office) => (
            <Card key={office.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{office.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <p className="text-sm">{office.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <p className="text-sm">9109009456</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <p className="text-sm">info@vizvainc.com</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="hover:text-slate-900">
                  <MapPin className="mr-1 h-3 w-3" />
                  Find on Map
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Global Reach */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Our Global Reach</h2>
        <p className="max-w-3xl">
          With offices strategically located in India and the United States, we provide consultancy services to clients
          worldwide.
        </p>
      </div>

      {/* Career Section */}
      <div className="mt-16 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">TIME TO GET STARTED</h2>
        <h3 className="text-xl font-semibold mb-4">Here for Your Career Moves</h3>
        <p className="max-w-3xl mb-6">
          Stop searching for jobs and focus more on value. We will convert your skills to a successful career. We can
          find you the right IT opportunity to fulfil your ambitions and with our IT background, we take the time to
          understand what you want. Get in touch with us and begin your journey towards your success and career wish
          list today!
        </p>
      </div>
    </div>
  )
}
