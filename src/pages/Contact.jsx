import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    console.log(form);
  }

  return (
    <section className="py-24 max-w-lg">
      <h2 className="text-3xl font-semibold mb-8">Let’s Connect</h2>

      <form onSubmit={handleSubmit} className="space-y-5 glass p-6 rounded-2xl">
        {error && <p className="text-red-400 text-sm">{error}</p>}

        {["name", "email"].map(field => (
          <input
            key={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full p-3 rounded bg-bg border border-white/10 focus:border-accent outline-none transition"
            value={form[field]}
            onChange={e => setForm({ ...form, [field]: e.target.value })}
          />
        ))}

        <textarea
          placeholder="Message"
          className="w-full p-3 rounded bg-bg border border-white/10 focus:border-accent outline-none transition h-32"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <button className="w-full bg-accent py-3 rounded font-medium hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
