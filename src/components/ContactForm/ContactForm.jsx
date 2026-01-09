import React from "react";
import { useContact } from "./ContactContext";

export default function ContactForm() {
  const { formData, setFormData, status, setStatus } = useContact();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto flex flex-col justify-center gap-4"
      >
        {status && (
          <div
            className={`p-3 rounded-md ${
              status.startsWith("Your message")
                ? "text-green-800 bg-green-100"
                : "text-red-800 bg-red-100"
            }`}
          >
            {status}
          </div>
        )}

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-medium mb-10 text-[var(--text-primary)] text-center relative font-helvetica">
          Contact Me
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="text-body font-helvetica bg-[var(--bg-secondary)] border border-gray-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] w-full px-4 py-3 rounded-3xl resize-none"
          required
          rows="6"
        />

        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="text-body font-helvetica bg-[var(--bg-secondary)] border border-gray-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] w-full px-4 py-3 rounded-3xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="text-body font-helvetica bg-[var(--bg-secondary)] border border-gray-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] w-full px-4 py-3 rounded-3xl"
            required
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="text-body font-helvetica bg-[var(--bg-secondary)] border border-gray-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] w-full px-4 py-3 rounded-3xl"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "Sending..."}
          className="bg-[var(--primary)] text-white text-body py-3 px-8 rounded-4xl hover:bg-[var(--secondary)] transition duration-300 mx-auto mt-4"
        >
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
