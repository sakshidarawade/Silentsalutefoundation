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
    sub:
      'Every contribution — big or small — goes directly to education, healthcare, and emergency support for the families who stood behind our brave heroes.',

    // DESKTOP IMAGE
    bg: '/assets/images/background1.png',

    // MOBILE IMAGE
    mobileBg: '/assets/images/background1-mobile.png',

    bgPosition: '75% center',
    mobileBgPosition: 'center',
  },
  {
    id: 2,
    label: 'A SMALL GIFT, A BIG IMPACT',
    heading: 'A Small Gift,',
    headingTwo: 'A Big Difference',
    headingThree: 'For a Family',
    headingGold: 'On the Frontline.',
    sub:
      'From education and healthcare to emergency support, every contribution helps families of our brave service members rebuild stability, confidence, and hope.',

    // DESKTOP IMAGE
    bg: '/assets/images/background2.png',

    // MOBILE IMAGE
    mobileBg: '/assets/images/background2-mobile.png',

    bgPosition: '75% center',
    mobileBgPosition: 'center',
  },
  {
    id: 3,
    label: 'WHEN WE HELP, THEY HEAL',
    heading: 'Care That',
    headingTwo: 'Rebuilds',
    headingThree: 'Hope',
    headingGold: 'And Dignity.',
    sub:
      'When a family faces loss, illness, or hardship, compassion can change everything. Your donation becomes a lifeline of care, support, and renewed strength.',

    // DESKTOP IMAGE
    bg: '/assets/images/background3.png',

    // MOBILE IMAGE
    mobileBg: '/assets/images/background3-mobile.png',

    bgPosition: 'center',
    mobileBgPosition: 'center',
  },
  {
    id: 4,
    label: 'BE THE REASON THEY FEEL SAFE',
    heading: 'You Can',
    headingTwo: 'Be the Reason',
    headingThree: 'A Family',
    headingGold: 'Feels Safe Again.',
    sub:
      'Together, we can turn sacrifice into security. Your generosity gives families the support they need today and the future they deserve tomorrow.',

    // DESKTOP IMAGE
    bg: '/assets/images/background4.png',

    // MOBILE IMAGE
    mobileBg: '/assets/images/background4-mobile.png',

    bgPosition: 'center',
    mobileBgPosition: 'center',
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

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
    <section className="relative min-h-screen overflow-hidden pt-16">

      {/* ================= DESKTOP BACKGROUNDS ================= */}
      <div className="absolute inset-0 hidden md:block">
        {slides.map((item, index) => (
          <div
            key={`desktop-${item.id}`}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: item.bgPosition || 'center',
              backgroundRepeat: 'no-repeat',
              opacity: index === current ? 1 : 0,
              zIndex: index === current ? 1 : 0,
            }}
            aria-hidden={index !== current}
          />
        ))}
      </div>

      {/* ================= MOBILE BACKGROUNDS ================= */}
      <div className="absolute inset-0 block md:hidden">
        {slides.map((item, index) => (
          <div
            key={`mobile-${item.id}`}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${item.mobileBg})`,
              backgroundSize: 'cover',
              backgroundPosition: item.mobileBgPosition || 'center',
              backgroundRepeat: 'no-repeat',
              opacity: index === current ? 1 : 0,
              zIndex: index === current ? 1 : 0,
            }}
            aria-hidden={index !== current}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[2] bg-black/55" />

      {/* DECORATIVE DIAGONAL PATTERN */}
      <div className="pointer-events-none absolute inset-0 z-[3] opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,145,42,0.3) 40px, rgba(201,145,42,0.3) 41px)',
          }}
        />
      </div>

      {/* GOLD ACCENT LINE */}
      <div className="absolute bottom-0 left-0 top-0 z-[4] w-1 bg-gradient-to-b from-transparent via-accent to-transparent" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] w-full items-center">
        <div className="w-full max-w-[1500px] px-4 py-20 sm:px-6 lg:px-8">

          <div className="ml-0 max-w-3xl text-left">

            {/* GOLD TOP LABEL */}
            <div
              key={`label-${slide.id}`}
              className="section-label mb-6"
              style={{
                animation: 'heroFadeUp 0.7s ease forwards',
              }}
            >
              {slide.label}
            </div>

            {/* MAIN HERO HEADING */}
            <h1
              key={`heading-${slide.id}`}
              className="hero-heading mb-7"
              style={{
                animation: 'heroFadeUp 0.7s ease 0.1s forwards',
                opacity: 0,
              }}
            >
              {slide.heading}
              <br />

              {slide.headingTwo}
              <br />

              {slide.headingThree}
              <br />

              <span className="hero-heading-gold">
                {slide.headingGold}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              key={`description-${slide.id}`}
              className="mb-10 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
              style={{
                animation: 'heroFadeUp 0.7s ease 0.2s forwards',
                opacity: 0,
              }}
            >
              {slide.sub}
            </p>

            {/* CTA BUTTONS */}
            <div
              key={`buttons-${slide.id}`}
              className="flex flex-wrap gap-4"
              style={{
                animation: 'heroFadeUp 0.7s ease 0.3s forwards',
                opacity: 0,
              }}
            >
              <Link
                to="/donate"
                className="btn-gold inline-flex items-center gap-2"
              >
                Support a Family

                <Icon
                  name="ArrowRightIcon"
                  size={16}
                />
              </Link>

              <Link
                to="/about"
                className="btn-outline-white"
              >
                Discover Our Mission
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
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
            className="group flex h-5 items-center justify-center"
          >
            <span
              className={`
                block rounded-full transition-all duration-500 ease-out
                ${
                  index === current
                    ? 'h-2 w-10 bg-accent'
                    : 'h-2 w-2 bg-white/40 group-hover:bg-white/80'
                }
              `}
            />
          </button>
        ))}
      </div>

      <style>{`

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


        /* MAIN HERO HEADING */

        .hero-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 600;
          font-size: clamp(2.7rem, 4.5vw, 4.4rem);
          line-height: 1.02;
          letter-spacing: -0.025em;
          color: #ffffff;
        }


        /* LAST LINE */

        .hero-heading-gold {
          color: #ffffff;
        }


        /* TOP GOLD LABEL */

        .section-label {
          font-family: 'Raleway', sans-serif;
          font-weight: 600;
          font-size: clamp(0.75rem, 0.9vw, 0.95rem);
          line-height: 1.2;
          letter-spacing: 0.22em;
          color: #d6a64c;
          text-transform: uppercase;
        }


        /* TABLET */

        @media (max-width: 768px) {

          .hero-heading {
            font-size: clamp(2.3rem, 7vw, 3.5rem);
            line-height: 1.05;
            letter-spacing: -0.02em;
          }

          .section-label {
            font-size: 0.78rem;
            letter-spacing: 0.16em;
          }

        }


        /* MOBILE */

        @media (max-width: 480px) {

          .hero-heading {
            font-size: 2.35rem;
            line-height: 1.08;
            letter-spacing: -0.015em;
          }

          .section-label {
            font-size: 0.7rem;
            letter-spacing: 0.13em;
          }

        }


        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {

          .hero-heading,
          .section-label {
            animation: none !important;
            opacity: 1 !important;
          }

        }

      `}</style>

    </section>
  );
}