'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual Supabase integration
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-soft-gray hover:text-charcoal transition-colors duration-200 font-sans text-sm font-light"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-6">
            Contact
          </h1>
          
          <p className="font-sans text-lg text-soft-gray font-light max-w-3xl">
                         Ready to transform your space? I&apos;d love to hear about your project and discuss how we can 
             create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-medium text-charcoal mb-8">
                Get in Touch
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-medium text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="font-sans text-green-700">
                    Your message has been sent successfully. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-green-600 hover:text-green-800 font-sans text-sm font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-sans text-sm font-medium text-charcoal mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-charcoal focus:outline-none font-sans text-sm transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-sans text-sm font-medium text-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-charcoal focus:outline-none font-sans text-sm transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-sans text-sm font-medium text-charcoal mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-charcoal focus:outline-none font-sans text-sm transition-colors duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block font-sans text-sm font-medium text-charcoal mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-charcoal focus:outline-none font-sans text-sm transition-colors duration-200"
                      >
                        <option value="">Select project type</option>
                        <option value="full-home">Full Home Design</option>
                        <option value="living-room">Living Room</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="bathroom">Bathroom</option>
                        <option value="office">Home Office</option>
                        <option value="consultation">Design Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-charcoal focus:outline-none font-sans text-sm transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-charcoal text-white font-sans text-sm font-medium tracking-wide hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-medium text-charcoal mb-8">
                Let&apos;s Connect
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-charcoal mb-2">
                      Email
                    </h3>
                    <p className="font-sans text-soft-gray font-light">
                      hello@designsolutions.com
                    </p>
                    <p className="font-sans text-sm text-soft-gray mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-charcoal mb-2">
                      Phone
                    </h3>
                    <p className="font-sans text-soft-gray font-light">
                      (555) 123-4567
                    </p>
                    <p className="font-sans text-sm text-soft-gray mt-1">
                      Available Mon-Fri, 9AM-6PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-charcoal mb-2">
                      Service Area
                    </h3>
                    <p className="font-sans text-soft-gray font-light">
                      San Francisco Bay Area
                    </p>
                    <p className="font-sans text-sm text-soft-gray mt-1">
                      In-person consultations available locally
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-white rounded-lg border border-gray-100">
                <h3 className="font-serif text-lg font-medium text-charcoal mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-2 font-sans text-soft-gray font-light text-sm">
                  <li>• Initial consultation to discuss your vision</li>
                  <li>• Detailed project proposal and timeline</li>
                  <li>• Regular updates throughout the process</li>
                  <li>• Final walkthrough and styling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 