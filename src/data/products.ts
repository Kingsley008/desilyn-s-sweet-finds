export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  isNew: boolean;
  category: string;
  tags: string[];
  description: string;
  styleTip: string;
  images: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 4490,
    name: "TSS Originals: Soulful Escapes",
    price: 997,
    originalPrice: 1389,
    discount: 28,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    isNew: true,
    category: "T-Shirts",
    tags: ["women", "fashion"],
    description: "Time for some eclectic style! Are you ready to make a bold statement with these tees? Let's go! These oversized t-shirts make you feel comfy while you stand out in the crowd. The loose, relaxed fit is perfect for those who love a laid-back vibe without compromising on style.",
    styleTip: "Let your personality shine by pairing these tees with your favorite denim, joggers, or shorts. Mix and match with confidence, and don't be afraid to experiment with different patterns for a truly unique look.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
    ],
    sizes: ["XL", "XXL"],
  },
  {
    id: 4491,
    name: "Punisher: Chaos",
    price: 699,
    originalPrice: 920,
    discount: 24,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
    isNew: true,
    category: "T-Shirts",
    tags: ["men", "fashion"],
    description: "Official Licensed Punisher Oversized Full Sleeve T-Shirt. Punisher: He cleans up the streets, this shirt cleans up your wardrobe.",
    styleTip: "Pair these tees with slim-fit bottoms for a balanced look. Throw on a denim jacket or layer with accessories to enhance your street-style appeal.",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4492,
    name: "Ribbed T-shirt: Black",
    price: 699,
    originalPrice: 822,
    discount: 15,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&h=800&fit=crop",
    isNew: true,
    category: "T-Shirts",
    tags: ["women", "fashion"],
    description: "Show off your style with our vibrant tshirt. Crafted from comfy fabrics, they'll keep you cool while you rock bold designs and trendy fits.",
    styleTip: "Pair them with high-waisted jeans, shorts, or skirts for endless outfit possibilities.",
    images: [
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 4493,
    name: "Solids: Winter Mauve",
    price: 899,
    originalPrice: 1183,
    discount: 24,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop",
    isNew: false,
    category: "T-Shirts",
    tags: ["women", "fashion"],
    description: "Shop for Solids: Winter Mauve Oversized T-Shirts at The Store.",
    styleTip: "Pair with ripped jeans and chunky sneakers for a timeless look.",
    images: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 4494,
    name: "Hello Kitty: Laugh More",
    price: 965,
    originalPrice: 1270,
    discount: 24,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
    isNew: true,
    category: "T-Shirts",
    tags: ["women", "fashion"],
    description: "It's easy, breezy, & carefree! Made for the days when you want to conquer the world with freedom.",
    styleTip: "Don't forget the matching shorts! Or pair it with your favorite skinny jeans or leggings for a balanced silhouette.",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4495,
    name: "Panel Detail: Forest Camo",
    price: 800,
    originalPrice: 952,
    discount: 16,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=800&fit=crop",
    isNew: true,
    category: "T-Shirts",
    tags: ["men", "fashion"],
    description: "This tee isn't just big, it's a statement piece. Made from a super-soft, breathable fabric.",
    styleTip: "Pair your tee with ripped jeans and chunky sneakers. Create depth by layering over a Henley shirt.",
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=800&fit=crop",
    ],
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 4496,
    name: "Tom & Jerry: Chillin'",
    price: 799,
    originalPrice: 1110,
    discount: 28,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop",
    isNew: true,
    category: "T-Shirts",
    tags: ["men", "fashion"],
    description: "Get ready for a dose of nostalgia and mischief with our Tom & Jerry Oversized T-Shirts!",
    styleTip: "Pair these tees with slim-fit bottoms for a balanced look. Throw on a denim jacket to enhance your street-style appeal.",
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4497,
    name: "TSS Originals: Timeless",
    price: 950,
    originalPrice: 1250,
    discount: 24,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    isNew: false,
    category: "T-Shirts",
    tags: ["women", "fashion"],
    description: "Who says comfort can't be chic? Ditch the squeeze and enjoy the breeze with our collection of relaxed-fit tees!",
    styleTip: "Pair your tee with ripped jeans and sneakers for a timeless, go-to outfit.",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 4498,
    name: "Solids: Chocolatey Brown",
    price: 899,
    originalPrice: 1070,
    discount: 16,
    image: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=600&h=800&fit=crop",
    isNew: true,
    category: "T-Shirts",
    tags: ["women", "fashion"],
    description: "Show off your style with our vibrant cropped tops. Crafted from comfy fabrics, they'll keep you cool.",
    styleTip: "Pair them with high-waisted jeans, shorts, or skirts for endless outfit possibilities.",
    images: [
      "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L"],
  },
];

export const categories = ["T-Shirts", "Socks", "Shirt", "Diy", "Slides", "Polo", "Sweaters"];
export const priceRanges = ["Below ₹100", "₹101 - ₹500", "₹501 - ₹1000", "₹1001 - ₹2000", "Above ₹2000"];
export const tags = ["Women", "Men", "Fashion"];
