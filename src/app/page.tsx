import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
            Design Solutions
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Creating beautiful, functional spaces that inspire and delight
          </p>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            View Our Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-charcoal">
            Where Vision Meets Reality
          </h2>
          <p className="text-xl text-soft-gray leading-relaxed max-w-3xl mx-auto">
            We believe that great design has the power to transform not just spaces, but lives. 
            Every project we undertake is a collaboration between our expertise and your vision, 
            resulting in interiors that are both beautiful and deeply personal.
          </p>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-charcoal">
              Featured Projects
            </h2>
            <p className="text-xl text-soft-gray">
              A glimpse into our latest work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-200 aspect-[4/3] mb-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${project.image}')`
                    }}
                  ></div>
                </div>
                <h3 className="text-xl font-serif font-medium text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-soft-gray">
                  {project.category}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-8 py-4 text-lg font-medium hover:bg-charcoal hover:text-white transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
