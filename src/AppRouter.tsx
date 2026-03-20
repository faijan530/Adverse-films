import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedWork from "./components/sections/FeaturedWork";
import Contact from "./components/sections/Contact";
import CaseStudy from "./pages/CaseStudy";
import Button from "./components/ui/Button";

// Simple router component
function AppRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check if we're on a case study page
  const isCaseStudy = currentPath.startsWith('/case-study/');
  const caseStudyId = isCaseStudy ? currentPath.split('/')[2] : null;

  if (isCaseStudy && caseStudyId) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white min-h-screen overflow-x-hidden"
      >
        <div className="grain"></div>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollY={scrollY} />
        <CaseStudy />
      </motion.div>
    );
  }

  // Home page
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white min-h-screen overflow-x-hidden"
    >
      <div className="grain"></div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollY={scrollY} />
      <Hero />
      <FeaturedWork />
      <Contact />

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-block px-3 py-1 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/50 mb-6 backdrop-blur-sm bg-white/5">
                  ABOUT US
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                  <span className="text-white">CRAFTING</span>
                  <span className="block text-accent">EXCEPTIONAL</span>
                  <span className="block text-white">STORIES</span>
                </h2>
                <div className="w-24 h-1 bg-accent" />
              </div>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  For over <span className="text-accent font-black">15 years</span>, Adverse Films has been at the forefront of cinematic innovation, 
                  delivering award-winning productions that push creative boundaries.
                </p>
                <p>
                  Our collective of visionary directors, cinematographers, and post-production artists 
                  collaborate seamlessly to transform ambitious concepts into <span className="text-white font-semibold">visual masterpieces</span>.
                </p>
                <p>
                  From commercial campaigns to feature films, we bring unparalleled expertise and 
                  artistic excellence to every frame.
                </p>
              </div>
              
              <div className="mt-12">
                <Button variant="primary" href="#contact">
                  DISCUSS YOUR VISION
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black text-white/5 mb-4">AF</div>
                    <div className="text-xs font-black text-white/20 tracking-widest">EST. 2009</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/50 mb-6 backdrop-blur-sm bg-white/5">
              SERVICES
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="text-white">WHAT WE</span>
              <span className="block text-accent">CREATE</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'DIRECTION', desc: 'Visionary storytelling and creative direction', icon: '→' },
              { title: 'CINEMATOGRAPHY', desc: 'Award-winning camera work and lighting', icon: '○' },
              { title: 'POST-PRODUCTION', desc: 'Cutting-edge editing and visual effects', icon: '□' },
              { title: 'COLOR GRADING', desc: 'Cinematic color correction and grading', icon: '◇' }
            ].map((service) => (
              <div key={service.title} className="group relative">
                <div className="p-8 border border-white/5 rounded-lg bg-black/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-500">
                  <div className="text-4xl font-black text-accent mb-6">{service.icon}</div>
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/50 mb-6 backdrop-blur-sm bg-white/5">
              LET'S CONNECT
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="text-white">READY TO</span>
              <span className="block text-accent">CREATE?</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12" />
          </div>
          
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Every great project starts with a conversation. Let's discuss how we can bring your 
            <span className="text-accent font-semibold">cinematic vision</span> to life with our expertise and passion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button 
              onClick={() => window.location.href = '#contact'}
              className="bg-accent text-black px-12 py-4 text-lg font-black tracking-wider shadow-2xl shadow-accent/30 hover:shadow-accent/50 transform hover:scale-105 transition-all duration-500 rounded-lg"
            >
              START CONVERSATION
            </button>
            <button 
              onClick={() => window.location.href = `https://wa.me/919617225305?text=${encodeURIComponent('Hi, I would like to schedule a call to discuss my film project.')}`}
              className="px-12 py-4 text-lg font-black tracking-wider border-2 border-white/30 hover:border-accent hover:bg-accent hover:text-black backdrop-blur-xl transform hover:scale-105 transition-all duration-500 rounded-lg"
            >
              SCHEDULE CALL
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="text-2xl font-black text-accent mb-2">EMAIL</div>
              <p className="text-gray-500">hello@adversefilms.com</p>
            </div>
            <div>
              <div className="text-2xl font-black text-accent mb-2">PHONE</div>
              <p className="text-gray-500">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-2xl font-black text-accent mb-2">STUDIO</div>
              <p className="text-gray-500">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black tracking-tighter text-white mb-4">
                ADVERSE
                <span className="block text-accent">FILMS</span>
              </h3>
              <p className="text-sm text-gray-600">
                Premier film production company crafting cinematic excellence since 2009.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black tracking-widest text-white/50 mb-4">NAVIGATION</h4>
              <div className="space-y-2">
                <a href="#work" className="block text-sm text-gray-600 hover:text-accent transition-colors">Work</a>
                <a href="#about" className="block text-sm text-gray-600 hover:text-accent transition-colors">About</a>
                <a href="#services" className="block text-sm text-gray-600 hover:text-accent transition-colors">Services</a>
                <a href="#contact" className="block text-sm text-gray-600 hover:text-accent transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black tracking-widest text-white/50 mb-4">SOCIAL</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-accent transition-colors">Vimeo</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-accent transition-colors">YouTube</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-accent transition-colors">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black tracking-widest text-white/50 mb-4">CONTACT</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">hello@adversefilms.com</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-600">Los Angeles, CA</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-600 mb-4 md:mb-0">
              © 2024 ADVERSE FILMS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-600 hover:text-accent transition-colors">PRIVACY</a>
              <a href="#" className="text-xs text-gray-600 hover:text-accent transition-colors">TERMS</a>
              <a href="#" className="text-xs text-gray-600 hover:text-accent transition-colors">CREDITS</a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default AppRouter;
