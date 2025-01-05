'use client'

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { navLinks } from '@/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to check scroll position and update the header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={` fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-zinc-900/60 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 flex-1 pl-1 sm:pl-0">
            <Link href="/" className="text-xl font-semibold text-white">
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={item == 'Blog' ? '/blogs' : `#${item}`}
                    className="text-sm text-white hover:text-white/80 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sign Up Button and Avatar */}
          <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
          <Button asChild size="lg" variant="outline" className="text-white bg-transparent hover:bg-white/10 hover:text-white rounded-none">
            <Link href="#Consultation">Contact Us</Link>
          </Button> 

          </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white p-0"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-zinc-900 hover:text-zinc-700 text-lg transition-colors"
                    >
                      {item}
                    </Link>
                  ))}

                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;