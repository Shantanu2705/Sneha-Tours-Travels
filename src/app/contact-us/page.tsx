"use client";

import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { contactInfo } from '@/data/contact';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import React from 'react';

export default function ContactUs() {
  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const feedback = formData.get('message') as string;

    const whatsappNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const text = `Hi, I am ${name} (${phone}). My Feedback: ${feedback}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <PageHero 
        title="Contact Us" 
        subtitle="Ready to plan your journey through North Bengal and Sikkim?"
        image="/images/contact_hero.png" 
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-off-white p-8 rounded-3xl flex items-start gap-6 group hover:bg-primary/5 transition-colors border border-gray-100 shadow-sm hover:shadow-md">
                <div className="bg-white p-4 rounded-full shadow-sm text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Call Us</h3>
                  <p className="text-mountain-gray mb-3">For immediate assistance and bookings.</p>
                  <div className="space-y-1">
                    {contactInfo.phones.map((p, idx) => (
                      <a key={idx} href={`tel:${p.replace(/[^0-9+]/g, '')}`} className="block font-semibold text-primary text-xl hover:text-accent transition-colors">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-off-white p-8 rounded-3xl flex items-start gap-6 group hover:bg-primary/5 transition-colors border border-gray-100 shadow-sm hover:shadow-md">
                <div className="bg-white p-4 rounded-full shadow-sm text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Email Us</h3>
                  <p className="text-mountain-gray mb-3">Send us your detailed itinerary requirements.</p>
                  <div className="space-y-1">
                    {contactInfo.emails.map((e, idx) => (
                      <a key={idx} href={`mailto:${e}`} className="block font-semibold text-primary text-xl break-all hover:text-accent transition-colors">{e}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-off-white p-8 rounded-3xl flex items-start gap-6 group hover:bg-primary/5 transition-colors border border-gray-100 shadow-sm hover:shadow-md">
                <div className="bg-white p-4 rounded-full shadow-sm text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Visit Us</h3>
                  <p className="text-mountain-gray leading-relaxed text-lg">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Feedback Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-center">
              <SectionHeading title="Feedback Form" />
              <p className="text-mountain-gray mt-4">We value your thoughts. Leave us your feedback and it will be sent directly to our team via WhatsApp.</p>
              <form onSubmit={handleFeedbackSubmit} className="space-y-6 mt-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-charcoal">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-charcoal">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Your Phone Number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-charcoal">Feedback</label>
                  <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" placeholder="Share your experience or suggestions..."></textarea>
                </div>
                <Button type="submit" className="w-full h-14 text-lg rounded-xl flex items-center justify-center gap-2">
                  <Send size={20} />
                  Send Now
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative bg-gray-100 overflow-hidden">
        <iframe 
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Lataguri, Neora More, Gorumara National Park, Jalpaiguri, West Bengal - 735219")}&t=&z=17&ie=UTF8&iwloc=B&output=embed`}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale-[0.8] hover:grayscale-0 transition-all duration-700 z-10"
        ></iframe>
      </section>
    </>
  );
}
