import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function AboutUs() {
  return (
    <>
      <PageHero 
        title="About Us" 
        image="/images/dest_hero.png" 
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-mountain-gray leading-relaxed">
              <SectionHeading title="Your Trusted Travel Partner" />
              <p>
                Sneha Tours & Travels is your trusted partner for safe and seamless travel in the hills of North Bengal and Sikkim. Whether you're heading to the serene landscapes of Darjeeling, the vibrant capital of Gangtok, or exploring offbeat gems like Kalimpong, Pelling, or Lachung, we ensure a stress-free journey right from Bagdogra Airport (IXB) to your destination.
              </p>
              <p>
                With a fleet of well-maintained vehicles, courteous drivers, and a commitment to punctuality, we serve solo travelers, families, and groups alike — with a focus on comfort, safety, and transparency.
              </p>
              <p>
                We specialize in offering safe, reliable, and affordable cab services, ensuring that your trip begins and ends with peace of mind. With a fleet of well-maintained, comfortable vehicles, experienced and professional drivers, we guarantee a stress-free travel experience for solo travelers, families, friends, and groups alike. Whether you're on a business trip, family vacation, honeymoon, or group tour, we have the perfect transport options to meet your needs.
              </p>
            </div>
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/about_fleet.png" 
                alt="Our Fleet" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pkg_sikkim.png')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Explore North Bengal and Sikkim?</h2>
          <p className="text-xl text-gray-300 font-light mb-12 leading-relaxed">
            At Sneha Tours & Travels, we're here to help you explore the majestic hills, valleys, and highlands of Sikkim and Darjeeling without any hassle. Whether you need a comfortable ride to your hotel or a guided tour to the top destinations, we've got you covered. Contact Us today to book your cab or tour package and start your journey with confidence.
          </p>
          <Link href="/contact-us">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-10 h-14">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
