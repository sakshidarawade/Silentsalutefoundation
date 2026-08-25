import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/AppIcon';

const slides = [
  {
    id: 1,
    label: 'JOIN THE MISSION',
    heading: 'Your Support',
    headingTwo: 'Can Change',
    headingThree: "A Hero's",
    headingGold: "Family's Life.",
    sub: 'Every contribution — big or small — goes directly to education, healthcare, and emergency support for the families who stood behind our brave heroes.',
    bg: '/assets/images/background1.png',

    // Desktop image position
    bgPosition: '75% center',

    // Mobile image position
    mobileBgPosition: '65% center',
  },
  {
    id: 2,
    label: 'A SMALL GIFT, A BIG IMPACT',
    heading: 'A Small Gift,',
    headingTwo: 'A Big Difference',
    headingThree: 'For a Family',
    headingGold: 'On the Frontline.',
    sub: 'From education and healthcare to emergency support, every contribution helps families of our brave service members rebuild stability, confidence, and hope.',
    bg: '/assets/images/background2.png',
    bgPosition: '75% center',
    mobileBgPosition: '62% center',
  },
  {
    id: 3,
    label: 'WHEN WE HELP, THEY HEAL',
    heading: 'Care That',
    headingTwo: 'Rebuilds',
    headingThree: 'Hope',
    headingGold: 'And Dignity.',
    sub: 'When a family faces loss, illness, or hardship, compassion can change everything. Your donation becomes a lifeline of care, support, and renewed strength.',
    bg: '/assets/images/background3.png',
    bgPosition: 'center center',
    mobileBgPosition: 'center center',
  },
  {
    id: 4,
    label: 'BE THE REASON THEY FEEL SAFE',
    heading: 'You Can',
    headingTwo: 'Be the Reason',
    headingThree: 'A Family',
    headingGold: 'Feels Safe Again.',
    sub: 'Together, we can turn sacrifice into security. Your generosity gives families the support they need today and the future they deserve tomorrow.',
    bg: '/assets/images/background4.png',
    bgPosition: 'center center',
    mobileBgPosition: 'center center',
  },
];

