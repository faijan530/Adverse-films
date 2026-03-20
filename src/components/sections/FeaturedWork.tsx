import { motion } from "framer-motion";
import WorkCard from "../ui/WorkCard";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/60 mb-6 backdrop-blur-sm bg-white/5">
                FEATURED WORK
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                <span className="text-white">SELECTED</span>
                <span className="block text-accent">PROJECTS</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent shadow-2xl shadow-accent/50" />
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Award-winning productions that define excellence
            </p>
          </div>
        </Reveal>

        {/* Netflix-Style Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-shrink-0"
              >
                <WorkCard
                  title={project.title}
                  category={project.category}
                  thumbnail={project.thumbnail}
                  id={project.id}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-700 transition-all duration-300"
                style={{
                  backgroundColor: index === 0 ? '#C2A47E' : 'rgba(107, 114, 128, 0.5)'
                }}
              />
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <Reveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-12 py-4 bg-accent text-black font-black tracking-wider hover:bg-accent/90 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-accent/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW ALL PROJECTS
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
