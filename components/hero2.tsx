import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero2() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/hero1.jpg')] bg-cover"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/hero1.jpg')"
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-white">Art Galleria.</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/events" className="text-sm text-white hover:text-white/80">
            Events
          </Link>
          <Link href="/museum" className="text-sm text-white hover:text-white/80">
            Museum
          </Link>
          <Link href="/artists" className="text-sm text-white hover:text-white/80">
            Artists
          </Link>
          <Link href="/galleries" className="text-sm text-white hover:text-white/80">
            Galleries
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/sign-in" className="text-sm text-white hover:text-white/80">
            Sign In
          </Link>
          <Link href="/register" className="text-sm text-white hover:text-white/80">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        <h1 className="max-w-3xl text-4xl font-serif text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Modern Art
          <br />
          Museum & Gallery
        </h1>
        <p className="max-w-2xl mt-6 text-lg text-white/90">
          Browse a curated selection of events from around the world, including museum exhibitions, gallery openings, upcoming auctions, and many more.
        </p>
        <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:gap-6">
          <Button size="lg" variant="default" className="bg-white text-black hover:bg-white/90 rounded-none">
            Explore More
          </Button>
          <Button size="lg" variant="outline" className="text-white bg-transparent hover:bg-white/10 rounded-none">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

