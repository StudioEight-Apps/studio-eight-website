import Header from "@/components/Header";
import AnimatedBg from "@/components/AnimatedBg";
import { Link } from "react-router-dom";

const ForCreators = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBg />
      <Header />

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative">
        <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-8">
          For Creators
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white text-center leading-[0.95] [text-wrap:balance]">
          You did the hard part.
          <br />
          <span className="text-white/60">Now stop renting it out.</span>
        </h1>
        <p className="mt-8 text-sm md:text-base text-white/75 max-w-lg text-center leading-relaxed px-2 [text-wrap:pretty]">
          You built the audience. Right now you're leasing it to other brands one deal at a time. Attach your own product to it instead — no inventory, infinite scale, and a real exit when you're ready.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-28 md:bottom-24 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.25em] font-medium uppercase text-white/40">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* The opportunity */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-6 text-center">
            The problem
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center mb-8 [text-wrap:balance]">
            You're renting out your best asset.
          </h2>
          <p className="text-sm md:text-base text-white/70 text-center max-w-lg mx-auto mb-20 leading-relaxed [text-wrap:pretty]">
            Every brand deal is someone else profiting from the audience you built. You're the distribution channel but you don't own the product. Flip that. A subscription app in your niche turns every impression into recurring revenue — and it's yours.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Infinite scale",
                desc: "Digital products don't run out. No inventory, no shipping, no limits. Every follower is a potential subscriber. Your audience grows, your revenue grows.",
              },
              {
                num: "02",
                title: "Revenue you own",
                desc: "Brand deals pay once and expire. A subscription product pays every month on autopilot. Real MRR that compounds while you create.",
              },
              {
                num: "03",
                title: "True exit potential",
                desc: "Subscription apps sell for 4–6x annual revenue. Build to $100K/yr and you're sitting on a half-million dollar asset. That's not a brand deal — that's generational.",
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

      {/* The model */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 border-t border-white/[0.10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-6 text-center">
            The model
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center mb-6 [text-wrap:balance]">
            50 / 50
          </h2>
          <p className="text-sm md:text-base text-white/70 text-center max-w-lg mx-auto mb-20 leading-relaxed [text-wrap:pretty]">
            Zero upfront cost. We invest our time and engineering. You invest your reach. Revenue splits evenly. Aligned incentives from day one.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              {
                side: "You bring",
                items: [
                  { text: "Your audience", sub: "Millions of impressions ready to convert" },
                  { text: "Content & promotion", sub: "You know how to reach your niche" },
                  { text: "Brand direction", sub: "Your voice, your vision, your community" },
                  { text: "Distribution", sub: "Every post is a marketing channel" },
                ],
              },
              {
                side: "We bring",
                items: [
                  { text: "Product design & dev", sub: "Beautiful iOS apps, shipped fast" },
                  { text: "App Store launch", sub: "Screenshots, ASO, the full rollout" },
                  { text: "Payments & subscriptions", sub: "RevenueCat, Stripe, analytics" },
                  { text: "Scale & maintenance", sub: "Servers, updates, growth optimization" },
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                className="border border-white/[0.10] rounded-2xl p-7 md:p-8 bg-white/[0.03]"
              >
                <p className="text-[10px] tracking-[0.25em] font-medium uppercase text-white/50 mb-6">
                  {col.side}
                </p>
                <div className="flex flex-col gap-5">
                  {col.items.map((item, j) => (
                    <div key={j}>
                      <p className="text-sm font-medium text-white/90">
                        {item.text}
                      </p>
                      <p className="text-xs text-white/55 mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 border-t border-white/[0.10]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-4 [text-wrap:balance]">
            Stop renting. Start owning.
          </h2>
          <p className="text-sm text-white/60 mb-10 max-w-sm mx-auto leading-relaxed [text-wrap:pretty]">
            You built the audience. We'll build the product. Zero upfront cost — we split revenue 50/50.
          </p>
          <Link to="/contact" className="btn-iridescent">
            <span>Let's talk</span>
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

export default ForCreators;
