import React from "react";
import { useContact } from "./ContactContext";

// Statusmelding-komponent
const StatusMessage = ({ status }) => {
  if (!status) return null;
  const success = status.startsWith("Your message");
  return (
    <div
      className={`p-3 rounded-md mb-4 ${
        success ? "text-green-800 bg-green-100" : "text-red-800 bg-red-100"
      }`}
    >
      {status}
    </div>
  );
};

// Gjenbrukbart input/textarea-felt
export const InputField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  children,
  className = "",
}) => {
  const InputComponent = type === "textarea" ? "textarea" : "input";
  return (
    <div className="w-full mb-4">
      {children && (
        <label
          htmlFor={name}
          className="block font-semibold mb-2 text-[var(--text-primary)]"
        >
          {children}
        </label>
      )}
      <InputComponent
        type={type === "textarea" ? undefined : type}
        name={name}
        id={name}
        className={`text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-gray-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] w-full px-4 py-3 rounded-3xl resize-none ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={type === "textarea" ? 6 : undefined}
      />
    </div>
  );
};

export default function ContactForm({ headerHeight = 64 }) {
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
    <section
      id="contact"
      className="px-4 py-20 md:px-12"
      style={{ scrollMarginTop: headerHeight }} // Viktig for fixed header
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-10 text-[var(--text-primary)] text-center relative font-helvetica">
          Contact Me
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        {/* Statusmelding */}
        <StatusMessage status={status} />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            name="message"
            type="textarea"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          >
            Message
          </InputField>

          <div className="flex flex-col gap-4 md:flex-row">
            <InputField
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            >
              Name
            </InputField>

            <InputField
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            >
              Email
            </InputField>
          </div>

          <InputField
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          >
            Subject
          </InputField>

          <button
            type="submit"
            disabled={status === "Sending..."}
            className="bg-[var(--primary)] text-white text-body py-3 px-8 rounded-4xl hover:bg-[var(--secondary)] transition duration-300 mx-auto mt-4 flex items-center justify-center gap-2"
          >
            {status === "Sending..." && (
              <span className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></span>
            )}
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
