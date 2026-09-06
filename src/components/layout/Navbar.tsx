'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { destinations } from '@/data/destinations';
import { packages } from '@/data/packages';
import { blogPosts } from '@/data/blogs';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { 
    name: 'Destination', 
    href: '/destination',
    subLinks: destinations.map(d => ({ name: d.name, href: `/destination/${d.id}` }))
  },
  { 
    name: 'Sikkim Tour Package', 
    href: '/sikkim-tour-package',
    subLinks: packages.filter(p => p.category === 'Sikkim').map(p => ({ name: p.title, href: `/packages/${p.id}` }))
  },
  { 
    name: 'Darjeeling Tour Package', 
    href: '/darjeeling-tour-package',
    subLinks: packages.filter(p => p.category === 'Darjeeling').map(p => ({ name: p.title, href: `/packages/${p.id}` }))
  },
  { 
    name: 'Dooars Tour Package', 
    href: '/dooars-tour-package',
    subLinks: packages.filter(p => p.category === 'Dooars').map(p => ({ name: p.title, href: `/packages/${p.id}` }))
  },
  { 
    name: 'Blog', 
    href: '/blog',
    subLinks: blogPosts.map(b => ({ name: b.title, href: `/blog/${b.id}` }))
  },
  { name: 'Contact Us', href: '/contact-us' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <svg width="0" height="0" className="absolute">
                <filter id="remove-white" colorInterpolationFilters="sRGB">
                  <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3" />
                </filter>
              </svg>
              <div className="relative w-[180px] h-[75px] flex items-center justify-center transition-all">
                <div className="relative w-full h-full" style={{ filter: 'url(#remove-white)' }}>
                  <Image
                    src="/logo.jpeg"
                    alt="Sneha Tours & Travels"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex flex-1 items-center justify-end pr-8 space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-accent relative flex items-center gap-1 whitespace-nowrap',
                    pathname === link.href
                      ? 'text-accent'
                      : isScrolled ? 'text-charcoal' : 'text-white drop-shadow-md'
                  )}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={14} className="mt-0.5" />}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                    pathname === link.href ? "w-full" : "w-0"
                  )}></span>
                </Link>
                
                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-accent transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden xl:flex items-center flex-shrink-0">
            <Link href="/contact-us">
              <Button variant="primary" size="md" className="whitespace-nowrap">
                Book Your Cab
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-md focus:outline-none transition-colors",
                isScrolled ? "text-charcoal bg-gray-100" : "text-white bg-black/20 backdrop-blur-sm"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-2 origin-top animate-in slide-in-from-top-4 fade-in h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <div className="flex justify-between items-center w-full rounded-md transition-colors hover:bg-primary/5">
                <Link
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 text-base font-medium flex-1',
                    pathname === link.href ? 'text-accent' : 'text-charcoal'
                  )}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <button 
                    onClick={(e) => toggleMobileDropdown(link.name, e)}
                    className="p-3 text-gray-500 hover:text-accent"
                  >
                    <ChevronDown 
                      size={20} 
                      className={cn("transition-transform", openMobileDropdown === link.name ? "rotate-180" : "")} 
                    />
                  </button>
                )}
              </div>
              
              {/* Mobile Dropdown Sublinks */}
              {link.subLinks && openMobileDropdown === link.name && (
                <div className="flex flex-col space-y-1 pl-8 pr-4 pb-2 border-l-2 border-primary/20 ml-4 animate-in fade-in slide-in-from-top-2">
                  {link.subLinks.map(subLink => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className={cn(
                        'block px-4 py-2 text-sm rounded-md transition-colors hover:bg-primary/5',
                        pathname === subLink.href ? 'text-accent font-medium' : 'text-gray-600'
                      )}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-10 px-4 mt-2 border-t border-gray-100">
            <Link href="/contact-us" className="block w-full">
              <Button variant="primary" className="w-full h-14">
                Book Your Cab
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
