'use client';

import React from 'react';
import Link from '@/components/ui/Link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

/* =========================================================
   FOOTER LINKS
========================================================= */

const foundationLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'How We Work', href: '/about#how-we-work' },
  { label: 'Partners', href: '/about#partners' },
  { label: 'Leaders & Team', href: '/about#team' },
  { label: 'Transparency', href: '/about#transparency' },
];

const causesLinks = [
  { label: 'Education', href: '/causes/education' },
  { label: 'Healthcare', href: '/causes/healthcare' },
  { label: 'Impact & Stories', href: '/impact' },
  { label: 'Gallery', href: '/gallery' },
];

const connectLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteer', href: '/contact#volunteer' },
  { label: 'Partner With Us', href: '/contact#partner' },
];

const importantLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

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
          pb-6
          pt-12
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-x-10
            gap-y-10
            sm:grid-cols-2
            lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.5fr]
            xl:gap-x-14
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:pr-6">

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
                src="/assets/images/logo.jpg"
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
                    text-[1.05rem]
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
                  Silent Salute
                </div>

                <div
                  className="
                    text-[0.82rem]
                    leading-tight
                    text-[#d4a63c]
                  "
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                  }}
                >
                  Foundation
                </div>

              </div>

            </Link>

            <p className="
              mb-6
              max-w-[230px]
              text-[0.78rem]
              leading-[1.7]
              text-white/65
            ">
              Standing beside the families who stood
              behind the nation.
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


          {/* =================================================
              FOUNDATION
          ================================================= */}

          <FooterColumn
            title="Foundation"
            links={foundationLinks}
          />


          {/* =================================================
              OUR CAUSES
          ================================================= */}

          <FooterColumn
            title="Our Causes"
            links={causesLinks}
          />


          {/* =================================================
              CONNECT
          ================================================= */}

          <div>

            <FooterColumn
              title="Connect"
              links={connectLinks}
            />

            <div className="mt-8">

              <h5 className="
                mb-4
                text-[0.72rem]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
              ">
                Important
              </h5>

              <ul className="space-y-3">

                {importantLinks.map((link) => (

                  <li key={link.label}>

                    <Link
                      href={link.href}
                      className="
                        text-[0.78rem]
                        text-white/60
                        transition-colors
                        duration-200
                        hover:text-[#d4a63c]
                      "
                    >
                      {link.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>


          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <div className="lg:pl-3">

            <h5 className="
              mb-4
              text-[0.72rem]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-white
            ">
              Stay Connected
            </h5>

            <p className="
              mb-5
              max-w-[270px]
              text-[0.78rem]
              leading-[1.7]
              text-white/65
            ">
              Subscribe to receive updates on our initiatives,
              stories and ways you can make a difference.
            </p>

            <NewsletterForm />

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

          <p className="text-[0.68rem] text-white/50">
            © Silent Salute Foundation. All rights reserved.
          </p>


          <p className="
            flex
            items-center
            justify-center
            gap-1.5
            text-[0.68rem]
            text-white/45
          ">

            Built with

            <Icon
              name="HeartIcon"
              size={13}
              className="text-[#d4a63c]"
            />

            for the families who deserve our support.

          </p>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>

      <h5 className="
        mb-4
        text-[0.72rem]
        font-semibold
        uppercase
        tracking-[0.16em]
        text-white
      ">
        {title}
      </h5>


      <ul className="space-y-3">

        {links.map((link) => (

          <li key={link.label}>

            <Link
              href={link.href}
              className="
                inline-block
                text-[0.78rem]
                text-white/60
                transition-all
                duration-200
                hover:translate-x-1
                hover:text-[#d4a63c]
              "
            >
              {link.label}
            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}


/* =========================================================
   NEWSLETTER FORM
========================================================= */

function NewsletterForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="
        flex
        w-full
        max-w-[310px]
      "
    >

      <input
        type="email"
        placeholder="Enter your email"
        className="
          min-w-0
          flex-1
          rounded-l-md
          border
          border-white/15
          bg-white
          px-4
          py-3
          text-[0.78rem]
          text-[#07172a]
          placeholder:text-gray-400
          transition-colors
          focus:border-[#d4a63c]
          focus:outline-none
        "
      />

      <button
        type="submit"
        aria-label="Subscribe"
        className="
          flex
          w-14
          items-center
          justify-center
          rounded-r-md
          bg-[#d4a63c]
          text-[#07172a]
          transition-all
          duration-300
          hover:bg-[#edb936]
        "
      >

        <Icon
          name="PaperAirplaneIcon"
          size={17}
        />

      </button>

    </form>
  );
}