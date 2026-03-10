import { Link } from "react-router-dom";
import Header from "@/components/Header";
import AnimatedBg from "@/components/AnimatedBg";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="h-screen bg-black overflow-hidden relative">
      <AnimatedBg />

      {/* ── Desktop layout (md+): unchanged absolute overlay ── */}
      <img
        src={heroBg}
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <Header />

      {/* ── Mobile layout: image top, text bottom, no overlap ── */}
      <div className="flex flex-col h-full md:hidden relative z-10">
        <div className="relative h-[45%] shrink-0">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-[120px]">
          <h1 className="text-3xl font-semibold tracking-tight text-white leading-[1.1] mb-5 [text-wrap:balance]">
            Modern tech for
            <br />
            proven brands.
          </h1>
          <p className="text-sm text-white/75 max-w-md leading-relaxed mb-8 px-2 [text-wrap:pretty]">
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

      {/* ── Desktop content (md+): unchanged bottom-anchored ── */}
      <div className="hidden md:flex relative z-10 h-full flex-col items-center justify-end pb-36 px-6 text-center">
        <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-5 [text-wrap:balance]">
          Modern tech for
          <br />
          proven brands.
        </h1>
        <p className="text-base text-white/75 max-w-md leading-relaxed mb-8 px-2 [text-wrap:pretty]">
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
