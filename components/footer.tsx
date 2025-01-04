import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">John Doe Photography</h3>
            <p className="text-sm text-gray-400">Capturing moments, creating memories</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <nav className="mb-4 md:mb-0 md:mr-6">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</Link></li>
                <li><Link href="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              </ul>
            </nav>
            <div className="flex justify-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} John Doe Photography. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

