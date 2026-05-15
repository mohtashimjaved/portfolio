"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

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
        setStatus({ type: "success", message: "Thank you! Your message has been sent successfully. I'll get back to you soon." });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Oops! There was a problem sending your message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "hafizmohtashim3157@gmail.com", href: "mailto:hafizmohtashim3157@gmail.com" },
    { icon: Phone, title: "Phone", value: "+92 317 4159475", href: "tel:+923174159475" },
    { icon: MapPin, title: "Location", value: "Karachi, Pakistan", href: null },
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or looking for a Full Stack / React Native developer? Feel free to drop a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">{info.title}</p>
                        {info.href ? (
                          <a href={info.href} className="text-lg text-white font-semibold hover:text-accent transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg text-white font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="glass p-8 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent border-accent/20">
              <h4 className="text-xl font-bold text-white mb-2">Open for opportunities</h4>
              <p className="text-gray-300">I am currently available for freelance projects and full-time roles.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
              
              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                >
                  {status.message}
                </motion.div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
