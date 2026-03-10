import Header from "@/components/Header";
import AnimatedBg from "@/components/AnimatedBg";
import { Link } from "react-router-dom";

const ForBusinesses = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBg />
      <Header />

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative">
        <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-8">
          For Businesses
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white text-center leading-[0.95] [text-wrap:balance]">
          Make your tech
          <br />
          <span className="text-white/60">work for you.</span>
        </h1>
        <p className="mt-8 text-sm md:text-base text-white/75 max-w-lg text-center leading-relaxed px-2 [text-wrap:pretty]">
          You have the brand, the customers, and the revenue. Your platform should be selling, retaining, and serving them around the clock. We build the tech that makes that happen — modern tools, AI, and infrastructure designed around your business model.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-28 md:bottom-24 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.25em] font-medium uppercase text-white/40">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* The problem */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-6 text-center">
            The problem
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center mb-8 [text-wrap:balance]">
            You're competing where you don't have to.
          </h2>
          <p className="text-sm md:text-base text-white/70 text-center max-w-lg mx-auto mb-20 leading-relaxed [text-wrap:pretty]">
            You're fighting for attention on Instagram against everyone else when you already have the customers. A modern platform puts them in your ecosystem — not an algorithm's. Stop chasing eyeballs and start retaining the base you already built.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Own the relationship",
                desc: "Stop depending on social algorithms to reach your own customers. A custom platform puts them in your world — not Instagram's, not Google's.",
              },
              {
                num: "02",
                title: "Convert, don't just impress",
                desc: "Your site looks fine but it doesn't sell. We build every page, every flow, and every touchpoint to move visitors from browsing to buying.",
              },
              {
                num: "03",
                title: "Retain & compound",
                desc: "One-time buyers become recurring customers. Push notifications, loyalty systems, and subscriptions that grow your revenue every month.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="border border-white/[0.10] rounded-2xl p-7 md:p-8 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <span className="text-[10px] tracking-[0.25em] font-medium text-white/40 block mb-5">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed [text-wrap:pretty]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The numbers */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 border-t border-white/[0.10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-16 text-center">
            Why it matters
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "5×", label: "higher engagement from optimized platforms" },
              { stat: "80%", label: "of revenue comes from repeat customers" },
              { stat: "65%", label: "higher retention with push notifications and loyalty systems" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-semibold text-white mb-3 [text-wrap:balance]">
                  {item.stat}
                </p>
                <p className="text-xs text-white/60 tracking-[0.15em] [text-wrap:pretty] max-w-[200px] mx-auto">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 border-t border-white/[0.10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-6 text-center">
            What we build
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-16 max-w-2xl mx-auto">
            {[
              { title: "Custom platforms", desc: "Not templates. Sites and apps built around your business, your customers, and how they actually buy from you." },
              { title: "Native mobile apps", desc: "iOS apps that keep your customers coming back. Push notifications, loyalty features, and frictionless checkout — all on their phone." },
              { title: "Growth & ad systems", desc: "Meta, TikTok, and landing pages engineered to drive real ROI. We build the campaigns and the pages they land on." },
              { title: "Retention engines", desc: "Email sequences, in-app messaging, and subscription models that turn one-time buyers into lifetime customers." },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/[0.10] rounded-2xl p-7 md:p-8 bg-white/[0.03]"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed [text-wrap:pretty]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 border-t border-white/[0.10]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-4 [text-wrap:balance]">
            Your customers are already there. Your platform should be too.
          </h2>
          <p className="text-sm text-white/60 mb-10 max-w-sm mx-auto leading-relaxed [text-wrap:pretty]">
            We'll audit your digital presence for free and show you exactly where you're losing revenue.
          </p>
          <Link to="/contact" className="btn-iridescent">
            <span>Get a free audit</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
};

export default ForBusinesses;
