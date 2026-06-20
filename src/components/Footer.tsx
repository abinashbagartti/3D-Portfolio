import { useState, FormEvent } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, CheckCircle } from "lucide-react";
import { FadeIn } from "./MotionWrappers";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setMessage("");
      }, 5000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] font-kanit text-[#D7E2EA] px-6 md:px-10 py-16 sm:py-24 border-t border-[#D7E2EA]/10 overflow-hidden w-full select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-start">
          {/* Left Block */}
          <div className="flex flex-col gap-5">
            <FadeIn delay={0} y={30}>
              <h2 className="hero-heading text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
                Let&apos;s Craft
              </h2>
              <p className="font-light text-[#D7E2EA]/70 mt-3 text-sm sm:text-base leading-relaxed max-w-md">
                Have a striking project idea, visual branding proposal, or want to explore high-fidelity 3D modeling renders? Shoot details over directly!
              </p>
            </FadeIn>

            {/* Direct Channels */}
            <div className="flex flex-col gap-3 mt-4 text-xs sm:text-sm font-mono tracking-widest text-[#D7E2EA]/65 uppercase">
              <FadeIn delay={0.1} y={20} className="flex items-center gap-2">
                <Mail size={16} className="text-[#B600A8]" />
                <a href="mailto:jack@3dcreator.com" className="hover:text-white transition-colors">
                  jack@3dcreator.com
                </a>
              </FadeIn>
              <FadeIn delay={0.15} y={20} className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for contract roles &amp; freelance assignments
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div>
            <FadeIn delay={0.2} y={30}>
              <div className="rounded-3xl border border-[#D7E2EA]/10 p-5 sm:p-6 bg-[#FFFFFF]/[0.02] backdrop-blur-md shadow-xl">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
                    <CheckCircle className="text-green-500 w-12 h-12 animate-bounce" />
                    <h3 className="font-bold text-lg uppercase tracking-wider text-[#D7E2EA]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs text-[#D7E2EA]/60 max-w-xs font-light">
                      Jack is processing your details and will follow up within 24 hours. Let&apos;s build awesome creations!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 font-mono">
                        Contact Address / Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#D7E2EA]/10 bg-[#0C0C0C] text-[#D7E2EA] font-light placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8]/80 text-sm transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 font-mono">
                        Brief Outline / Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your design specifications..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#D7E2EA]/10 bg-[#0C0C0C] text-[#D7E2EA] font-light placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8]/80 text-sm transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] rounded-xl font-bold uppercase tracking-widest text-xs cursor-pointer select-none border border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-white flex items-center justify-center gap-1.5"
                    >
                      Transmit Proposal
                      <ArrowUpRight size={15} />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Lower row */}
        <div className="border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-[#D7E2EA]/50">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D7E2EA] transition-colors flex items-center gap-1"
            >
              <Github size={14} /> GITHUB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D7E2EA] transition-colors flex items-center gap-1"
            >
              <Linkedin size={14} /> LINKEDIN
            </a>
          </div>

          <p className="text-center sm:text-right uppercase">
            &copy; {new Date().getFullYear()} JACK. ALL DIGITAL RIGHTS PRESERVED.
          </p>

          <button
            onClick={handleScrollToTop}
            className="text-xs uppercase hover:text-white transition-colors cursor-pointer select-none py-1 px-3 rounded-full border border-white/10 hover:border-white/30"
          >
            TOP &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
