import { Link } from "react-router-dom";
import whisperWordmark from "@/assets/whisper-wordmark.png";

const Whisper = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src={whisperWordmark} alt="Whisper" className="h-6 md:h-8" />
          <div className="flex items-center gap-6">
            <a href="mailto:support@whisper.io" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Support
            </a>
            <Link to="/whisper/privacy" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/whisper/terms" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-28 md:pt-32 px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground animate-fade-in-up">
            Your journal that speaks back to you.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mt-6 md:mt-8 max-w-xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
            Whisper learns you as you journal and delivers personalized guidance throughout your day.
          </p>
          
          <div className="mt-12 md:mt-14 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <a
              href="https://bit.ly/whisperjournal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on iOS
            </a>
          </div>
        </div>
        
        {/* iPhone Mockup */}
        <div className="relative z-10 mt-12 md:mt-16 w-full max-w-[280px] md:max-w-[380px] animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards', maxHeight: '40vh' }}>
          <div className="relative w-full aspect-[9/19] rounded-[40px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-[8px] shadow-2xl overflow-hidden">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-10" />
            <div className="w-full h-full rounded-[32px] bg-gradient-to-br from-[#1a1a3e] to-[#0a0a1a] overflow-hidden">
              <div className="p-6 pt-12 text-white">
                <h2 className="text-2xl font-light mb-2">Good morning</h2>
                <p className="text-white/60 text-sm">What's on your mind today?</p>
              </div>
            </div>
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Back to Studio Eight */}
      <div className="fixed bottom-6 left-6">
        <Link 
          to="/" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Studio Eight
        </Link>
      </div>
    </div>
  );
};

export default Whisper;
