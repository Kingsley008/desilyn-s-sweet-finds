import { motion } from "framer-motion";
import { Truck, Headphones, RefreshCw, Tag } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "Enjoy free delivery on all orders." },
  { icon: Headphones, title: "Support 24/7", desc: "Our support team is always here to help." },
  { icon: RefreshCw, title: "Money Return", desc: "Hassle-free return and refund process." },
  { icon: Tag, title: "Order Discount", desc: "Affordable pricing and exclusive offers." },
];

const FeaturesBar = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <f.icon size={20} strokeWidth={1.5} className="text-accent" />
            </div>
            <div>
              <h4 className="font-body text-sm font-bold tracking-wide text-foreground mb-1">
                {f.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBar;
