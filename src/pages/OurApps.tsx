import { Link } from "react-router-dom";
import Header from "@/components/Header";
import AnimatedBg from "@/components/AnimatedBg";
import whisperIcon from "@/assets/whisper-icon.png";
import basedIcon from "@/assets/based-icon.png";
import checkupIcon from "@/assets/checkup-icon.png";

const OurApps = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBg />
      <Header />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-8">
          In House
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white text-center leading-[0.95] mb-4 [text-wrap:balance]">
          We build our own.
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-md text-center leading-relaxed mb-16 md:mb-20 [text-wrap:pretty]">
          Subscription apps we design, build, and operate from Miami. Every product in our portfolio solves a real problem we care about.
        </p>

        {/* App cards */}
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {/* Whisper */}
          <Link
            to="/whisper"
            className="group border border-white/[0.10] rounded-2xl p-6 md:p-8 hover:border-white/[0.18] transition-all bg-white/[0.03] hover:bg-white/[0.06]"
          >
            <div className="flex items-start gap-5">
              <img
                src={whisperIcon}
                alt="Whisper"
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base md:text-lg font-semibold text-white tracking-[0.1em]">
                    WHISPER
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase text-green-400">
                    <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                    Live on iOS
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  AI journaling that learns your voice and speaks back to you
                  throughout the day. Write how you feel — Whisper listens,
                  reflects, and delivers personalized insights through 4 distinct
                  AI personalities that evolve as you write.
                </p>
              </div>
              <svg
                className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>

          {/* Based */}
          <Link
            to="/based"
            className="group border border-white/[0.10] rounded-2xl p-6 md:p-8 hover:border-white/[0.18] transition-all bg-white/[0.03] hover:bg-white/[0.06]"
          >
            <div className="flex items-start gap-5">
              <img
                src={basedIcon}
                alt="Based"
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base md:text-lg font-semibold text-white tracking-[0.1em]">
                    BASED
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase text-green-400">
                    <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                    Live on iOS
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Photograph your meals and instantly track 18 essential vitamins
                  and minerals — no manual logging, no barcode scanning. Visual
                  nutrient bars show exactly where you're falling short so you
                  can fix gaps with real food, not supplements.
                </p>
              </div>
              <svg
                className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>

          {/* Checkup — exited */}
          <div className="border border-white/[0.06] rounded-2xl p-6 md:p-8 opacity-45">
            <div className="flex items-start gap-5">
              <img
                src={checkupIcon}
                alt="Checkup"
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl shrink-0 grayscale"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base md:text-lg font-semibold text-white tracking-[0.1em]">
                    CHECKUP
                  </h3>
                  <span className="text-[9px] tracking-[0.15em] uppercase text-white/50">
                    Exited
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Head-to-head skill-based gaming with real money on the line.
                  Challenge friends or ranked opponents in 1v1 wagers across
                  console titles with Stripe-powered escrow and instant payouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurApps;
