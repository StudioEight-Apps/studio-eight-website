import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Product {
  name: string;
  description: string;
  icon: string;
  statusLabel: string;
  isLive: boolean;
  link?: string;
}

const products: Product[] = [
  {
    name: "Whisper",
    description: "AI-powered journaling with personalized guidance.",
    icon: "W",
    statusLabel: "Live on iOS",
    isLive: true,
    link: "/whisper"
  },
  {
    name: "Trips",
    description: "Private aviation booking and management.",
    icon: "T",
    statusLabel: "In Development",
    isLive: false
  },
  {
    name: "Canvas",
    description: "Creative tools for visual storytelling.",
    icon: "C",
    statusLabel: "In Development",
    isLive: false
  },
  {
    name: "Pulse",
    description: "Real-time analytics for creators.",
    icon: "P",
    statusLabel: "In Development",
    isLive: false
  }
];

function ProductCard({ product }: { product: Product }) {
  const content = (
    <div className="rounded-[22px] p-8 backdrop-blur-xl bg-white/40 border border-white/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full"
      style={{
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6A6AFF] to-[#0D8E98] flex items-center justify-center mb-4 shadow-lg">
        <span className="text-2xl font-bold text-white">{product.icon}</span>
      </div>
      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full ${
        product.isLive 
          ? 'bg-green-100 text-green-700' 
          : 'bg-gray-100 text-gray-600'
      }`}>
        {product.isLive && <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
        {product.statusLabel}
      </span>
    </div>
  );

  if (product.link) {
    return <Link to={product.link} className="block">{content}</Link>;
  }
  return <div className="cursor-default">{content}</div>;
}

const InHouse = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">In-House Products</h1>
          <p className="text-muted-foreground">
            Live and in-development products built and operated by Studio Eight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InHouse;
