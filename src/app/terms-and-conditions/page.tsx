import React from 'react';
import { PageHero } from '@/components/ui/PageHero';

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero 
        title="Terms and Conditions" 
        subtitle="Please read these terms carefully before booking." 
        image="/images/contact_hero.png"
      />
      
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8 first:mt-0">1. Agreement to Terms</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-8">These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Sneha Tours & Travels ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">2. Booking and Reservations</h2>
            <ul className="list-disc ml-6 space-y-3 text-mountain-gray text-lg leading-relaxed mb-8">
              <li>All bookings are subject to availability and confirmation by our team.</li>
              <li>A minimum advance payment may be required to secure your reservation during peak seasons.</li>
              <li>Fares are calculated based on the distance and type of vehicle selected. Tolls, parking fees, and interstate taxes (if applicable) are usually extra unless explicitly stated in a package.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">3. Cancellations and Refunds</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-4">We understand that plans can change. Our cancellation policy is as follows:</p>
            <ul className="list-disc ml-6 space-y-3 text-mountain-gray text-lg leading-relaxed mb-8">
              <li>Cancellations made 48 hours prior to the journey will receive a full refund of any advance paid.</li>
              <li>Cancellations made between 24 and 48 hours before the journey will be subject to a 50% cancellation fee on the advance amount.</li>
              <li>No-shows or cancellations within 24 hours of the journey will not be eligible for a refund.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">4. Passenger Responsibilities</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-8">Passengers are expected to behave in a respectful manner towards our drivers. Any damage caused to the vehicle by passengers will be charged to the person who made the booking. We do not permit smoking or the consumption of alcohol inside our vehicles.</p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">5. Liability</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-8">While we strive to ensure a safe and timely journey, we are not liable for delays caused by circumstances beyond our control, such as heavy traffic, road closures, extreme weather conditions, or vehicle breakdowns. In the rare event of a breakdown, we will make every effort to provide a replacement vehicle as quickly as possible.</p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">6. Modifications</h2>
            <p className="text-mountain-gray text-lg leading-relaxed">We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms and Conditions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
