type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, variant = "primary", href, className = "", onClick }: Props) {
  const baseClasses = "px-6 py-3 font-black tracking-wider transition-all duration-300 hover:scale-105 rounded-lg";
  
  const variantClasses = variant === "primary" 
    ? "bg-accent text-black shadow-xl shadow-accent/20 hover:shadow-accent/40" 
    : "border-2 border-white/30 text-white hover:border-accent hover:bg-accent hover:text-black backdrop-blur-sm";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
