import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Minus, Plus } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "info">("description");

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Product not found.</p>
      </div>
    );
  }

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
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
              SHOP
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-bold tracking-wider">PRODUCT</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex-1 flex gap-4">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-3 w-20">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === i ? "border-accent" : "border-transparent hover:border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-1 relative aspect-[3/4] overflow-hidden bg-muted"
            >
              {product.discount > 0 && (
                <span className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground text-[10px] font-body tracking-wider px-3 py-1.5">
                  -{product.discount}%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-4 left-4 mt-7 z-10 bg-foreground text-primary-foreground text-[10px] font-body tracking-wider px-3 py-1.5">
                  NEW
                </span>
              )}
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Product Info - Sticky */}
          <div className="lg:w-[420px] lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-2xl text-accent">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="font-body text-base text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <p className="font-body text-sm font-bold text-foreground tracking-wider mb-3">
                  Size
                </p>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center font-body text-sm border transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-accent text-accent-foreground border-accent"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-11 h-11 flex items-center justify-center font-body text-sm text-foreground border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>

                <button className="flex-1 h-12 bg-accent text-accent-foreground font-body text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300">
                  Add To Cart
                </button>

                <button className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Meta */}
              <div className="space-y-2 pt-6 border-t border-border">
                <p className="font-body text-sm text-muted-foreground">
                  Categories : <span className="text-foreground">{product.category}</span>
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Tags :{" "}
                  {product.tags.map((t, i) => (
                    <span key={t}>
                      <span className="text-foreground">{t}</span>
                      {i < product.tags.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20 border-t border-border">
          <div className="flex gap-8 pt-px">
            {(["info", "description"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-display text-lg py-4 border-t-2 transition-colors duration-200 ${
                  activeTab === tab
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "info" ? "Additional Information" : "Description"}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-3xl">
            {activeTab === "info" ? (
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Country of Origin:</strong> India
              </p>
            ) : (
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                <p>{product.description}</p>
                <p>
                  <strong className="text-foreground">Style Tip:</strong> {product.styleTip}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default ProductDetail;
