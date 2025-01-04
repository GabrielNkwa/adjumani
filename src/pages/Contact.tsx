import React from 'react';

import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
      <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl pt-16 md:pt-40">
        {/* Contact Form Section */}
        <ContactForm />

        {/* Contact Information Section */}
        <ContactInfo />
      </div>
    </div>
  );
}
