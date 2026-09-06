import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PackageCard } from '@/components/ui/PackageCard';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { packages } from '@/data/packages';
import { destinations } from '@/data/destinations';
import { ShieldCheck, Clock, Map, Star } from 'lucide-react';

export default function Home() {
  const featuredPackages = packages.slice(0, 3);
  const sikkimDestinations = destinations.filter(d => d.region === 'Sikkim');
  const darjeelingDestinations = destinations.filter(d => d.region === 'Darjeeling');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/images/home_hero.png" 
            alt="Himalayan Mountains" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-xl leading-tight">
            Discover Sikkim & Darjeeling
            <span className="block text-accent mt-4">Like never before!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
            Comfortable journeys, trusted drivers and unforgettable experiences across the Himalayas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#packages">
              <Button size="lg" className="w-full sm:w-auto text-lg font-semibold h-14 px-10">Explore Packages</Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-charcoal text-lg font-semibold h-14 px-10">Plan Your Journey</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-12 border-b border-gray-100 shadow-xl relative z-20 -mt-8 mx-4 md:mx-12 lg:mx-auto max-w-7xl rounded-2xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Star, title: "Comfortable Vehicles" },
              { icon: ShieldCheck, title: "Experienced Drivers" },
              { icon: Clock, title: "On-Time Service" },
              { icon: Map, title: "Local Experts" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="bg-primary/5 p-5 rounded-full mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                  <feature.icon className="text-accent" size={32} />
                </div>
                <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-primary transition-colors">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="packages" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Explore Our Packages" 
            subtitle="Curated journeys through the hills of North Bengal and Sikkim."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/sikkim-tour-package">
              <Button variant="outline" size="lg" className="border-2 font-semibold px-10">View All Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Sikkim Destinations */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/dest_gangtok.png')] opacity-5 bg-fixed bg-cover pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeading 
              title="Popular Sikkim Destinations" 
              subtitle="Discover the vibrant capital, serene lakes, and unmatched views of the Himalayas."
            />
            <Link href="/destination" className="hidden md:inline-flex mb-6 text-accent font-semibold hover:text-accent-hover items-center text-lg">
              View all Sikkim destinations <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DestinationCard dest={sikkimDestinations[0]} featured />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {sikkimDestinations.slice(1, 3).map(dest => (
                <DestinationCard key={dest.id} dest={dest} />
              ))}
            </div>
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link href="/destination">
              <Button variant="outline" className="w-full">View All Sikkim Destinations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Darjeeling Destinations */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeading 
              title="Popular Darjeeling Destinations" 
              subtitle="Experience the Queen of the Hills, tea gardens, and spectacular sunrises."
            />
            <Link href="/destination" className="hidden md:inline-flex mb-6 text-accent font-semibold hover:text-accent-hover items-center text-lg">
              View all Darjeeling destinations <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {darjeelingDestinations.slice(0, 4).map(dest => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link href="/destination">
              <Button variant="outline" className="w-full">View All Darjeeling Destinations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading title="Travel With Confidence" />
              <div className="space-y-10 mt-12">
                {[
                  { title: "Comfortable Vehicles", desc: "Well-maintained vehicles for comfortable journeys across winding mountain roads." },
                  { title: "Experienced Drivers", desc: "Professional drivers familiar with Himalayan routes ensuring your safety." },
                  { title: "Reliable Service", desc: "Focus on punctuality and dependable travel from Bagdogra to your destination." },
                  { title: "Transparent Experience", desc: "Simple and comfortable travel planning with no hidden surprises." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold font-serif text-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif font-bold text-charcoal mb-2">{feature.title}</h4>
                      <p className="text-mountain-gray text-lg leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[700px] rounded-[2rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/images/home_fleet.png" 
                alt="Travel with Sneha Tours & Travels" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-10">
                  <h3 className="text-white font-serif font-bold text-3xl mb-2">Safety First</h3>
                  <p className="text-white/90 text-lg">Your peace of mind is our priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Travel Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/images/home_cinematic.png" 
            alt="The mountains are calling" 
            fill 
            className="object-cover bg-fixed"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 drop-shadow-lg">
            The mountains are calling.
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            From the tea gardens of Darjeeling to the breathtaking landscapes of Sikkim, let the journey become part of the experience.
          </p>
          <Link href="/destination">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold shadow-2xl h-16 px-12 text-lg hover:-translate-y-1 transition-transform">
              Explore Destinations
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
