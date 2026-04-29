"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import ContactBlock from "@/components/sections/ContactBlock";
import { GROUP, BRANDS } from "@/config/brands";
import { getPhoneHref } from "@/lib/utils";

const subsidiaryOptions = [
  { value: "", label: "Select a department..." },
  { value: "general", label: "General Enquiry" },
  { value: "finex-money", label: "Finex Money Support" },
  { value: "finexflow", label: "FINEXflow" },
  { value: "imali-remit", label: "iMali Remit Support" },
  { value: "imali-forex", label: "iMali Forex" },
  { value: "treasury", label: "Finex SA Treasury" },
  { value: "global", label: "Finex SA Global" },
  { value: "technology", label: "Finex Technologies" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subsidiary: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production, connect to your form handler
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* =============================================
          HERO: dark gradient with cyan accent
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[75vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[#0a1525] to-[var(--color-black)]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-cyan)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-navy)]/40 to-transparent" />
        </div>

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <Image
                src="/images/logos/finexsa-group-logo-only-no-text.png"
                alt="Finex SA Group"
                width={200}
                height={200}
                className="h-16 md:h-20 w-auto mx-auto mb-10"
                priority
              />
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                Contact Us
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">We Are</span>{" "}
                <span className="font-extrabold">Right Where</span>
                <br />
                <span className="font-light">You Need Us.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Our dedicated digital teams and call centre consultants are
                ready to provide{" "}
                <span className="font-bold text-white">
                  telephonic solutions
                </span>{" "}
                and guide you through our processes.
              </p>
              <CTAButton
                label="Send Us a Message"
                href="#contact-form"
                variant="white"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          ATMOSPHERIC BREAK: lifestyle image + left overlay
          ============================================= */}
      <section className="relative flex items-center min-h-[75vh] overflow-hidden">
        <Image
          src="/images/lifestyle/finex-money-man-card-phone.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, transparent 0%, rgba(10, 15, 30, 0.5) 50%, rgba(10, 15, 30, 0.95) 100%)",
          }}
        />
        <div className="container-max relative z-10">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <h2 className="text-white mb-4">
              <span className="italic font-light">Speak to a</span>{" "}
              <span className="font-extrabold">real person.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Whether you need support with your{" "}
              <span className="font-bold text-white">Finex Money wallet</span>,
              want to discuss{" "}
              <span className="font-bold text-white">
                treasury solutions
              </span>
              , or explore{" "}
              <span className="font-bold text-white">
                payroll disbursement
              </span>{" "}
              for your workforce, our team is a call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getPhoneHref(GROUP.phone[0])}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {GROUP.phone[0]}
              </a>
              <a
                href={getPhoneHref(GROUP.phone[1])}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {GROUP.phone[1]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 1: CONTACT CARDS — split image LEFT + cards RIGHT
          ============================================= */}
      <section className="section-padding section-dark-warm relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal
              type="slide"
              direction="left"
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/heroes/guy-in-coffee-shop.jpg"
                  alt="Get in touch with Finex SA Group"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Direct</span>{" "}
                <span className="font-extrabold text-[var(--color-cyan)]">
                  Lines.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Reach the right team,{" "}
                <span className="font-bold text-white">first time</span>.
              </p>
              <div className="space-y-4">
                <ContactBlock
                  title="Group & Corporate Enquiries"
                  phone={GROUP.phone[0]}
                  email={GROUP.email}
                  address={GROUP.address}
                />
                <ContactBlock
                  title="Finex Money Support"
                  phone={BRANDS.finexMoney.support.phone}
                  email={BRANDS.finexMoney.support.email}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 2: MORE CONTACTS — full-bleed bg + glass cards
          ============================================= */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/backgrounds/Premium_advertising_sunset.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 71, 97, 0.88) 0%, rgba(10, 10, 20, 0.8) 50%, rgba(137, 40, 144, 0.85) 100%)",
          }}
        />
        <div className="container-max relative z-10 py-20 md:py-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-4">
                Subsidiary Support
              </p>
              <h2 className="text-white mb-4">
                <span className="italic font-light">Every brand,</span>{" "}
                <span className="font-extrabold">one group.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                Each subsidiary has its own{" "}
                <span className="font-bold text-white">dedicated team</span>{" "}
                ready to assist you.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                {
                  title: "iMali Remit App Support",
                  phone: BRANDS.imaliRemit.support.phone,
                  email: BRANDS.imaliRemit.support.email,
                },
                {
                  title: "Finex SA Treasury",
                  phone: BRANDS.treasury.support.phone,
                  email: BRANDS.treasury.support.email,
                },
                {
                  title: "FINEXflow",
                  description:
                    "Book a demonstration and see FINEXflow working with your own workforce data.",
                  email:
                    BRANDS.finexflow.support.email || "Contact via website",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/10 text-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/20 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-[var(--color-cyan)]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {card.title}
                  </h4>
                  {card.description && (
                    <p className="text-sm text-white/80 mb-3">
                      {card.description}
                    </p>
                  )}
                  <div className="space-y-2 text-sm">
                    {card.phone && (
                      <a
                        href={getPhoneHref(card.phone)}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>{card.phone}</span>
                      </a>
                    )}
                    {card.email && (
                      <a
                        href={`mailto:${card.email}`}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        <span>{card.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          SECTION 3: CONTACT FORM — dark section
          ============================================= */}
      <section
        id="contact-form"
        className="section-padding section-dark-warm relative overflow-hidden min-h-[80vh] flex items-center"
      >
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <ScrollReveal
              type="slide"
              direction="right"
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/backgrounds/finexflow-collaborative.jpeg"
                  alt="Get in touch with our team"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Send us a</span>{" "}
                <span className="font-extrabold text-[var(--color-cyan)]">
                  message.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Fill out the form and we will get back to you as soon as
                possible.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-cyan)]/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-[var(--color-cyan)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/80">
                    Thank you for contacting us. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/90 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/90 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subsidiary"
                      className="block text-sm font-medium text-white/90 mb-2"
                    >
                      Department
                    </label>
                    <select
                      id="subsidiary"
                      name="subsidiary"
                      required
                      value={formData.subsidiary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all"
                    >
                      {subsidiaryOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-[#1a1a2e] text-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/90 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-full bg-[var(--color-cyan)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 4: MAP — full-bleed dark with map embed
          ============================================= */}
      <section className="relative section-padding overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[#0a1525] to-[var(--color-black)]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-cyan)]/20 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
                Head Office
              </p>
              <h2 className="text-white mb-3">
                <span className="italic font-light">Visit us in</span>{" "}
                <span className="font-extrabold">Paarl.</span>
              </h2>
              <p className="text-white/85 text-base mb-2 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {GROUP.address}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-white/20 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.1234567890123!2d18.9567!3d-33.7234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzI0LjQiUyAxOMKwNTcnMjQuMSJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                width="100%"
                height="100%"
                className="embed-borderless"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Finex SA Group Head Office Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
