import React from "react";
import { useContact } from "./ContactContext";
import { InputField } from "./InputFields";

export default function ContactForm() {
  const { formData, setFormData, status, setStatus } = useContact(); // Use context values

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
      } else {
        const data = await res.json();
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact" // Section with the ID for scrolling
      className="w-full bg-[var(--bg-primary)] py-16" // Set background color for the section
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col justify-center mx-auto bg-[var(--bg-primary)] rounded-md px-6 mb-0" // Adjust max width to 3xl
      >
        {status && (
          <div
            className={`p-3 mb-4 rounded-md ${status.startsWith("Your message") ? "text-green-800 bg-green-100" : "text-red-800 bg-red-100"}`}
          >
            {status}
          </div>
        )}

        <h2 className="text-[var(--primary)] text-2xl md:text-3xl font-bold mb-6 text-center relative">
          Contact Me
          {/* Thick underline */}
          <span className="absolute bottom-[-10px] left-0 right-0 mx-auto w-24 h-[5px] bg-[var(--primary)]"></span>
        </h2>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="text-[var(--text-primary)] bg-[var(--bg-secondary)] border-gray-300 border-[1px] focus:border-[var(--accent)] focus:outline-none w-full px-4 py-2 rounded-3xl focus:ring-2 focus:ring-[var(--accent)] mb-4"
          required
          rows="10"
        />

        {/* Name and Email Section */}
        <div className="flex gap-6 mb-4">
          {/* Name Input */}
          <div className="flex-1">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="text-[var(--text-primary)] bg-[var(--bg-secondary)] border-gray-300 border-[1px] focus:border-[var(--accent)] focus:outline-none w-full px-4 py-2.5 rounded-3xl focus:ring-2 focus:ring-[var(--accent)]"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="text-[var(--text-primary)] bg-[var(--bg-secondary)] border-gray-300 border-[1px] focus:border-[var(--accent)] focus:outline-none w-full px-4 py-2.5 rounded-3xl focus:ring-2 focus:ring-[var(--accent)]"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="text-[var(--text-primary)] bg-[var(--bg-secondary)] border-gray-300 border-[1px] focus:border-[var(--accent)] focus:outline-none w-full px-4 py-2.5 rounded-3xl focus:ring-2 focus:ring-[var(--accent)] mb-4"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "Sending..."}
          className="px-6 py-3 text-white bg-[var(--primary)] text-lg md:text-xl hover:bg-[var(--secondary)] focus:outline-none transition duration-300 rounded-4xl mx-auto"
        >
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
