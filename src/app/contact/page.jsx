"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check, Copy, Clock, MessageSquare, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState("");

  // Live Karachi Local Time Clock (GMT+5)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/meeqwvwk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#818cf8", "#ffffff"],
        });
        setStatus({
          type: "success",
          message: "Message dispatched successfully! I will respond to your email within 24 hours.",
        });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message directly. Please contact via email or phone.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error occurred. Please verify your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText("hafizmohtashim3157@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Direct Email",
      value: "hafizmohtashim3157@gmail.com",
      href: "mailto:hafizmohtashim3157@gmail.com",
    },
    {
      icon: Phone,
      title: "Telephone / WhatsApp",
      value: "+92 317 4159475",
      href: "tel:+923174159475",
    },
    {
      icon: MapPin,
      title: "Location Base",
      value: "Karachi, Pakistan (GMT+5)",
      href: null,
    },
  ];

  return (
    <section className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden bg-[#060913] cosmic-grid-bg">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl space-y-8 sm:space-y-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-[11px] sm:text-xs uppercase tracking-wider">
            <Sparkles size={13} className="text-sky-400" />
            Initiate Collaboration
          </span>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Get In <span className="text-glow-accent">Touch</span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Interested in collaboration, contract engagements, or hiring? Send an inquiry directly.
          </p>
        </motion.div>

        {/* Karachi Time Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl glass-panel border border-sky-500/20 text-sm shadow-[0_0_20px_rgba(14,165,233,0.08)]">
          <div className="flex items-center gap-3 text-slate-200">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Clock size={17} />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider">Local Time (Karachi):</span>
              <p className="text-xs sm:text-sm font-semibold font-mono text-sky-300">{localTime || "GMT+5"}</p>
            </div>
          </div>

          <button
            onClick={copyEmail}
            className="w-full sm:w-auto px-3.5 sm:px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/25 text-sky-300 text-[11px] sm:text-xs font-mono hover:bg-sky-400 hover:text-black transition-all flex items-center justify-center gap-2 shadow-sm font-semibold truncate"
          >
            {copiedEmail ? <Check size={13} className="text-emerald-400 shrink-0" /> : <Copy size={13} className="shrink-0" />}
            <span className="truncate">{copiedEmail ? "Email Copied!" : "Copy: hafizmohtashim3157@gmail.com"}</span>
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-sky-500/15 space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-bold font-heading text-white flex items-center gap-2">
                <MessageSquare size={17} className="text-sky-400" /> Direct Channels
              </h3>

              <div className="space-y-3.5 sm:space-y-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 sm:gap-3.5 group">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-black transition-all shrink-0">
                        <Icon size={17} />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                          {info.title}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-xs sm:text-sm text-white font-medium hover:text-sky-300 transition-colors block truncate"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-white font-medium truncate">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                <span>Open for Technical Opportunities</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Available for full-time engineering roles, freelance contracts, and cross-platform mobile architectures.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/15 space-y-4">
              <h3 className="text-lg font-bold font-heading text-white">
                Dispatch an Inquiry
              </h3>

              {status.message && (
                <div
                  className={`p-3 rounded-xl text-xs font-mono ${
                    status.type === "success"
                      ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/25"
                      : "bg-rose-500/10 text-rose-300 border border-rose-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Vance"
                  className="w-full bg-[#080d1a] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-mono"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full bg-[#080d1a] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-mono"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300">
                  Project or Inquiries Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Briefly describe your objectives, requirements, and timeline..."
                  className="w-full bg-[#080d1a] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none font-mono"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-black font-bold font-heading py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50 text-xs shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
