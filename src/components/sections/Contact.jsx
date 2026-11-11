import { useState } from "react";
import emailjs from "@emailjs/browser";
import { m } from "framer-motion";
import { Send, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { LiquidHeading } from "../ui/LiquidHeading";
import { profile } from "@/portfolio";

export function Contact() {
  const [notice, setNotice] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    setNotice("");
    setHasError(false);

    if (!serviceId || !templateId || !publicKey) {
      setHasError(true);
      setNotice(
        "Email service is not configured yet. Please use the Email button above.",
      );
      return;
    }

    setIsSending(true);

    try {
      // Form field names match {{name}}, {{email}}, {{subject}}, {{message}} in EmailJS.
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setNotice(
        "Your message has been sent successfully. Thank you for getting in touch!",
      );
    } catch {
      setHasError(true);
      setNotice(
        "Your message could not be sent. Please try again or use the Email button above.",
      );
    } finally {
      setIsSending(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all placeholder:text-muted-foreground/70";

  return (
    <section id="contact" className="py-20">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-primary">GET IN TOUCH</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            <LiquidHeading as="span">Let's Work Together</LiquidHeading>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Send me a message.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm text-primary border border-primary/20 bg-card/70 rounded-full px-4 py-2"
          >
            <Mail size={16} /> Email <ArrowUpRight size={14} />
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-primary border border-primary/20 bg-card/70 rounded-full px-4 py-2"
          >
            <MessageSquare size={16} /> WhatsApp <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="rounded-xl border border-border bg-card/70 backdrop-blur-sm shadow-xl shadow-primary/5 p-6 md:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-busy={isSending}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block text-sm font-medium space-y-2">
                <span>Name</span>
                <input
                  className={inputClass}
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  maxLength={120}
                />
              </label>
              <label className="block text-sm font-medium space-y-2">
                <span>Email</span>
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  maxLength={200}
                />
              </label>
            </div>
            <label className="block text-sm font-medium space-y-2">
              <span>Subject</span>
              <input
                className={inputClass}
                name="subject"
                placeholder="Project inquiry"
                required
                maxLength={200}
              />
            </label>
            <label className="block text-sm font-medium space-y-2">
              <span>Message</span>
              <textarea
                className={`${inputClass} min-h-36 resize-y`}
                name="message"
                rows={6}
                placeholder="Tell me about your project…"
                required
                maxLength={4000}
              />
            </label>
            <m.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-medium disabled:opacity-60 disabled:cursor-wait"
            >
              <Send size={17} /> {isSending ? "Sending…" : "Send message"}
            </m.button>
            <p className="text-xs text-muted-foreground">
              Your message will be sent directly to my inbox.
            </p>
            <p
              role="status"
              className={`text-sm ${hasError ? "text-destructive" : "text-primary"}`}
            >
              {notice}
            </p>
          </form>
        </div>
      </m.div>
    </section>
  );
}
