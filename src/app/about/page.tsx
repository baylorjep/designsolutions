import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function About() {
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
            About
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait Section */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] bg-gray-200 mb-8">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-soft-gray">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-4xl">👩‍🎨</span>
                    </div>
                    <p className="font-sans text-sm">Designer Portrait</p>
                    <p className="font-sans text-xs mt-1">Replace with professional photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-medium text-charcoal mb-8">
                Meet the Designer
              </h2>
              
              <div className="space-y-6 font-sans text-soft-gray font-light leading-relaxed">
                <p>
                  With over a decade of experience in interior design, I&apos;ve had the privilege of 
                  transforming countless spaces into beautiful, functional homes that truly reflect 
                  the personalities and lifestyles of my clients.
                </p>
                
                <p>
                  My journey in design began with a deep appreciation for how spaces can influence 
                  our daily lives. I believe that great design isn&apos;t just about aesthetics—it&apos;s about 
                  creating environments that enhance our well-being, support our routines, and bring 
                  joy to our everyday experiences.
                </p>
                
                <p>
                  Every project I take on is approached with the same level of care and attention to 
                  detail. I work closely with each client to understand their vision, lifestyle, and 
                  practical needs, ensuring that the final result is not only beautiful but also 
                  perfectly suited to their way of living.
                </p>
              </div>

              {/* Design Philosophy */}
              <div className="mt-12">
                <h3 className="font-serif text-2xl font-medium text-charcoal mb-6">
                  Design Philosophy
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-charcoal rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-sans text-soft-gray font-light">
                      <strong className="text-charcoal">Timeless Elegance:</strong> Creating spaces that remain beautiful and relevant for years to come
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-charcoal rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-sans text-soft-gray font-light">
                      <strong className="text-charcoal">Function Meets Beauty:</strong> Ensuring every design element serves both aesthetic and practical purposes
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-charcoal rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-sans text-soft-gray font-light">
                      <strong className="text-charcoal">Personal Connection:</strong> Building relationships with clients to create truly personalized spaces
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-charcoal rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-sans text-soft-gray font-light">
                      <strong className="text-charcoal">Quality Craftsmanship:</strong> Partnering with skilled artisans and using premium materials
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience & Education */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl font-medium text-charcoal mb-4">
                    Experience
                  </h4>
                  <ul className="space-y-2 font-sans text-soft-gray font-light">
                    <li>• 10+ years in residential design</li>
                    <li>• 50+ completed projects</li>
                                         <li>• Specialized in modern &amp; transitional styles</li>
                    <li>• Full-service design solutions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-serif text-xl font-medium text-charcoal mb-4">
                    Education
                  </h4>
                  <ul className="space-y-2 font-sans text-soft-gray font-light">
                    <li>• BFA in Interior Design</li>
                    <li>• NCIDQ Certified</li>
                    <li>• Continuing education in sustainable design</li>
                    <li>• Member of ASID</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-6">
            Let&apos;s Create Something Beautiful Together
          </h2>
          
          <p className="font-sans text-lg text-soft-gray font-light mb-12 max-w-2xl mx-auto">
                         I&apos;d love to hear about your project and discuss how we can transform your space into 
             something truly special.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-charcoal text-white font-sans text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border border-charcoal text-charcoal font-sans text-sm font-medium tracking-wide hover:bg-charcoal hover:text-white transition-colors duration-200"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 