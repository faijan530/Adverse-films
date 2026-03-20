import { motion } from 'framer-motion';
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/showreel.mp4" type="video/mp4" />
      </video>

      {/* ✨ Premium Gradient Fade Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      {/* 🎯 Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-block px-8 py-4 border border-accent/40 rounded-full text-xs font-black tracking-widest text-accent backdrop-blur-xl bg-accent/10 shadow-2xl shadow-accent/20">
            AWARD-WINNING CINEMATIC EXCELLENCE
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-none"
        >
          Stories That
          <span className="block text-accent">Sell</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-20 leading-relaxed">
            We craft high-converting ad films that make brands unforgettable and drive exceptional results.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-12 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              href="#work" 
              className="px-12 py-4 text-lg font-black tracking-wider shadow-2xl shadow-accent/30 hover:shadow-accent/50 transform hover:scale-105 transition-all duration-500"
            >
              View Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              href="#contact" 
              className="px-12 py-4 text-lg font-black tracking-wider border-2 border-white/30 hover:border-accent hover:bg-accent hover:text-black backdrop-blur-xl transform hover:scale-105 transition-all duration-500"
            >
              Start a Project
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
