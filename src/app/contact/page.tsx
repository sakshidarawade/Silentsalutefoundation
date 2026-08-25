'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Contact Form:', formData);

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="bg-secondary">

      {/* HERO SECTION */}

      <section
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
        style={{
          background:
            'linear-gradient(135deg, #041e2e 0%, #08111A 55%, #0D1B2A 100%)',
        }}
      >
        {/* BACKGROUND GLOW */}

        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at 82% 45%, rgba(214,166,76,0.45) 0%, rgba(214,166,76,0.15) 25%, transparent 55%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">

          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.3em] text-[#d6a64c] sm:text-[0.88rem]">
            WE&apos;RE HERE TO HELP
          </p>

          <h1
            className="mb-5 leading-[1.1] text-white"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
            }}
          >
            Get In Touch With Us
          </h1>

          {/* SIMPLE GOLD LINE */}

          <div className="mx-auto mb-7 h-[2px] w-[76px] bg-[#d6a64c]" />

          <p className="mx-auto max-w-2xl text-[1rem] leading-[1.8] text-white/70 sm:text-[1.05rem]">
            Have a question, suggestion, or want to collaborate?
            <br />
            We&apos;d love to hear from you.
          </p>

        </div>
      </section>


      {/* CONTACT SECTION */}

      <section className="bg-secondary py-16 lg:py-20">

        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">

            {/* SEND MESSAGE */}

            <div className="rounded-2xl border border-border bg-white p-6 shadow-xl sm:p-8">

              {submitted ? (

                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#d6a64c]/10">

                    <Icon
                      name="CheckCircleIcon"
                      size={42}
                      className="text-[#d6a64c]"
                    />

                  </div>

                  <h2
                    className="mb-4 text-3xl text-foreground"
                    style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontWeight: 700,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    Message Sent!
                  </h2>

                  <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
                    Thank you for reaching out to Silent Salute.
                    Our team will get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center rounded-lg bg-[#d6a64c] px-6 py-3 font-semibold text-[#041e2e] transition-all duration-300 hover:bg-[#c6943b]"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit}>

                  {/* FORM HEADER */}

                  <div className="mb-7 flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#041e2e]">

                      <Icon
                        name="EnvelopeIcon"
                        size={22}
                        className="text-[#d6a64c]"
                      />

                    </div>

                    <div>

                      <h2
                        className="text-2xl text-foreground sm:text-3xl"
                        style={{
                          fontFamily:
                            'Cormorant Garamond, Georgia, serif',
                          fontWeight: 700,
                          letterSpacing: '-0.015em',
                        }}
                      >
                        Send Us a Message
                      </h2>

                      <div className="mt-3 h-[2px] w-12 bg-[#d6a64c]" />

                    </div>

                  </div>


                  <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
                    Fill in the form below and we will get back to you as soon
                    as possible.
                  </p>


                  {/* NAME + EMAIL */}

                  <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Full Name{' '}
                        <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-[#d6a64c] focus:ring-2 focus:ring-[#d6a64c]/15"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Email Address{' '}
                        <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-[#d6a64c] focus:ring-2 focus:ring-[#d6a64c]/15"
                      />

                    </div>

                  </div>


                  {/* PHONE + SUBJECT */}

                  <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-[#d6a64c] focus:ring-2 focus:ring-[#d6a64c]/15"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Subject{' '}
                        <span className="text-red-600">*</span>
                      </label>

                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-[#d6a64c] focus:ring-2 focus:ring-[#d6a64c]/15"
                      >
                        <option value="">
                          Select a subject
                        </option>

                        <option value="general">
                          General Inquiry
                        </option>

                        <option value="donation">
                          Donation
                        </option>

                        <option value="partnership">
                          Partnership / Collaboration
                        </option>

                        <option value="beneficiary">
                          Beneficiary Support
                        </option>

                        <option value="volunteer">
                          Volunteer With Us
                        </option>

                        <option value="other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* MESSAGE */}

                  <div className="mb-6">

                    <label className="mb-2 block text-sm font-semibold text-foreground">
                      Message{' '}
                      <span className="text-red-600">*</span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Type your message here..."
                      className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-[#d6a64c] focus:ring-2 focus:ring-[#d6a64c]/15"
                    />

                  </div>


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#d6a64c] py-4 text-sm font-bold tracking-[0.08em] text-[#041e2e] transition-all duration-300 hover:bg-[#c6943b]"
                  >

                    <Icon
                      name="PaperAirplaneIcon"
                      size={19}
                    />

                    SEND MESSAGE

                  </button>


                  {/* PRIVACY */}

                  <div className="mt-4 flex items-center justify-center gap-2">

                    <Icon
                      name="LockClosedIcon"
                      size={14}
                      className="text-muted-foreground"
                    />

                    <p className="text-center text-xs text-muted-foreground">
                      We respect your privacy. Your information is safe with us.
                    </p>

                  </div>

                </form>

              )}

            </div>


            {/* CONTACT INFORMATION */}

            <div className="rounded-2xl border border-border bg-white p-6 shadow-xl sm:p-8">


              {/* HEADER */}

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#041e2e]">

                  <Icon
                    name="PhoneIcon"
                    size={22}
                    className="text-[#d6a64c]"
                  />

                </div>

                <div>

                  <h2
                    className="text-2xl text-foreground sm:text-3xl"
                    style={{
                      fontFamily:
                        'Cormorant Garamond, Georgia, serif',
                      fontWeight: 700,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    Contact Information
                  </h2>

                  <div className="mt-3 h-[2px] w-12 bg-[#d6a64c]" />

                </div>

              </div>


              <div className="divide-y divide-border">


                {/* PHONE */}

                <div className="flex gap-5 py-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6a64c]/10">

                    <Icon
                      name="PhoneIcon"
                      size={22}
                      className="text-[#d6a64c]"
                    />

                  </div>

                  <div>

                    <h3
                      className="mb-1 text-lg text-foreground"
                      style={{
                        fontFamily:
                          'Cormorant Garamond, Georgia, serif',
                        fontWeight: 700,
                      }}
                    >
                      Phone
                    </h3>

                    <a
                      href="tel:+919876543210"
                      className="font-medium text-foreground transition-colors hover:text-[#d6a64c]"
                    >
                      +91 98765 43210
                    </a>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="flex gap-5 py-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6a64c]/10">

                    <Icon
                      name="EnvelopeIcon"
                      size={22}
                      className="text-[#d6a64c]"
                    />

                  </div>

                  <div>

                    <h3
                      className="mb-1 text-lg text-foreground"
                      style={{
                        fontFamily:
                          'Cormorant Garamond, Georgia, serif',
                        fontWeight: 700,
                      }}
                    >
                      Email
                    </h3>

                    <a
                      href="mailto:info@silentsalute.org"
                      className="break-all font-medium text-foreground transition-colors hover:text-[#d6a64c]"
                    >
                      info@silentsalute.org
                    </a>

                    <p className="mt-1 text-sm text-muted-foreground">
                      We&apos;ll reply within 24 hours
                    </p>

                  </div>

                </div>


                {/* ADDRESS + MAP */}

                <div className="py-6">

                  <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]">

                    {/* ADDRESS */}

                    <div className="flex gap-5">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6a64c]/10">

                        <Icon
                          name="MapPinIcon"
                          size={22}
                          className="text-[#d6a64c]"
                        />

                      </div>

                      <div>

                        <h3
                          className="mb-1 text-lg text-foreground"
                          style={{
                            fontFamily:
                              'Cormorant Garamond, Georgia, serif',
                            fontWeight: 700,
                          }}
                        >
                          Address
                        </h3>

                        <p className="leading-relaxed text-foreground">
                          Silent Salute Foundation
                          <br />
                          C-123, Defence Colony,
                          <br />
                          New Delhi - 110024, India
                        </p>

                        <p className="mt-2 text-sm text-muted-foreground">
                          We&apos;d love to meet you.
                        </p>

                        <a
                          href="https://www.google.com/maps/search/?api=1&query=C-123%2C+Defence+Colony%2C+New+Delhi%2C+110024%2C+India"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d6a64c] transition-opacity hover:opacity-75"
                        >

                          <Icon
                            name="MapPinIcon"
                            size={17}
                          />

                          View on Google Maps

                        </a>

                      </div>

                    </div>


                    {/* GOOGLE MAP */}

                    <div className="overflow-hidden rounded-xl border border-[#d6a64c]/20 shadow-md">

                      <iframe
                        title="Silent Salute Foundation Location"
                        src="https://www.google.com/maps?q=C-123%2C+Defence+Colony%2C+New+Delhi%2C+110024%2C+India&output=embed"
                        width="100%"
                        height="250"
                        style={{
                          border: 0,
                          display: 'block',
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />

                    </div>

                  </div>

                </div>


                {/* ORGANIZATION */}

                <div className="flex gap-5 py-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6a64c]/10">

                    <Icon
                      name="DocumentTextIcon"
                      size={22}
                      className="text-[#d6a64c]"
                    />

                  </div>

                  <div>

                    <h3
                      className="mb-1 text-lg text-foreground"
                      style={{
                        fontFamily:
                          'Cormorant Garamond, Georgia, serif',
                        fontWeight: 700,
                      }}
                    >
                      Organization
                    </h3>

                    <p className="font-medium text-foreground">
                      Section 8 Company
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      A not-for-profit organization dedicated to supporting
                      dependents of defence personnel.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* CONNECT WITH US */}

          <section className="mt-8 rounded-2xl border border-border bg-white px-6 py-10 shadow-lg sm:px-10">

            <div className="mb-10 text-center">

              <h2
                className="text-3xl text-foreground sm:text-4xl"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                }}
              >
                Connect With Us
              </h2>

              {/* SIMPLE GOLD LINE */}

              <div className="mx-auto mt-4 h-[2px] w-[76px] bg-[#d6a64c]" />

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Follow us on social media to stay updated with our initiatives
                and stories.
              </p>

            </div>


            <div className="grid grid-cols-2 divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">


              {/* INSTAGRAM */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-xl px-5 py-6 text-center transition-all duration-300 hover:bg-secondary"
              >

                <img
                  src="/assets/images/instagram.png"
                  alt="Instagram"
                  className="mb-4 h-[52px] w-[52px] object-contain"
                />

                <h3
                  className="text-lg text-foreground"
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                    fontWeight: 700,
                  }}
                >
                  Instagram
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  @silentsalutefoundation
                </p>

              </a>


              {/* FACEBOOK */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-xl px-5 py-6 text-center transition-all duration-300 hover:bg-secondary"
              >

                <img
                  src="/assets/images/facebook.png"
                  alt="Facebook"
                  className="mb-4 h-[52px] w-[52px] object-contain"
                />

                <h3
                  className="text-lg text-foreground"
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                    fontWeight: 700,
                  }}
                >
                  Facebook
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  /silentsalutefoundation
                </p>

              </a>


              {/* TWITTER / X */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-xl px-5 py-6 text-center transition-all duration-300 hover:bg-secondary"
              >

                <img
                  src="/assets/images/twitter.png"
                  alt="Twitter"
                  className="mb-4 h-[52px] w-[52px] object-contain"
                />

                <h3
                  className="text-lg text-foreground"
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                    fontWeight: 700,
                  }}
                >
                  Twitter
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  @silent_salute
                </p>

              </a>


              {/* LINKEDIN */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-xl px-5 py-6 text-center transition-all duration-300 hover:bg-secondary"
              >

                <img
                  src="/assets/images/linkedin.png"
                  alt="LinkedIn"
                  className="mb-4 h-[52px] w-[52px] object-contain"
                />

                <h3
                  className="text-lg text-foreground"
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                    fontWeight: 700,
                  }}
                >
                  LinkedIn
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  /company/silent-salute
                </p>

              </a>

            </div>

          </section>

        </div>

      </section>

      <Footer />

    </main>
  );
}