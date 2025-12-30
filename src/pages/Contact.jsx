import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formspree.io/f/meeqwvwk",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 4000);
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-xl">
            Feel free to reach out for collaborations or freelance work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="New Contact Message" />

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                name="name"
                required
                className="w-full h-12 px-4 rounded-xl bg-[#27272c] text-white
                outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full h-12 px-4 rounded-xl bg-[#27272c] text-white
                outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#27272c] text-white
                outline-none resize-none focus:ring-2 focus:ring-accent"
                placeholder="Write Your Message ..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-12 px-8 rounded-xl bg-accent text-black
              font-medium transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-10"
          >
            <Info icon={<Phone />} label="Phone" value="+92 317 4159475" />
            <Info
              icon={<Mail />}
              label="Email"
              value="hafizmohtashim3157@gmail.com"
            />
            <Info
              icon={<MapPin />}
              label="Address"
              value="Karachi, Pakistan"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-xl bg-[#27272c]
      flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-white font-medium break-all">{value}</p>
      </div>
    </div>
  );
}
