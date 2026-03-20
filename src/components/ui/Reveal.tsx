import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
};

export default function Reveal({ children, delay = 0, duration = 0.8, direction = "up" }: Props) {
  const getInitialVariants = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 60 };
      case "down":
        return { opacity: 0, y: -60 };
      case "left":
        return { opacity: 0, x: 60 };
      case "right":
        return { opacity: 0, x: -60 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  return (
    <motion.div
      initial={getInitialVariants()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
