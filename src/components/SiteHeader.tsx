import { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Shop", "Trending"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-body tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-display text-3xl lg:text-4xl italic font-medium text-foreground tracking-wide">
            DesiLyn
          </h1>
        </a>

        <div className="flex items-center gap-5 ml-auto">
          {[Search, User, Heart, ShoppingBag].map((Icon, i) => (
            <button
              key={i}
              className="text-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              <Icon size={18} strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
