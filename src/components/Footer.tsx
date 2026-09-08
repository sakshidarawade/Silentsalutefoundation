'use client';

import React from 'react';
import Link from '@/components/ui/Link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

/* =========================================================
   FOOTER LINKS
========================================================= */

const socialLinks = [
  {
    icon: '/assets/images/instagram.png',
    label: 'Instagram',
    href: '#',
  },
  {
    icon: '/assets/images/facebook.png',
    label: 'Facebook',
    href: '#',
  },
  {
    icon: '/assets/images/twitter.png',
    label: 'Twitter',
    href: '#',
  },
  {
    icon: '/assets/images/linkedin.png',
    label: 'LinkedIn',
    href: '#',
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#062137] text-white">

      {/* =====================================================
          HERO FOOTER
      ====================================================== */}

      <div className="relative min-h-[420px] overflow-hidden border-b border-white/10">

        {/* Background Image */}
        <img
          src="/assets/images/footer.png"
          alt="Silent Salute Foundation"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark Overlay */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#062137]/95
          via-[#062137]/78
          to-[#062137]/45
        " />

        {/* Atmospheric Gold Glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 78% 48%, rgba(201,145,42,0.28) 0%, transparent 62%)',
          }}
        />

        {/* Content */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[420px]
            max-w-[1450px]
            items-center
            justify-end
            px-6
            py-20
            sm:px-10
            lg:px-16
            xl:px-20
          "
        >

          <div className="w-full max-w-[640px] text-left">

            <p className="
              mb-4
              text-[0.72rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#d4a63c]
            ">
              BE THE REASON SOMEONE MOVES FORWARD.
            </p>

            <h2
              className="
                mb-5
                max-w-[620px]
                text-[clamp(2.5rem,4vw,4rem)]
                leading-[0.95]
                tracking-[-0.035em]
                text-white
              "
              style={{
                fontFamily:
                  'Cormorant Garamond, Georgia, serif',
                fontWeight: 700,
              }}
            >
              Stand with those who stood
              <br />
              behind the nation.
            </h2>

            <p className="
              mb-8
              max-w-[510px]
              text-[0.9rem]
              leading-[1.7]
              text-white/80
              sm:text-[1rem]
            ">
              Your support can help open doors to education,
              healthcare and opportunity for families of those
              who served the nation.
            </p>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/donate"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  bg-[#d49b1d]
                  px-6
                  py-3
                  text-[0.8rem]
                  font-semibold
                  text-[#07172a]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#edb936]
                  hover:shadow-lg
                "
              >
                Donate Now

                <Icon
                  name="ArrowRightIcon"
                  size={15}
                />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  rounded-md
                  border
                  border-white/50
                  bg-white/5
                  px-6
                  py-3
                  text-[0.8rem]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#07172a]
                "
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          mx-auto
          max-w-[1450px]
          px-6
          pb-10
          pt-14
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-x-12
            gap-y-10
            sm:grid-cols-2
            max-[560px]:grid-cols-1
            lg:grid-cols-[1.35fr_0.85fr_0.95fr_1.35fr]
            lg:gap-x-14
            xl:gap-x-20
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:pr-8 max-[560px]:col-span-1">

            <Link
              href="/"
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >

              <AppImage
                src="/assets/images/logo.png"
                alt="Silent Salute Foundation Logo"
                width={58}
                height={58}
                className="
                  h-[58px]
                  w-[58px]
                  rounded-full
                  object-contain
                "
              />

              <div>

                <div
                  className="
                    text-[1.2rem]
                    font-bold
                    leading-tight
                    tracking-[0.01em]
                    text-white
                  "
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                  }}
                >
                  Silent Salute Foundation
                </div>

                <div
                  className="
                    text-[0.88rem]
                    leading-tight
                    text-[#d4a63c]
                  "
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                  }}
                >
                  वीर परिवारों का संबल
                </div>

              </div>

            </Link>

            <p className="
              mb-6
              max-w-[320px]
              text-[0.9rem]
              leading-[1.7]
              text-white/65
            ">
              हर वीर परिवार को सम्मान, सहयोग और एक बेहतर कल देने के लिए हम प्रतिबद्ध हैं
              <br />
              Supporting the families of India's armed forces, paramilitary and special forces personnel through housing, education and livelihood programmes.
            </p>


            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-3">

              {socialLinks.map((social) => (

                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/[0.03]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#d4a63c]
                    hover:bg-[#d4a63c]
                    hover:shadow-[0_8px_20px_rgba(212,166,60,0.2)]
                  "
                >

                  <img
                    src={social.icon}
                    alt={social.label}
                    className="
                      h-4
                      w-4
                      object-contain
                    "
                  />

                </a>

              ))}

            </div>

          </div>


          <div>
            <h5 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h5>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">Home</Link>
              <Link href="/about" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">About Us</Link>
              <Link href="/causes" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">What We Build</Link>
              <Link href="/contact" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">Get Involved</Link>
              <Link href="/donate" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">Donate</Link>
            </nav>
          </div>

          <div>
            <h5 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white">
              Get Involved
            </h5>
            <nav className="flex flex-col gap-3">
              <Link href="/donate" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">Make a Donation</Link>
              <Link href="/contact" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">Volunteer With Us</Link>
              <Link href="/contact" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">Corporate Partnerships (CSR)</Link>
              <Link href="/contact" className="text-[0.9rem] text-white/60 transition-colors hover:text-[#d4a63c]">Family Enquiries</Link>
            </nav>
          </div>

          <div>
            <h5 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h5>
            <ul className="flex flex-col gap-4 text-[0.9rem] leading-[1.5] text-white/60">
              <li>📍 Foundation office details to be published</li>
              <li>📞 Contact number to be published</li>
              <li>✉️ Email address to be published</li>
              <li>🕒 Monday to Saturday, 9:30 am – 6:00 pm IST</li>
            </ul>
          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            pt-6
            text-center
            sm:flex-row
            sm:text-left
          "
        >

          <p className="text-[0.78rem] text-white/50">
            © {new Date().getFullYear()} Silent Salute Foundation. All rights reserved.
          </p>


          <p className="
            flex
            items-center
            justify-center
            gap-1.5
            text-[0.78rem]
            text-white/45
          ">

            वीर परिवारों का संबल — Strength for the families of our veterans

          </p>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */
