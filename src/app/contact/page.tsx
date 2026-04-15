'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactBlock from '@/components/sections/ContactBlock';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { GROUP, BRANDS } from '@/config/brands';
import { getPhoneHref, getEmailHref } from '@/lib/utils';

const subsidiaryOptions = [
  { value: '', label: 'Select a department...' },
  { value: 'general', label: 'General Enquiry' },
  { value: 'finex-money', label: 'Finex Money Support' },
  { value: 'finexflow', label: 'FINEXflow' },
  { value: 'imali-remit', label: 'iMali Remit Support' },
  { value: 'imali-forex', label: 'iMali Forex' },
  { value: 'treasury', label: 'Finex SA Treasury' },
  { value: 'global', label: 'Finex SA Global' },
  { value: 'technology', label: 'Finex Technologies' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subsidiary: '',
    message: '',
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <HeroSection
        variant="image-background"
        eyebrow="Contact Us"
        headline={
          <>
            <span className="italic font-light">We Are</span> <span className="font-extrabold">Right Where</span><br />
            <span className="font-light">You Need Us.</span>
          </>
        }
        body={
          <>
            Our dedicated digital teams and call centre consultants are ready to provide <span className="font-bold text-white">telephonic solutions</span> and guide you through our processes.
          </>
        }
        heroImage="/images/lifestyle/finex-money-man-card-phone.webp"
        heroImageAlt="Customer service"
      />

      {/* Contact Information Grid */}
      <section className="section-padding section-purple-navy">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Group Contact */}
            <ScrollReveal delay={0}>
              <ContactBlock
                title="Group & Corporate Enquiries"
                phone={GROUP.phone[0]}
                email={GROUP.email}
                address={GROUP.address}
              />
            </ScrollReveal>

            {/* Finex Money */}
            <ScrollReveal delay={0.1}>
              <ContactBlock
                title="Finex Money Support"
                phone={BRANDS.finexMoney.support.phone}
                email={BRANDS.finexMoney.support.email}
              />
            </ScrollReveal>

            {/* FINEXflow */}
            <ScrollReveal delay={0.2}>
              <ContactBlock
                title="FINEXflow"
                description="Book a demonstration and see FINEXFlow working with your own workforce data."
                email={BRANDS.finexflow.support.email || 'Contact via website'}
              />
            </ScrollReveal>

            {/* iMali Remit */}
            <ScrollReveal delay={0.3}>
              <ContactBlock
                title="iMali Remit App Support"
                phone={BRANDS.imaliRemit.support.phone}
                email={BRANDS.imaliRemit.support.email}
              />
            </ScrollReveal>

            {/* Treasury */}
            <ScrollReveal delay={0.4}>
              <ContactBlock
                title="Finex SA Treasury"
                phone={BRANDS.treasury.support.phone}
                email={BRANDS.treasury.support.email}
              />
            </ScrollReveal>

            {/* Second Group Number */}
            <ScrollReveal delay={0.5}>
              <div className="card-warm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Alternative Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href={getPhoneHref(GROUP.phone[1])}
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>{GROUP.phone[1]}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding section-light-cool">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="mb-4">Send Us a Message</h2>
                <p className="text-[var(--color-text-secondary)]">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[var(--color-success-light)] border border-[var(--color-success-border)] text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success-mid)] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-[var(--color-success)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-success-text)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--color-success-text-light)]">
                    Thank you for contacting us. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
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
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
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
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subsidiary"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Department
                    </label>
                    <select
                      id="subsidiary"
                      name="subsidiary"
                      required
                      value={formData.subsidiary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all"
                    >
                      {subsidiaryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
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
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-full bg-[var(--brand-primary)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Sending...'
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

      {/* Map Section */}
      <section className="section-padding section-cyan-navy">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-white mb-4">Visit Our Head Office</h2>
              <p className="text-white/80">{GROUP.address}</p>
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
