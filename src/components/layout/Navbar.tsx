import { useState } from 'react';

type Props = {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (open: boolean) => void;
  scrollY?: number;
};

export default function Navbar({ isMenuOpen: externalIsOpen, setIsMenuOpen: externalSetOpen, scrollY = 0 }: Props) {
  const [internalIsOpen, internalSetOpen] = useState(false);
  const isMenuOpen = externalIsOpen ?? internalIsOpen;
  const setIsMenuOpen = externalSetOpen ?? internalSetOpen;

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const isScrolled = scrollY > 50;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50' 
          : 'bg-black/40 backdrop-blur-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="group">
                <h1 className="text-3xl font-black tracking-tighter text-white group-hover:text-accent transition-all duration-500 transform group-hover:scale-105">
                  ADVERSE
                  <span className="block text-accent text-xl font-light tracking-wider">FILMS</span>
                </h1>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold tracking-wider text-gray-500 hover:text-accent transition-all duration-500 relative group py-3"
                >
                  <span className="uppercase">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
              <a href="#contact" className="bg-accent text-black px-8 py-4 text-sm font-black tracking-wider hover:bg-accent/90 transition-all duration-500 transform hover:scale-105 shadow-xl shadow-accent/25 hover:shadow-accent/40">
                GET STARTED
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-4 transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-7 h-7 flex flex-col justify-center space-y-2">
                  <span className={`block w-full h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`block w-full h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-full h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`xl:hidden transition-all duration-700 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-8 space-y-3 bg-black/95 backdrop-blur-2xl border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-xl font-bold tracking-wider text-gray-400 hover:text-accent transition-all duration-500 py-4 px-6 rounded-xl hover:bg-white/5 transform hover:translate-x-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="uppercase">{link.name}</span>
              </a>
            ))}
            <button className="w-full bg-accent text-black px-8 py-5 text-sm font-black tracking-wider hover:bg-accent/90 transition-all duration-500 mt-6 rounded-xl transform hover:scale-105 shadow-xl shadow-accent/25">
              GET STARTED
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
