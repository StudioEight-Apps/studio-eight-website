import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <>
      {/* Top bar — logo left, Miami right */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between pointer-events-none">
        <Link
          to="/"
          className="pointer-events-auto flex items-center gap-3 group"
        >
          <span className="text-[13px] md:text-[14px] font-semibold tracking-[0.25em] uppercase text-white/70 group-hover:text-white transition-colors">
            Studio Eight
          </span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium">
            Miami, FL
          </span>
        </div>
      </header>

      {/* Bottom nav — frosted glass pill */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full backdrop-blur-xl"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 4px 24px -4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          <NavLink
            to="/for-businesses"
            className="px-3 md:px-4 py-2 rounded-full text-[8px] md:text-[10px] tracking-[0.12em] uppercase text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium whitespace-nowrap"
            activeClassName="!text-white !bg-white/[0.12]"
          >
            Businesses
          </NavLink>
          <NavLink
            to="/for-creators"
            className="px-3 md:px-4 py-2 rounded-full text-[8px] md:text-[10px] tracking-[0.12em] uppercase text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium whitespace-nowrap"
            activeClassName="!text-white !bg-white/[0.12]"
          >
            Creators
          </NavLink>
          <NavLink
            to="/growth"
            className="px-3 md:px-4 py-2 rounded-full text-[8px] md:text-[10px] tracking-[0.12em] uppercase text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium whitespace-nowrap"
            activeClassName="!text-white !bg-white/[0.12]"
          >
            Growth
          </NavLink>
          <NavLink
            to="/our-apps"
            className="px-3 md:px-4 py-2 rounded-full text-[8px] md:text-[10px] tracking-[0.12em] uppercase text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium whitespace-nowrap"
            activeClassName="!text-white !bg-white/[0.12]"
          >
            In House
          </NavLink>
          <NavLink
            to="/contact"
            className="px-3 md:px-4 py-2 rounded-full text-[8px] md:text-[10px] tracking-[0.12em] uppercase text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium whitespace-nowrap"
            activeClassName="!text-white !bg-white/[0.12]"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
