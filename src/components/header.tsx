"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const routeMap: Record<string, string> = {
  Careers: "/career",
  Location: "/location",
  Contact: "/contact",
}

function getRoute(sub: string): string {
  return (
    routeMap[sub] ||
    "/" +
      sub
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
  )
}

const menuData = [
  {
    title: "Services",
    items: [
      "Staffing",
      "Software Development & IT Consultation",
      "Compliance Services",
      "Accounting and Book Keeping",
      "Tax Services",
      "Skills Development Workshops",
    ],
  },
  {
    title: "Industries",
    items: [
      "Information Technology",
      "Healthcare",
      "Fintech",
      "Blockchain",
      "Banking",
      "Logistics",
    ],
  },
  {
    title: "About Us",
    items: ["Careers", "Location"],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-16 w-24 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Vizva Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base font-bold px-4 py-2">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {menuData.map(({ title, items }) => (
                <NavigationMenuItem key={title}>
                  <NavigationMenuTrigger className="text-base bg-transparent">
                    {title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid p-4 gap-2 w-[300px]">
                      {items.map((item) => (
                        <Link key={item} href={getRoute(item)}>
                          <Button variant="ghost" className="w-full justify-start">
                            {item}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base px-4 py-2">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact">
            <Button size="sm">Contact</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 py-6 h-full overflow-y-auto">
              <div className="flex justify-end">
                <ThemeToggle />
              </div>

              <Link href="/" className="text-base font-medium">
                Home
              </Link>

              {menuData.map(({ title, items }) => (
                <details key={title} className="group">
                  <summary className="cursor-pointer text-base font-medium flex justify-between items-center">
                    {title}
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="ml-2 mt-2 space-y-2">
                    {items.map((sub) => (
                      <Link
                        key={sub}
                        href={getRoute(sub)}
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}

              <Link href="/blog" className="text-base font-medium">
                Blog
              </Link>

              <Link href="/contact" className="text-base font-medium">
                Contact
              </Link>

              <div className="mt-4">
                <Button className="w-full">Contact</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
