import { Link } from "react-router-dom";
import basedIcon from "@/assets/based-icon.png";

const Based = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-5 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={basedIcon} alt="Based" className="w-8 h-8 rounded-lg" />
            <span className="text-[#0A0A0A] font-semibold text-lg tracking-tight">Based</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:support@studioeight.app" className="text-[#0A0A0A]/50 text-sm hover:text-[#0A0A0A] transition-colors hidden sm:block">
              Support
            </a>
            <Link to="/based/privacy" className="text-[#0A0A0A]/50 text-sm hover:text-[#0A0A0A] transition-colors hidden sm:block">
              Privacy
            </Link>
            <Link to="/based/terms" className="text-[#0A0A0A]/50 text-sm hover:text-[#0A0A0A] transition-colors hidden sm:block">
              Terms
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#2D6A2E] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#245823] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Back to Studio Eight */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="text-sm text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors">
          ← Studio Eight
        </Link>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-36 md:pt-44 pb-8 px-6">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#2D6A2E]/[0.03] rounded-full blur-[120px]" />
          <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#F5F5F0] rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2D6A2E]/15 bg-[#E8F5E8] mb-8">
            <span className="w-1.5 h-1.5 bg-[#2D6A2E] rounded-full" />
            <span className="text-[#2D6A2E] text-xs font-medium tracking-wide uppercase">Now on iOS</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-semibold leading-[1.1] tracking-tight text-[#0A0A0A]">
            Every nutrient.
            <br />
            One photo.
          </h1>

          <p className="text-lg md:text-xl text-[#555555] mt-6 md:mt-8 max-w-xl mx-auto leading-relaxed">
            Snap your meals. Watch 18 vitamin and mineral bars fill in real time. Get a daily grade. No manual logging — ever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-7 py-4 rounded-full text-base font-medium hover:bg-[#0A0A0A]/90 transition-all hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on iOS
            </a>
          </div>
        </div>

        {/* Phone Mockup - CSS-only */}
        <div className="relative z-10 mt-12 md:mt-16 flex justify-center">
          <div className="w-[280px] md:w-[300px] lg:w-[320px]">
            <div className="relative bg-[#0A0A0A] rounded-[3rem] p-3 shadow-2xl shadow-black/20">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#0A0A0A] rounded-b-2xl z-20" />
              {/* Screen */}
              <div className="bg-white rounded-[2.4rem] overflow-hidden aspect-[9/19.5] relative">
                {/* Status bar */}
                <div className="flex items-center justify-between px-8 pt-4 pb-2">
                  <span className="text-[10px] font-semibold text-[#0A0A0A]">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 flex gap-px items-end">
                      <div className="w-[3px] h-[4px] bg-[#0A0A0A] rounded-sm" />
                      <div className="w-[3px] h-[6px] bg-[#0A0A0A] rounded-sm" />
                      <div className="w-[3px] h-[8px] bg-[#0A0A0A] rounded-sm" />
                    </div>
                    <svg className="w-3 h-3 text-[#0A0A0A]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C7.8 3 3.7 4.4 1 7l2.3 2.3C5.5 7.5 8.6 6.3 12 6.3s6.5 1.2 8.7 3l2.3-2.3C20.3 4.4 16.2 3 12 3zm0 6.6c-2.7 0-5.2.9-7.1 2.5l2.3 2.3c1.3-1 2.9-1.5 4.8-1.5s3.5.5 4.8 1.5l2.3-2.3c-1.9-1.6-4.4-2.5-7.1-2.5zM12 15.3c-1.4 0-2.6.5-3.6 1.3L12 20l3.6-3.4c-1-.8-2.2-1.3-3.6-1.3z"/></svg>
                    <div className="w-5 h-2.5 border border-[#0A0A0A] rounded-sm relative">
                      <div className="absolute inset-[1.5px] right-[3px] bg-[#2D6A2E] rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Mock dashboard content */}
                <div className="px-5 pt-2">
                  <p className="text-[8px] text-[#999999]">TUESDAY, MAR 10</p>
                  <p className="text-[11px] font-semibold text-[#0A0A0A] mt-0.5">Good morning</p>

                  {/* Score card */}
                  <div className="mt-3 bg-[#F5F5F0] rounded-2xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[28px] font-bold text-[#2D6A2E] leading-none">72</p>
                        <p className="text-[7px] text-[#999999] mt-0.5">TODAY'S SCORE</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[14px] font-bold text-[#2D6A2E] bg-[#E8F5E8] px-2 py-0.5 rounded-lg">B+</span>
                        <span className="text-[10px]">🔥 8</span>
                      </div>
                    </div>
                  </div>

                  {/* Nutrient bars */}
                  <div className="mt-3 space-y-2">
                    {[
                      { name: "Protein", pct: 72, color: "#2D6A2E" },
                      { name: "Iron", pct: 45, color: "#F57C00" },
                      { name: "Vitamin C", pct: 88, color: "#2D6A2E" },
                      { name: "Omega-3", pct: 31, color: "#F57C00" },
                      { name: "Vitamin D", pct: 22, color: "#D32F2F" },
                      { name: "Magnesium", pct: 63, color: "#2D6A2E" },
                    ].map((n) => (
                      <div key={n.name}>
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-[7px] font-medium text-[#555555]">{n.name}</span>
                          <span className="text-[7px] font-mono text-[#999999]">{n.pct}%</span>
                        </div>
                        <div className="h-[4px] bg-[#F0F0ED] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${n.pct}%`, backgroundColor: n.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROP SECTION ===== */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D6A2E] mb-3">Real food. Real tracking.</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] tracking-tight">
              Everything your body needs,
              <br className="hidden md:block" />
              tracked intelligently.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                ),
                title: "Snap your meals",
                desc: "Take a photo. AI identifies every ingredient and calculates nutrient content instantly. No typing, no searching, no databases."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: "18 nutrient bars",
                desc: "Watch vitamins, minerals, and macros fill in real time. Get a daily score, letter grade, and streak. Weighted toward your weakest areas."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                ),
                title: "AI coaching",
                desc: "An AI coach that knows your levels, your history, and your goals — and tells you exactly which whole foods to eat to fix what's missing."
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E8] flex items-center justify-center text-[#2D6A2E] mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">{f.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D6A2E] mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] tracking-tight">
              Simple steps to better nutrition
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Photograph", desc: "Snap a photo of any meal. That's it." },
              { step: "02", title: "Analyze", desc: "AI identifies ingredients and calculates 18 nutrients instantly." },
              { step: "03", title: "Track", desc: "Watch your daily bars fill and your score climb with every meal." },
              { step: "04", title: "Optimize", desc: "Get personalized whole food suggestions to fill nutrient gaps." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="relative mx-auto mb-5">
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F0] border border-[#E5E5E0] flex items-center justify-center mx-auto">
                    <span className="text-sm font-semibold text-[#2D6A2E]">{s.step}</span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[#0A0A0A] mb-2">{s.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS / SOCIAL PROOF ===== */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F5F0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] tracking-tight">
              The problem is bigger than you think.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "94%", desc: "of adults are deficient in at least one essential nutrient.", color: "#D32F2F" },
              { stat: "$56B", desc: "spent on supplements yearly — most with fillers and additives.", color: "#F57C00" },
              { stat: "80%", desc: "of supplement users still have the same deficiencies.", color: "#F57C00" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <p className="text-4xl font-bold mb-3" style={{ color: s.color }}>{s.stat}</p>
                <p className="text-sm text-[#555555] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl px-8 py-5 border border-[#2D6A2E]/10">
              <p className="text-[#0A0A0A] font-medium">
                Every gap can be fixed with real food. <span className="text-[#2D6A2E]">No pills. No powders.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D6A2E] mb-3">What people are saying</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] tracking-tight">
              Real results from real food.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Based showed me what to eat — I sleep better and haven't bought a supplement in 3 months.",
                name: "Sarah K.",
                age: "31",
              },
              {
                quote: "The daily grade is addicting. I actually look forward to logging meals now.",
                name: "James R.",
                age: "27",
              },
            ].map((t, i) => (
              <div key={i} className="bg-[#F5F5F0] rounded-2xl p-8 border border-black/[0.04]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#F57C00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0A0A0A] text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
                <p className="text-xs font-mono text-[#999999]">{t.name}, {t.age}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ANTI-SUPPLEMENT MANIFESTO ===== */}
      <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <img src={basedIcon} alt="Based" className="w-16 h-16 rounded-2xl mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
            Eat what you were meant to.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Everything your body needs has been here for thousands of years — just like humans. No supplements. No powders. No pills. Just real food, tracked intelligently.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#2D6A2E] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#3A8C3B] transition-all hover:scale-[1.02]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Start Free Trial
          </a>
          <p className="text-sm text-white/40 mt-4">3-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 bg-white border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={basedIcon} alt="Based" className="w-6 h-6 rounded-md" />
            <span className="text-sm text-[#999999]">Based by Studio Eight</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:support@studioeight.app" className="text-xs text-[#999999] hover:text-[#0A0A0A] transition-colors">Support</a>
            <Link to="/based/privacy" className="text-xs text-[#999999] hover:text-[#0A0A0A] transition-colors">Privacy</Link>
            <Link to="/based/terms" className="text-xs text-[#999999] hover:text-[#0A0A0A] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Based;
