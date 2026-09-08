'use client';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Link from '@/components/ui/Link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const aboutDropdown = [
  { label: 'Who We Are', href: '/about/who-we-are' },
  { label: 'How We Work', href: '/about/how-we-work' },
  { label: 'Partners', href: '/about/partners' },
  { label: 'Leaders & Team', href: '/about/team' },
  { label: 'Transparency', href: '/about/transparency' },
];

const causesDropdown = [
  { label: 'Education', href: '/causes/education' },
  { label: 'Healthcare', href: '/causes/healthcare' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [causesOpen, setCausesOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCausesOpen, setMobileCausesOpen] = useState(false);

  const [logoPreviewOpen, setLogoPreviewOpen] = useState(false);

  const location = useLocation();
  const isStoriesPage = location.pathname === '/impact';

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (mobileOpen || logoPreviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, logoPreviewOpen]);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLogoPreviewOpen(false);
        setMobileOpen(false);
        setAboutOpen(false);
        setCausesOpen(false);
        setMobileAboutOpen(false);
        setMobileCausesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /* =========================================================
     CLOSE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setAboutOpen(false);
    setCausesOpen(false);
    setMobileAboutOpen(false);
    setMobileCausesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(href.split('#')[0]);
  };

  /* =========================================================
     DESKTOP DROPDOWNS
  ========================================================= */

  const openAbout = () => {
    setAboutOpen(true);
    setCausesOpen(false);
  };

  const openCauses = () => {
    setCausesOpen(true);
    setAboutOpen(false);
  };

  /* =========================================================
     COLORS
  ========================================================= */

  const navLinkColor = scrolled
    ? 'text-white/90 hover:text-[#F4D08B]'
    : 'text-[#173A5E] hover:text-[#C9912A]';

  const navChevronColor = scrolled
    ? 'text-white/90 hover:text-[#F4D08B]'
    : 'text-[#173A5E] hover:text-[#C9912A]';

  const hindiColor = scrolled
    ? 'text-white/70'
    : 'text-[#173A5E]';

  const logoTextColor = scrolled
    ? 'text-white'
    : 'text-[#173A5E]';

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full

          /*
           * IMPORTANT:
           * Keep overflow visible for desktop dropdowns.
           */
          overflow-visible

          transition-all
          duration-300

          ${
            scrolled
              ? `
                bg-[#0D1B2A]/95
                shadow-lg
                shadow-black/30
              `
              : `
                bg-[#0D1B2A]/20
                backdrop-blur-md
              `
          }

          h-[82px]
          min-[380px]:h-[84px]
          sm:h-[92px]
          lg:h-[94px]
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-3
            min-[380px]:px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              LEFT BRANDING
          ================================================= */}

          <div
            className="
              flex
              h-full
              min-w-0
              flex-1
              items-center
              overflow-visible
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <button
              type="button"
              onClick={() => setLogoPreviewOpen(true)}
              className="
                relative
                z-[60]
                m-0
                flex
                shrink-0
                cursor-pointer
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border-0
                bg-white
                p-0
                outline-none
                transition-transform
                duration-300
                hover:scale-[1.03]
                focus:outline-none

                aspect-square
                h-[66px]
                w-[66px]

                min-[380px]:h-[70px]
                min-[380px]:w-[70px]

                sm:h-[78px]
                sm:w-[78px]

                lg:h-[88px]
                lg:w-[88px]
              "
              aria-label="Open Silent Salute Foundation logo"
            >
              <AppImage
                src="/assets/images/logo.png?v=2"
                alt="Silent Salute Foundation Logo"
                width={1600}
                height={1600}
                className="
                  block
                  h-full
                  w-full
                  object-contain
                "
                priority
              />
            </button>

            {/* =================================================
                BRANDING
            ================================================= */}

            <Link
              href="/"
              className="
                ml-1.5
                flex
                min-w-0
                shrink
                flex-col
                justify-center
                overflow-visible
                leading-none

                min-[380px]:ml-2
                sm:ml-3
                lg:ml-4
              "
            >
              {/* SILENT SALUTE */}

              <div
                className={`
                  whitespace-nowrap
                  font-display
                  font-bold
                  uppercase
                  transition-colors
                  duration-300
                  leading-[1.08]
                  tracking-[0.035em]

                  text-[0.68rem]

                  min-[380px]:text-[0.74rem]

                  sm:text-[0.9rem]
                  sm:tracking-[0.055em]

                  lg:text-[1rem]
                  lg:tracking-[0.075em]

                  ${logoTextColor}
                `}
              >
                Silent Salute
              </div>

              {/* FOUNDATION */}

              <div
                className="
                  whitespace-nowrap
                  font-display
                  font-bold
                  uppercase
                  text-[#F4D08B]
                  leading-[1.08]
                  tracking-[0.035em]

                  text-[0.68rem]

                  min-[380px]:text-[0.74rem]

                  sm:text-[0.9rem]
                  sm:tracking-[0.055em]

                  lg:text-[1rem]
                  lg:tracking-[0.075em]
                "
              >
                Foundation
              </div>

              {/* =================================================
                  HINDI SUBTITLE

                  DESKTOP ONLY:
                  Increased from 12px → 14px

                  MOBILE:
                  Kept exactly controlled by existing mobile sizes.
              ================================================= */}

              <div
                className={`
                  mt-[4px]
                  whitespace-nowrap
                  font-bold
                  transition-colors
                  duration-300
                  leading-[1.45]

                  text-[8px]

                  min-[380px]:text-[8.5px]

                  sm:mt-[5px]
                  sm:text-[10.5px]

                  lg:mt-[5px]
                  ${isStoriesPage ? 'lg:text-[16px]' : 'lg:text-[14px]'}

                  ${hindiColor}
                `}
              >
                वीर परिवारों का संबल
              </div>
            </Link>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              hidden
              shrink-0
              items-center
              gap-1
              lg:flex
            "
          >
            {/* HOME */}

            <Link
              href="/"
              className={`
                border-b-2
                px-3
                py-2
                text-[1rem]
                font-medium
                transition-colors
                duration-300

                ${
                  isActive('/')
                    ? 'border-[#C9912A] text-[#F4D08B]'
                    : `${navLinkColor} border-transparent`
                }
              `}
            >
              Home
            </Link>

            {/* =================================================
                ABOUT US
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/about"
                  className={`
                    border-b-2
                    px-3
                    py-2
                    text-[1rem]
                    font-medium
                    transition-colors
                    duration-300

                    ${
                      isActive('/about')
                        ? 'border-[#C9912A] text-[#F4D08B]'
                        : `${navLinkColor} border-transparent`
                    }
                  `}
                  onClick={() => {
                    setAboutOpen(false);
                    setCausesOpen(false);
                  }}
                >
                  About Us
                </Link>

                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    setAboutOpen((current) => !current);
                    setCausesOpen(false);
                  }}
                  className={`
                    py-2
                    pr-3
                    transition-colors
                    duration-300

                    ${
                      isActive('/about')
                        ? 'text-[#F4D08B]'
                        : navChevronColor
                    }
                  `}
                  aria-label="Toggle About Us menu"
                  aria-expanded={aboutOpen}
                >
                  <Icon
                    name={
                      aboutOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={16}
                  />
                </button>
              </div>

              {aboutOpen && (
                <>
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-full
                      h-2
                    "
                  />

                  <div
                    className="
                      nav-dropdown
                      z-[100]
                    "
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                  >
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={
                          isActive(item.href)
                            ? 'bg-white/5 text-white'
                            : 'text-white/80'
                        }
                        onClick={() => setAboutOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* =================================================
                OUR CAUSES
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={openCauses}
              onMouseLeave={() => setCausesOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/causes"
                  className={`
                    border-b-2
                    px-3
                    py-2
                    text-[1rem]
                    font-medium
                    transition-colors
                    duration-300

                    ${
                      isActive('/causes')
                        ? 'border-[#C9912A] text-[#F4D08B]'
                        : `${navLinkColor} border-transparent`
                    }
                  `}
                  onClick={() => {
                    setCausesOpen(false);
                    setAboutOpen(false);
                  }}
                >
                  Our Causes
                </Link>

                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    setCausesOpen((current) => !current);
                    setAboutOpen(false);
                  }}
                  className={`
                    py-2
                    pr-3
                    transition-colors
                    duration-300

                    ${
                      isActive('/causes')
                        ? 'text-[#F4D08B]'
                        : navChevronColor
                    }
                  `}
                  aria-label="Toggle Our Causes menu"
                  aria-expanded={causesOpen}
                >
                  <Icon
                    name={
                      causesOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={16}
                  />
                </button>
              </div>

              {causesOpen && (
                <>
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-full
                      h-2
                    "
                  />

                  <div
                    className="
                      nav-dropdown
                      z-[100]
                    "
                    onMouseEnter={() => setCausesOpen(true)}
                    onMouseLeave={() => setCausesOpen(false)}
                  >
                    {causesDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={
                          isActive(item.href)
                            ? 'bg-white/5 text-white'
                            : 'text-white/80'
                        }
                        onClick={() => setCausesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* IMPACT */}

            <Link
              href="/impact"
              className={`
                border-b-2
                px-3
                py-2
                text-[1rem]
                font-medium
                transition-colors
                duration-300

                ${
                  isActive('/impact')
                    ? 'border-[#C9912A] text-[#F4D08B]'
                    : `${navLinkColor} border-transparent`
                }
              `}
            >
              Impact &amp; Stories
            </Link>

            {/* CONTACT */}

            <Link
              href="/contact"
              className={`
                border-b-2
                px-3
                py-2
                text-[1rem]
                font-medium
                transition-colors
                duration-300

                ${
                  isActive('/contact')
                    ? 'border-[#C9912A] text-[#F4D08B]'
                    : `${navLinkColor} border-transparent`
                }
              `}
            >
              Contact
            </Link>
          </div>

          {/* =================================================
              DONATE + MOBILE MENU
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-1

              min-[380px]:gap-1.5
              sm:gap-2.5
              lg:gap-3
              lg:ml-16
            "
          >
            {/* =================================================
                DONATE

                KEEPING YOUR ORIGINAL BUTTON.
                NO DESKTOP CHANGE.
            ================================================= */}

            <Link
              href="/donate"
              className="
                btn-gold
                inline-flex
                shrink-0
                items-center
                justify-center
                whitespace-nowrap
                rounded-md

                px-1.5
                py-1.5
                text-[0.6rem]

                min-[380px]:px-2
                min-[380px]:py-[7px]
                min-[380px]:text-[0.67rem]

                sm:px-4
                sm:py-2.5
                sm:text-[0.84rem]

                lg:px-7
                lg:py-3.5
                lg:text-[0.95rem]
              "
            >
              Donate
            </Link>

            {/* =================================================
                MOBILE HAMBURGER
            ================================================= */}

            <button
              type="button"
              className={`
                flex
                shrink-0
                items-center
                justify-center
                rounded-md
                p-1.5

                min-[380px]:p-2

                transition-colors
                duration-300

                lg:hidden

                ${
                  scrolled
                    ? 'text-white hover:text-[#F4D08B]'
                    : 'text-[#173A5E] hover:text-[#C9912A]'
                }
              `}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Icon
                name="Bars3Icon"
                size={23}
              />
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE STRIPE FIX ONLY

            IMPORTANT:
            - Mobile/tablet only
            - Completely hidden on desktop
            - No desktop layout modification
            - Sits INSIDE the navbar bottom edge
            - Prevents the tiny white line from appearing
        ===================================================== */}

        <div
          className={`
            pointer-events-none
            absolute
            left-0
            right-0
            bottom-0
            hidden
            h-[4px]
            lg:hidden

            ${
              scrolled
                ? 'bg-[#0D1B2A]/95'
                : 'bg-[#0D1B2A]/20'
            }
          `}
          aria-hidden="true"
        />

        {/* =====================================================
            MOBILE BOTTOM EDGE OVERLAY

            This is intentionally mobile-only and slightly
            extends BELOW the navbar so the hero can NEVER
            create a visible white 1-3px gap.

            Desktop is completely untouched.
        ===================================================== */}

        <div
          className={`
            pointer-events-none
            absolute
            left-0
            right-0
            bottom-[-3px]
            block
            h-[3px]
            lg:hidden
            ${
              scrolled
                ? 'bg-[#0D1B2A]/95'
                : 'bg-[#0D1B2A]/20'
            }
          `}
          aria-hidden="true"
        />
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileOpen && (
        <div
          className="
            mobile-menu-overlay
            fixed
            inset-0
            z-[150]
            flex
            flex-col
            overflow-hidden
          "
        >
          {/* MOBILE HEADER */}

          <div
            className="
              flex
              min-h-[82px]
              shrink-0
              items-center
              justify-between
              border-b
              border-white/10
              px-3

              min-[380px]:px-4

              sm:min-h-[92px]
              sm:px-5
            "
          >
            {/* MOBILE BRANDING */}

            <Link
              href="/"
              className="
                flex
                min-w-0
                flex-1
                items-center
                gap-2
                overflow-visible

                min-[380px]:gap-2.5
                sm:gap-3
              "
              onClick={() => setMobileOpen(false)}
            >
              {/* LOGO */}

              <div
                className="
                  flex
                  aspect-square
                  h-[60px]
                  w-[60px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-white

                  min-[380px]:h-[68px]
                  min-[380px]:w-[68px]

                  sm:h-[78px]
                  sm:w-[78px]
                "
              >
                <AppImage
                  src="/assets/images/logo.png?v=2"
                  alt="Silent Salute Foundation Logo"
                  width={1600}
                  height={1600}
                  className="
                    block
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>

              {/* MOBILE BRAND TEXT */}

              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  justify-center
                  overflow-visible
                  leading-none
                "
              >
                <div
                  className="
                    whitespace-nowrap
                    font-display
                    font-bold
                    uppercase
                    text-white
                    leading-[1.08]
                    tracking-[0.035em]

                    text-[0.74rem]

                    min-[380px]:text-[0.82rem]

                    sm:text-[0.96rem]
                    sm:tracking-[0.05em]
                  "
                >
                  Silent Salute
                </div>

                <div
                  className="
                    whitespace-nowrap
                    font-display
                    font-bold
                    uppercase
                    text-[#F4D08B]
                    leading-[1.08]
                    tracking-[0.035em]

                    text-[0.74rem]

                    min-[380px]:text-[0.82rem]

                    sm:text-[0.96rem]
                    sm:tracking-[0.05em]
                  "
                >
                  Foundation
                </div>

                <div
                  className="
                    mt-[4px]
                    whitespace-nowrap
                    font-bold
                    leading-[1.5]
                    text-[8px]

                    min-[380px]:text-[8.5px]

                    sm:mt-[5px]
                    sm:text-[10px]

                    text-white/75
                  "
                >
                  वीर परिवारों का संबल
                </div>
              </div>
            </Link>

            {/* CLOSE */}

            <button
              type="button"
              className="
                ml-2
                flex
                shrink-0
                items-center
                justify-center
                rounded-md
                p-2
                text-white
                transition-colors
                hover:text-[#F4D08B]
              "
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <Icon
                name="XMarkIcon"
                size={27}
              />
            </button>
          </div>

          {/* MOBILE NAVIGATION */}

          <div
            className="
              flex-1
              space-y-1
              overflow-y-auto
              px-5
              py-5

              sm:px-6
              sm:py-6
            "
          >
            {/* HOME */}

            <Link
              href="/"
              className="
                block
                border-b
                border-white/10
                py-3
                text-lg
                font-medium
                text-white
              "
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* ABOUT */}

            <div>
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                "
              >
                <Link
                  href="/about"
                  className="
                    flex-1
                    py-3
                    text-lg
                    font-medium
                    text-white
                  "
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>

                <button
                  type="button"
                  className="
                    rounded-md
                    p-3
                    text-white
                  "
                  onClick={() =>
                    setMobileAboutOpen((current) => !current)
                  }
                  aria-label="Toggle About Us submenu"
                  aria-expanded={mobileAboutOpen}
                >
                  <Icon
                    name={
                      mobileAboutOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={18}
                  />
                </button>
              </div>

              {mobileAboutOpen && (
                <div
                  className="
                    space-y-1
                    py-2
                    pl-4
                  "
                >
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="
                        block
                        py-2
                        text-white/70
                        transition-colors
                        hover:text-[#F4D08B]
                      "
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CAUSES */}

            <div>
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                "
              >
                <Link
                  href="/causes"
                  className="
                    flex-1
                    py-3
                    text-lg
                    font-medium
                    text-white
                  "
                  onClick={() => setMobileOpen(false)}
                >
                  Our Causes
                </Link>

                <button
                  type="button"
                  className="
                    rounded-md
                    p-3
                    text-white
                  "
                  onClick={() =>
                    setMobileCausesOpen((current) => !current)
                  }
                  aria-label="Toggle Our Causes submenu"
                  aria-expanded={mobileCausesOpen}
                >
                  <Icon
                    name={
                      mobileCausesOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={18}
                  />
                </button>
              </div>

              {mobileCausesOpen && (
                <div
                  className="
                    space-y-1
                    py-2
                    pl-4
                  "
                >
                  {causesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="
                        block
                        py-2
                        text-white/70
                        transition-colors
                        hover:text-[#F4D08B]
                      "
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IMPACT */}

            <Link
              href="/impact"
              className="
                block
                border-b
                border-white/10
                py-3
                text-lg
                font-medium
                text-white
              "
              onClick={() => setMobileOpen(false)}
            >
              Impact &amp; Stories
            </Link>

            {/* CONTACT */}

            <Link
              href="/contact"
              className="
                block
                border-b
                border-white/10
                py-3
                text-lg
                font-medium
                text-white
              "
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* MOBILE DONATE */}

          <div
            className="
              shrink-0
              border-t
              border-white/10
              px-5
              pb-6
              pt-4

              sm:px-6
              sm:pb-8
            "
          >
            <Link
              href="/donate"
              className="
                btn-gold
                flex
                w-full
                items-center
                justify-center
                rounded-md
                py-4
                text-base
                font-semibold
              "
              onClick={() => setMobileOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}

      {/* =====================================================
          LOGO PREVIEW MODAL
      ===================================================== */}

      {logoPreviewOpen && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/75
            px-4
            backdrop-blur-md
          "
          onClick={() => setLogoPreviewOpen(false)}
        >
          {/* CLOSE */}

          <button
            type="button"
            className="
              absolute
              right-4
              top-4
              z-[210]
              rounded-md
              p-2
              text-white
              transition-colors
              hover:text-[#F4D08B]

              sm:right-6
              sm:top-6
            "
            onClick={() => setLogoPreviewOpen(false)}
            aria-label="Close logo preview"
          >
            <Icon
              name="XMarkIcon"
              size={30}
            />
          </button>

          {/* LOGO */}

          <div
            className="
              relative
              flex
              aspect-square
              [clip-path:circle(50%)]
              h-[min(84vw,650px)]
              w-[min(84vw,650px)]
              items-center
              justify-center
              overflow-hidden
              rounded-full

              sm:h-[min(76vw,650px)]
              sm:w-[min(76vw,650px)]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <AppImage
              src="/assets/images/logo.png"
              alt="Silent Salute Foundation Logo"
              width={1600}
              height={1600}
              className="
                block
                h-full
                w-full
                object-contain
              "
            />
          </div>
        </div>
      )}
    </>
  );
}