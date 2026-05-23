import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (!feedback.message) return;

    const timer = window.setTimeout(() => {
      setFeedback({ type: "", message: "" });
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [feedback.message]);

  const emailJSKey = "jZugZtNFHWCDqBgC8";

  useEffect(() => {
    // Initialize EmailJS with your public key when the form loads.
    emailjs.init(emailJSKey);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setFeedback({
        type: "error",
        message: "Please complete all required fields before sending.",
      });
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return false;
    }

    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });

    const serviceID = "service_s2vt6kx";
    const templateID = "template_o9mbcey";
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      reply_to_name: formData.name,
      user_name: formData.name,
      user_email: formData.email,
      contact_name: formData.name,
      contact_email: formData.email,
      contact_message: formData.message,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      body: formData.message,
      to_email: "dharanitharan2080@gmail.com",
      to_name: "Dharanitharan",
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, emailJSKey);

      setFeedback({
        type: "success",
        message: "Message sent successfully! I’ll reply as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      const errorText = error?.text || error?.status || "Unexpected error.";
      setFeedback({
        type: "error",
        message: `EmailJS error: ${errorText}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="contact-form-card fade-up overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-900/90 shadow-[0_30px_90px_rgba(15,23,42,0.35)] transition duration-700">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.95fr]">
        <div className="space-y-6 px-8 py-10 sm:px-10">
          <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
            Let’s talk
          </span>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Send a message
            </h3>
            <p className="max-w-xl text-slate-300 leading-7">
              Share your project brief, timeline, or goals. I’ll follow up with
              a clear next step and timeline within one business day.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-300">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p className="text-[0.75rem] uppercase tracking-[0.24em] text-slate-500">
                Email
              </p>
              <a
                href="mailto:dharanitharan2080@gmail.com"
                className="mt-1 block text-base font-medium text-slate-100 transition hover:text-sky-300"
              >
                dharanitharan2080@gmail.com
              </a>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p className="text-[0.75rem] uppercase tracking-[0.24em] text-slate-500">
                Location
              </p>
              <p className="mt-1 text-base font-medium text-slate-100">
                Chennai, India
              </p>
            </div>
          </div>
        </div>

        <form
          className="space-y-5 rounded-[2rem] bg-slate-950/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-10"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-300">
                Name
              </span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-300">
                Email
              </span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-300">
              Message
            </span>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, users, or desired outcome."
              className="min-h-[170px] w-full rounded-[1.5rem] border border-slate-800/80 bg-slate-900/90 px-4 py-4 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 transition resize-none"
            />
          </label>

          {feedback.message && (
            <div
              className={`rounded-3xl px-4 py-3 text-sm font-medium ${
                feedback.type === "success"
                  ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/15"
                  : "bg-rose-500/10 text-rose-200 border border-rose-500/15"
              }`}
            >
              {feedback.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.24)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(56,189,248,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
