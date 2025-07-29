import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Portfolio() {
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
            Portfolio
          </h1>
          
          <p className="font-sans text-lg text-soft-gray font-light max-w-3xl">
            Explore our collection of interior design projects. Each space is thoughtfully designed 
            to reflect the unique personality and lifestyle of our clients while maintaining the 
            highest standards of design excellence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-200 mb-6 overflow-hidden image-hover">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-soft-gray">
                      <div className="w-20 h-20 mx-auto mb-3 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl">
                          {project.category === 'Living Space' && '🛋️'}
                          {project.category === 'Kitchen' && '🍽️'}
                          {project.category === 'Bedroom' && '🛏️'}
                          {project.category === 'Dining' && '🍽️'}
                          {project.category === 'Office' && '💼'}
                          {project.category === 'Bathroom' && '🚿'}
                        </span>
                      </div>
                      <p className="font-sans text-sm">Project Image</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="font-sans text-xs text-soft-gray font-light tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-soft-gray transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="font-sans text-soft-gray font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-6">
            Ready to Transform Your Space?
          </h2>
          
          <p className="font-sans text-lg text-soft-gray font-light mb-12 max-w-2xl mx-auto">
                         Let&apos;s work together to create a home that reflects your unique style and enhances your daily life.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-charcoal text-white font-sans text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 