const SLIDE_DURATION = 5000;
const FADE_DURATION = 700;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;

      setIsAnimating(true);
      setCurrent(index);

      window.setTimeout(() => {
        setIsAnimating(false);
      }, FADE_DURATION);
    },
    [current, isAnimating]
  );

  /*
   * AUTO SLIDER
   *
   * This resets whenever the current slide changes,
   * so clicking a dot doesn't cause the timer to jump unexpectedly.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [current]);

  /*
   * FADE / ANIMATION STATE
   */
  useEffect(() => {
    setIsAnimating(true);

    const timer = window.setTimeout(() => {
      setIsAnimating(false);
    }, FADE_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <section className="hero-slider relative min-h-[100svh] w-full overflow-hidden pt-16">

      {/* =========================================================
          BACKGROUND IMAGES
      ========================================================== */}

      {slides.map((item, index) => (
        <div
          key={item.id}
          className="hero-background absolute inset-0"
          style={
            {
              '--desktop-position': item.bgPosition,
              '--mobile-position': item.mobileBgPosition,

              backgroundImage: `url(${item.bg})`,
              backgroundPosition: item.bgPosition,
              opacity: index === current ? 1 : 0,
              zIndex: index === current ? 1 : 0,
            } as React.CSSProperties
          }
          aria-hidden={index !== current}
        />
      ))}

      {/* =========================================================
          DARK OVERLAY
      ========================================================== */}

      <div className="absolute inset-0 z-[2] bg-black/55" />

      {/* =========================================================
          MOBILE EXTRA OVERLAY
          Helps text remain readable on portrait screens.
      ========================================================== */}

      <div className="hero-mobile-overlay pointer-events-none absolute inset-0 z-[3]" />

      {/* =========================================================
          DECORATIVE DIAGONAL PATTERN
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,145,42,0.3) 40px, rgba(201,145,42,0.3) 41px)',
          }}
        />
      </div>

      {/* =========================================================
          GOLD ACCENT LINE
      ========================================================== */}

      <div className="absolute bottom-0 left-0 top-0 z-[5] w-1 bg-gradient-to-b from-transparent via-accent to-transparent" />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] w-full items-center">
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-5
            py-16
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
        >
          <div
            className="
              hero-content
              ml-0
              w-full
              max-w-3xl
              text-left
            "
          >

            {/* =====================================================
                TOP LABEL
            ====================================================== */}

            <div
              key={`label-${slide.id}`}
              className="section-label mb-5"
              style={{
                animation: 'heroFadeUp 0.7s ease forwards',
              }}
            >
              {slide.label}
            </div>

            {/* =====================================================
                MAIN HEADING
            ====================================================== */}

            <h1
              key={`heading-${slide.id}`}
              className="hero-heading mb-6"
              style={{
                animation: 'heroFadeUp 0.7s ease 0.1s forwards',
                opacity: 0,
              }}
            >
              <span>{slide.heading}</span>
              <br />

              <span>{slide.headingTwo}</span>
              <br />

              <span>{slide.headingThree}</span>
              <br />

              <span className="hero-heading-gold">
                {slide.headingGold}
              </span>
            </h1>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              key={`description-${slide.id}`}
              className="
                hero-description
                mb-8
                max-w-2xl
                text-base
                leading-relaxed
                text-white/85
                sm:mb-10
                sm:text-lg
              "
              style={{
                animation: 'heroFadeUp 0.7s ease 0.2s forwards',
                opacity: 0,
              }}
            >
              {slide.sub}
            </p>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}

            <div
              key={`buttons-${slide.id}`}
              className="
                hero-buttons
                flex
                flex-wrap
                gap-3
                sm:gap-4
              "
              style={{
                animation: 'heroFadeUp 0.7s ease 0.3s forwards',
                opacity: 0,
              }}
            >
              <Link
                to="/donate"
                className="
                  btn-gold
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  px-5
                  text-sm
                  sm:px-6
                  sm:text-base
                "
              >
                Support a Family

                <Icon
                  name="ArrowRightIcon"
                  size={16}
                />
              </Link>

              <Link
                to="/about"
                className="
                  btn-outline-white
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  px-5
                  text-sm
                  sm:px-6
                  sm:text-base
                "
              >
                Discover Our Mission
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          DOT NAVIGATION
      ========================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-2
          sm:bottom-8
        "
        aria-label="Hero slide navigation"
      >
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            disabled={isAnimating}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
            className="
              group
              flex
              h-6
              w-8
              items-center
              justify-center
              sm:w-10
            "
          >
            <span
              className={`
                block
                rounded-full
                transition-all
                duration-500
                ease-out

                ${
                  index === current
                    ? 'h-2 w-8 bg-accent sm:w-10'
                    : 'h-2 w-2 bg-white/40 group-hover:bg-white/80'
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* =========================================================
          STYLES
      ========================================================== */}

      <style>{`

        /* ========================================================
           HERO BACKGROUND
        ======================================================== */

        .hero-background {
          position: absolute;
          inset: 0;

          background-size: cover;
          background-repeat: no-repeat;

          transition:
            opacity 700ms ease-in-out,
            background-position 700ms ease-in-out;

          will-change: opacity;
        }


        /* ========================================================
           ANIMATION
        ======================================================== */

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ========================================================
           HERO HEADING
        ======================================================== */

        .hero-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;

          font-weight: 600;

          font-size: clamp(
            2.7rem,
            4.5vw,
            4.4rem
          );

          line-height: 1.02;

          letter-spacing: -0.025em;

          color: #ffffff;

          text-wrap: balance;
        }


        /* ========================================================
           GOLD HEADING
        ======================================================== */

        .hero-heading-gold {
          color: #ffffff;
        }


        /* ========================================================
           TOP LABEL
        ======================================================== */

        .section-label {
          font-family: 'Raleway', sans-serif;

          font-weight: 600;

          font-size: clamp(
            0.75rem,
            0.9vw,
            0.95rem
          );

          line-height: 1.2;

          letter-spacing: 0.22em;

          color: #d6a64c;

          text-transform: uppercase;
        }


        /* ========================================================
           TABLET
        ======================================================== */

        @media (max-width: 1024px) {

          .hero-background {
            background-position: var(--desktop-position);
          }

          .hero-content {
            max-width: 680px;
          }

          .hero-heading {
            font-size: clamp(
              2.6rem,
              6vw,
              4rem
            );
          }

        }


        /* ========================================================
           MOBILE
        ======================================================== */

        @media (max-width: 768px) {

          .hero-background {
            /*
             * Keep cover so there is no empty space,
             * but use the mobile-specific focal point.
             */
            background-position: var(--mobile-position) !important;
          }


          /*
           * Stronger gradient on mobile.
           *
           * This allows the text to remain readable even
           * when the image has a bright subject behind it.
           */
          .hero-mobile-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.48) 0%,
                rgba(0, 0, 0, 0.25) 55%,
                rgba(0, 0, 0, 0.10) 100%
              );
          }


          .hero-heading {
            font-size: clamp(
              2.35rem,
              8vw,
              3.5rem
            );

            line-height: 1.05;

            letter-spacing: -0.02em;
          }


          .section-label {
            font-size: 0.72rem;

            letter-spacing: 0.14em;

            line-height: 1.4;
          }


          .hero-description {
            font-size: 1rem;

            line-height: 1.65;

            max-width: 100%;
          }


          .hero-buttons {
            width: 100%;
          }


          .hero-buttons a {
            width: auto;
          }

        }


        /* ========================================================
           SMALL MOBILE
        ======================================================== */

        @media (max-width: 480px) {

          .hero-background {
            /*
             * Slightly more aggressive focal positioning
             * for narrow portrait screens.
             */
            background-position: var(--mobile-position) center !important;
          }


          .hero-heading {
            font-size: 2.25rem;

            line-height: 1.06;

            letter-spacing: -0.015em;
          }


          .section-label {
            font-size: 0.65rem;

            letter-spacing: 0.12em;

            margin-bottom: 1rem;
          }


          .hero-description {
            font-size: 0.94rem;

            line-height: 1.6;

            margin-bottom: 1.75rem;
          }


          /*
           * Stack buttons on very small screens.
           * This prevents ugly wrapping.
           */
          .hero-buttons {
            flex-direction: column;

            align-items: stretch;

            width: 100%;
          }


          .hero-buttons a {
            width: 100%;

            min-height: 50px;
          }


          /*
           * Keep dots away from the browser bottom area.
           */
          .hero-slider > div[aria-label="Hero slide navigation"] {
            bottom: 1rem;
          }

        }


        /* ========================================================
           VERY SMALL PHONES
        ======================================================== */

        @media (max-width: 360px) {

          .hero-heading {
            font-size: 2rem;

            line-height: 1.05;
          }


          .section-label {
            font-size: 0.6rem;

            letter-spacing: 0.1em;
          }


          .hero-description {
            font-size: 0.9rem;
          }

        }


        /* ========================================================
           LANDSCAPE PHONES
        ======================================================== */

        @media (
          max-width: 900px
        ) and (
          orientation: landscape
        ) {

          .hero-slider {
            min-height: 100svh;
          }


          .hero-content {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }


          .hero-heading {
            font-size: clamp(
              2rem,
              6vw,
              3rem
            );
          }


          .hero-description {
            max-width: 650px;

            margin-bottom: 1.5rem;
          }


          .hero-buttons {
            flex-direction: row;
          }


          .hero-buttons a {
            width: auto;
          }

        }


        /* ========================================================
           REDUCED MOTION
        ======================================================== */

        @media (prefers-reduced-motion: reduce) {

          .hero-background {
            transition: none;
          }


          .hero-heading,
          .section-label,
          .hero-description,
          .hero-buttons {
            animation: none !important;

            opacity: 1 !important;

            transform: none !important;
          }

        }

      `}</style>
    </section>
  );
}