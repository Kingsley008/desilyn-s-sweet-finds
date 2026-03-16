import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Summer collection lifestyle"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-lg"
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Summer 2025 Collection
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-2">
            30% Off
          </h2>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground/80 leading-[1.1] mb-8">
            Summer Vacation
          </h3>
          <a
            href="#"
            className="inline-block bg-accent text-accent-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-300"
          >
            Shop Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
