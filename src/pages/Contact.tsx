import { useState } from "react";
import Header from "@/components/Header";
import AnimatedBg from "@/components/AnimatedBg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    twitter: "",
    instagram: "",
    pitch: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mlewis@chreteam.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Studio Eight — ${formData.name} (${formData.company || "No company"})`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          twitter: "",
          instagram: "",
          pitch: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b border-white/[0.18] py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white/60 transition-colors";

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBg />
      <Header />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 pb-32">
        <div className="w-full max-w-md">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/50 mb-6 text-center">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-2 [text-wrap:balance]">
            Let's work.
          </h1>
          <p className="text-sm text-white/60 text-center mb-14 [text-wrap:pretty]">
            Tell us about your project.
          </p>

          {status === "success" ? (
            <div className="text-center py-12">
              <p className="text-lg font-semibold text-white mb-2">Sent.</p>
              <p className="text-sm text-white/50">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <input
                name="website"
                type="url"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className={inputClasses}
              />

              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <input
                    name="twitter"
                    type="text"
                    placeholder="X handle"
                    value={formData.twitter}
                    onChange={handleChange}
                    className={`${inputClasses} pl-6`}
                  />
                </div>
                <div className="relative">
                  <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <input
                    name="instagram"
                    type="text"
                    placeholder="IG handle"
                    value={formData.instagram}
                    onChange={handleChange}
                    className={`${inputClasses} pl-6`}
                  />
                </div>
              </div>

              <textarea
                name="pitch"
                required
                rows={4}
                placeholder="Tell us about your project *"
                value={formData.pitch}
                onChange={handleChange}
                className={`${inputClasses} resize-none border border-white/[0.12] rounded-lg p-4 mt-2`}
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-iridescent mt-4 w-full justify-center"
              >
                <span>{status === "submitting" ? "Sending..." : "Send message"}</span>
              </button>

              {status === "error" && (
                <p className="text-red-400/80 text-xs text-center">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
