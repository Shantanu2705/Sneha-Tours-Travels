import Link from 'next/link';
import Image from 'next/image';
import { contactInfo } from '@/data/contact';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative mountain graphic silhouette could go here if available */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://images.unsplash.com/photo-1544256726-215c0e121545?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="relative mb-4 w-[220px] h-[95px] flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
              <div className="relative w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}>
                <Image
                  src="/logo.png"
                  alt="Sneha Tours & Travels"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              Your trusted partner for safe and seamless travel in the hills of North Bengal and Sikkim. Comfortable journeys, experienced drivers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-white border-b border-white/20 pb-3 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Destination', href: '/destination' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact Us', href: '/contact-us' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-accent transition-colors flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-white border-b border-white/20 pb-3 inline-block">Tour Packages</h4>
            <ul className="space-y-4">
              {[
                { name: 'Sikkim Tour Package', href: '/sikkim-tour-package' },
                { name: 'Darjeeling Tour Package', href: '/darjeeling-tour-package' },
                { name: 'Dooars Tour Package', href: '/dooars-tour-package' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-accent transition-colors flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-white border-b border-white/20 pb-3 inline-block">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4 shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <span className="text-gray-300 text-sm pt-1">{contactInfo.address}</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-white/10 p-2 rounded-full mr-4 shrink-0 group-hover:bg-accent transition-colors">
                  <Phone size={20} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-300 text-sm hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-white/10 p-2 rounded-full mr-4 shrink-0 group-hover:bg-accent transition-colors">
                  <Mail size={20} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 text-sm hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sneha Tours & Travels. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
