import { Link } from "react-router-dom";
import Header from "@/components/Header";
import AnimatedBg from "@/components/AnimatedBg";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="h-screen bg-black overflow-hidden relative">
      <AnimatedBg />

      {/* Hero background — full visibility */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
      />

      {/* Bottom gradient so text reads over image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <Header />

      {/* Hero content — bottom-anchored */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-32 md:pb-36 px-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-5 [text-wrap:balance]">
          Modern tech for
          <br />
          proven brands.
        </h1>
        <p className="text-sm md:text-base text-white/75 max-w-md leading-relaxed mb-8 px-2 [text-wrap:pretty]">
          Apps, sites, and growth systems built around your customers, your product, and your brand — so you stop renting attention and start owning the relationship.
        </p>
        <Link to="/contact" className="btn-iridescent">
          <span>Get in touch</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Index;
