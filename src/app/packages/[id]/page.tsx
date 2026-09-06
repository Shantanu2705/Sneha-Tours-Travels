import { notFound } from 'next/navigation';
import { packages } from '@/data/packages';
import { PageHero } from '@/components/ui/PageHero';
import { contactInfo } from '@/data/contact';
import { Button } from '@/components/ui/Button';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { EnquiryForm } from '@/components/ui/EnquiryForm';
import React from 'react';

// Use correct type for Next.js 15+ page params
export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.id === resolvedParams.id);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={pkg.title} 
        subtitle={`${pkg.duration} | ${pkg.location}`}
        image={pkg.image} 
      />

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:w-2/3 space-y-12">
              
              {/* Overview */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Overview</h2>
                <div className="flex flex-wrap gap-6 mb-8 text-mountain-gray border-b border-gray-100 pb-8">
                  <div className="flex items-center">
                    <Clock size={20} className="text-accent mr-2" />
                    <span className="font-medium text-charcoal">Duration:</span>
                    <span className="ml-2">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="text-accent mr-2" />
                    <span className="font-medium text-charcoal">Location:</span>
                    <span className="ml-2">{pkg.location}</span>
                  </div>
                </div>
                
                <p className="text-lg text-mountain-gray leading-relaxed mb-8 whitespace-pre-wrap">
                  {pkg.longDescription || pkg.description}
                </p>

                {pkg.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 size={20} className="text-accent mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-mountain-gray">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Itinerary */}
              {pkg.itinerary && pkg.itinerary.length > 0 && (
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">Itinerary</h2>
                  
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    {pkg.itinerary.map((day, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-sm">
                          {day.day}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-off-white border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-charcoal text-lg">Day {day.day}: {day.title}</h4>
                          </div>
                          <p className="text-mountain-gray leading-relaxed text-sm">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar - Enquiry Form */}
            <div className="lg:w-1/3 w-full lg:sticky lg:top-24">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">Book This Package</h3>
                <p className="text-mountain-gray mb-8 text-sm">Need help planning this trip? Drop us a message on WhatsApp.</p>
                
                <EnquiryForm itemName={pkg.title} itemType="package" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
