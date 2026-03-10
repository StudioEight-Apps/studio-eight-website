import Header from "@/components/Header";
import AnimatedBg from "@/components/AnimatedBg";
import { Link } from "react-router-dom";

const Growth = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBg />
      <Header />

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-8">
          Growth
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[0.95] [text-wrap:balance]">
          Launch is day one.
        </h1>
        <p className="mt-8 text-sm md:text-base text-white/75 max-w-lg leading-relaxed px-2 [text-wrap:pretty]">
          We don't just build and disappear. We run ads, create content, and optimize relentlessly until the numbers speak for themselves.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-28 md:bottom-24 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.25em] font-medium uppercase text-white/40">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Channels */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-6 text-center">
            The playbook
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center mb-8 [text-wrap:balance]">
            Modern growth, not guesswork.
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-lg mx-auto text-center leading-relaxed mb-20 [text-wrap:pretty]">
            We use the same channels and strategies that scale consumer apps and DTC brands — adapted for your business.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              {
                title: "Meta Ads",
                desc: "Full-funnel campaigns on Facebook and Instagram. Lookalike audiences, retargeting, creative testing — optimized for cost per acquisition.",
              },
              {
                title: "Spark Ads & TikTok",
                desc: "Native TikTok campaigns that don't feel like ads. Spark Ads boost organic content. We test hooks, audiences, and creatives at volume.",
              },
              {
                title: "UGC Content",
                desc: "Real people creating real content about your product. We source creators, brief them, and turn their content into high-performing ad creative.",
              },
              {
                title: "AI-Generated UGC",
                desc: "Scalable content production using AI tools. We generate dozens of ad variations per week — test fast, kill losers, scale winners.",
              },
              {
                title: "App Store Optimization",
                desc: "Keywords, screenshots, descriptions, and review strategy engineered to maximize organic discovery and conversion on the App Store.",
              },
              {
                title: "Retention & Lifecycle",
                desc: "Push notifications, email sequences, and in-app messaging designed to bring users back and convert free trials into paying subscribers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/[0.10] rounded-2xl p-7 md:p-8 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed [text-wrap:pretty]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 border-t border-white/[0.10]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-6 text-center">
            The process
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-16">
            {[
              {
                num: "01",
                title: "Audit & baseline",
                desc: "We analyze your current funnel, identify leaks, and set benchmarks. You can't optimize what you don't measure.",
              },
              {
                num: "02",
                title: "Test at volume",
                desc: "We launch campaigns across multiple channels simultaneously. Dozens of creatives, audiences, and hooks — all tracked to the dollar.",
              },
              {
                num: "03",
                title: "Scale what works",
                desc: "Winners get budget. Losers get killed. We double down on what's converting and continuously optimize for lower CPA.",
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
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 pb-32 lg:py-32 border-t border-white/[0.10]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-4 [text-wrap:balance]">
            Ready to grow?
          </h2>
          <p className="text-sm text-white/60 mb-10 max-w-sm mx-auto leading-relaxed [text-wrap:pretty]">
            Whether you need ads, content, or a full growth strategy — we move fast and optimize relentlessly.
          </p>
          <Link to="/contact" className="btn-iridescent">
            <span>Let's talk growth</span>
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

export default Growth;
