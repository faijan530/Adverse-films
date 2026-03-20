import { motion } from "framer-motion";

type Props = {
  title: string;
  category: string;
  thumbnail: string;
  id: string;
};

export default function WorkCard({ title, category, thumbnail, id }: Props) {
  const handleClick = () => {
    // Simple navigation without router
    window.location.href = `/case-study/${id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative min-w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-lg shadow-2xl"
      onClick={handleClick}
    >
      {/* Ultra High-Quality Image */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 premium-image"
        loading="lazy"
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/70 transition-all duration-500" />

      {/* Text */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-sm text-accent font-bold tracking-wider uppercase mb-2 drop-shadow-lg">{category}</p>
        <h3 className="text-xl font-black text-white mb-2 drop-shadow-lg">{title}</h3>
        
        {/* Hover Action */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="text-accent text-sm font-semibold tracking-wider hover:text-white transition-colors duration-300 flex items-center gap-2 drop-shadow-lg">
            <span>VIEW PROJECT</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Enhanced Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500" />
      </div>

      {/* Premium Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />

    </motion.div>
  );
}
