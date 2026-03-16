import { motion } from "framer-motion";
import bannerWomen from "@/assets/banner-women.jpg";
import bannerMen from "@/assets/banner-men.jpg";

const banners = [
  { image: bannerWomen, label: "Women's Collection", tag: "Summer Essentials" },
  { image: bannerMen, label: "Men's Collection", tag: "Summer Essentials" },
];

const BannerGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((b, i) => (
          <motion.a
            key={b.label}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative overflow-hidden aspect-[4/5] block"
          >
            <img
              src={b.image}
              alt={b.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-accent-foreground/80 mb-2">
                {b.tag}
              </p>
              <h3 className="font-display text-3xl text-accent-foreground font-light">
                {b.label}
              </h3>
              <span className="inline-block mt-4 font-body text-xs tracking-[0.2em] uppercase text-accent-foreground border-b border-accent-foreground/40 pb-0.5 group-hover:border-accent-foreground transition-colors duration-300">
                Shop Now
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BannerGrid;
