"use client"
import type React from "react"
import ContactForm from "@/components/contact-form"
import { useState } from "react"
import { Calendar, Clock, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"


const workSteps = [
  {
    id: 1,
    title: "Comprehensive Assessment",
    description: "We begin with a detailed evaluation of your skills, experience, and career aspirations to identify the best path forward.",
    icon: "🧠", // Symbolizing thinking/analysis
  },
  {
    id: 2,
    title: "Job Search",
    description: "We actively search for job openings that match your profile, leveraging our network and recruitment platforms.",
    icon: "🔎", // Magnifying glass for searching
  },
  {
    id: 3,
    title: "Training",
    description: "Receive tailored training programs to enhance your qualifications and boost your employability.",
    icon: "📚", // Books symbol for learning
  },
  {
    id: 4,
    title: "Job Onboarding",
    description: "We guide you through the onboarding process, ensuring a smooth transition into your new role.",
    icon: "🏁", // Checkered flag for starting a journey
  },
];

export default function HowWeWorkSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredContact: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Appointment request submitted! We'll contact you soon.")
  }
  console.log(handleRadioChange,handleRadioChange,handleSubmit,handleSelectChange,handleChange)
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold  mb-4">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures we deliver exceptional results for every client.
          </p>
        </div>

        {/* Work process steps */}
        <div className="relative mb-24">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Appointment form section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
            <p className="text-gray-600 mb-6">
              Ready to start your project? Schedule a free consultation with our team to discuss your needs and how we
              can help.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Flexible Scheduling</h4>
                  <p className="text-gray-600">We offer appointments that fit your schedule</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Quick Response</h4>
                  <p className="text-gray-600">We will get back to you within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Personalized Approach</h4>
                  <p className="text-gray-600">Tailored solutions for your specific needs</p>
                </div>
              </div>
            </div>
            <div className=" p-6 rounded-lg">
              <h4 className="font-medium mb-2">Our Office Hours</h4>
              <p className="text-gray-600 mb-1">Monday - Friday: 6:30 PM - 3:30 AM</p>
              <p className="text-gray-600">Saturday and Sunday off</p>
            </div>
          </div>

          <div className=" p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
