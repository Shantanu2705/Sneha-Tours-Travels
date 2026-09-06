import React from 'react';
import { PageHero } from '@/components/ui/PageHero';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero 
        title="Privacy Policy" 
        subtitle="How we protect and use your data." 
        image="/images/blog_mountains.png"
      />
      
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8 first:mt-0">1. Introduction</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-8">Welcome to Sneha Tours & Travels. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">2. The Data We Collect About You</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc ml-6 space-y-3 text-mountain-gray text-lg leading-relaxed mb-8">
              <li><strong className="text-charcoal font-semibold">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-charcoal font-semibold">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong className="text-charcoal font-semibold">Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong className="text-charcoal font-semibold">Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">3. How We Use Your Personal Data</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc ml-6 space-y-3 text-mountain-gray text-lg leading-relaxed mb-8">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a cab).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">4. Data Security</h2>
            <p className="text-mountain-gray text-lg leading-relaxed mb-8">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 mt-8">5. Your Legal Rights</h2>
            <p className="text-mountain-gray text-lg leading-relaxed">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
          </div>
        </div>
      </section>
    </>
  );
}
