import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { products, categories, tags } from "@/data/products";

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag.toLowerCase())
        ? prev.filter((t) => t !== tag.toLowerCase())
        : [...prev, tag.toLowerCase()]
    );

  let filtered = products.filter((p) => {
    if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
    if (selectedTags.length && !p.tags.some((t) => selectedTags.includes(t))) return false;
    return true;
  });

  if (sortBy === "price-high") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "price-low") filtered = [...filtered].sort((a, b) => a.price - b.price);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="pt-20 lg:pt-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-body">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              HOME
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-bold tracking-wider">SHOP</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="mb-10">
              <h3 className="font-display text-lg text-foreground mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 border transition-colors duration-200 flex items-center justify-center ${
                        selectedCategories.includes(cat)
                          ? "bg-accent border-accent"
                          : "border-border group-hover:border-muted-foreground"
                      }`}
                    >
                      {selectedCategories.includes(cat) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" className="text-accent-foreground" />
                        </svg>
                      )}
                    </div>
                    <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-display text-lg text-foreground mb-4">Tag</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-1.5 text-xs font-body tracking-wider border transition-all duration-200 ${
                      selectedTags.includes(tag.toLowerCase())
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-body text-sm bg-transparent border border-border px-4 py-2 text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              >
                <option value="default">Default</option>
                <option value="price-high">Price - High to Low</option>
                <option value="price-low">Price - Low to High</option>
              </select>
              <p className="font-body text-xs text-muted-foreground tracking-wider">
                {filtered.length} PRODUCTS
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link to={`/product/${product.id}`} className="group block">
                    <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.discount > 0 && (
                          <span className="bg-accent text-accent-foreground text-[10px] font-body tracking-wider px-2.5 py-1">
                            -{product.discount}%
                          </span>
                        )}
                        {product.isNew && (
                          <span className="bg-foreground text-primary-foreground text-[10px] font-body tracking-wider px-2.5 py-1">
                            NEW
                          </span>
                        )}
                      </div>

                      {/* Wishlist */}
                      <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground/50 hover:text-accent">
                        <Heart size={18} strokeWidth={1.5} />
                      </button>

                      {/* Quick action */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="block w-full bg-accent text-accent-foreground text-center font-body text-xs tracking-[0.2em] uppercase py-3">
                          Select Option
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-base text-foreground mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm font-bold text-foreground">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="font-body text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Shop;
