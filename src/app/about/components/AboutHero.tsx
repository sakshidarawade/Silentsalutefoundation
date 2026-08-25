import React, { useEffect, useRef, useState } from 'react';
import Link from '@/components/ui/Link';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: '500+', label: 'Families Supported' },
  { value: '1,200+', label: 'Children Educated' },
  { value: '15+', label: 'States Reached' },
  { value: '8+', label: 'Years of Service' },
];

const featureSlides = [
  {
    image: '/assets/images/about1.png',
    stats: [
      {
        label: 'EDUCATION',
        value: 'Brighter Futures',
        icon: 'AcademicCapIcon',
      },
      {
        label: 'HEALTHCARE',
        value: 'Health & Healing',
        icon: 'PlusIcon',
      },
      {
        label: 'HOPE',
        value: 'Stronger Together',
        icon: 'HeartIcon',
      },
    ],
  },
  {
    image: '/assets/images/about2.png',
    stats: [
      {
        label: 'EDUCATION',
        value: 'Brighter Futures',
        icon: 'AcademicCapIcon',
      },
      {
        label: 'HEALTHCARE',
        value: 'Health & Healing',
        icon: 'PlusIcon',
      },
      {
        label: 'HOPE',
        value: 'Stronger Together',
        icon: 'HeartIcon',
      },
    ],
  },
  {
    image: '/assets/images/about3.png',
    stats: [
      {
        label: 'EDUCATION',
        value: 'Brighter Futures',
        icon: 'AcademicCapIcon',
      },
      {
        label: 'HEALTHCARE',
        value: 'Health & Healing',
        icon: 'PlusIcon',
      },
      {
        label: 'HOPE',
        value: 'Stronger Together',
        icon: 'HeartIcon',
      },
    ],
  },
  {
    image: '/assets/images/about4.png',
    stats: [
      {
        label: 'EDUCATION',
        value: 'Brighter Futures',
        icon: 'AcademicCapIcon',
      },
      {
        label: 'HEALTHCARE',
        value: 'Health & Healing',
        icon: 'PlusIcon',
      },
      {
        label: 'HOPE',
        value: 'Stronger Together',
        icon: 'HeartIcon',
      },
    ],
  },
];

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [animatedValues, setAnimatedValues] = useState<number[]>(
    stats.map(() => 0)
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  /* ==========================================================
     IMAGE SLIDER
     ========================================================== */

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureSlides.length);
    }, 3500);

    return () => clearInterval(sliderInterval);
  }, []);

  /* ==========================================================
     COUNTER ANIMATION
     ========================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let frameIds: number[] = [];
    let hasAnimated = false;

    const animateCounters = () => {
      if (hasAnimated) return;

      hasAnimated = true;

      setAnimatedValues(stats.map(() => 0));

      const startTime = performance.now();
      const duration = 1500;

      stats.forEach((stat, index) => {
        const target = Number(
          String(stat.value).replace(/[^0-9]/g, '')
        );

        const tick = (now: number) => {
          const progress = Math.min(
            (now - startTime) / duration,
            1
          );

          const eased = 1 - Math.pow(1 - progress, 3);

          const currentValue = Math.round(target * eased);

          setAnimatedValues((prev) => {
            const next = [...prev];
            next[index] = currentValue;
            return next;
          });

          if (progress < 1) {
            const id = requestAnimationFrame(tick);
            frameIds.push(id);
          }
        };

        const id = requestAnimationFrame(tick);
        frameIds.push(id);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    const rect = section.getBoundingClientRect();

    if (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    ) {
      animateCounters();
    }

    return () => {
      observer.disconnect();

      frameIds.forEach((id) => {
        cancelAnimationFrame(id);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        pt-28
        pb-16
        text-white
        sm:pt-32
        sm:pb-20
      "
      style={{
        background:
          'linear-gradient(135deg, #08111A 0%, #0D1B2A 50%, #112236 100%)',
      }}
    >
      {/* ======================================================
          BACKGROUND GLOW
          ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(ellipse at 30% 60%, rgba(201,145,42,0.25) 0%, transparent 55%)',
        }}
      />

      {/* ======================================================
          TOP GOLD LINE
          ====================================================== */}

      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* ======================================================
          LEFT WATERMARK
          ====================================================== */}

      <div className="pointer-events-none absolute bottom-[-30px] left-[-10px] hidden h-[420px] w-[420px] opacity-30 lg:block">
        <img
          src="/assets/images/watermark3.png"
          alt=""
          className="h-full w-full object-contain object-left-bottom grayscale brightness-150 contrast-125"
        />
      </div>

      {/* ======================================================
          RIGHT WATERMARK
          ====================================================== */}

      <div className="pointer-events-none absolute right-[-20px] top-[-10px] hidden h-[420px] w-[420px] opacity-25 lg:block">
        <img
          src="/assets/images/watermark4.png"
          alt=""
          className="h-full w-full object-contain object-right-top"
        />
      </div>

      {/* ======================================================
          MAIN CONTAINER
          ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-16
          "
        >
          {/* ==================================================
              LEFT CONTENT
              ================================================== */}

          <div
            className="
              w-full
              max-w-[720px]
              justify-self-center
              text-center
              lg:justify-self-start
              lg:text-left
            "
          >
            {/* EYEBROW */}

            <p
              className="
                mb-3
                inline-block
                text-[0.68rem]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#d6a64c]
                sm:text-[0.8rem]
                sm:tracking-[0.28em]
              "
            >
              ABOUT US
            </p>

            {/* DECORATION */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                lg:justify-start
              "
            >
              <span className="h-[2px] w-[44px] bg-[#c9912a] sm:w-[60px]" />
            </div>

            {/* ==================================================
                MAIN HEADING
                SAME FONT FAMILY + SIZE STYLE AS WHO WE ARE
                ================================================== */}

            <h1
              className="
                m-0
                font-normal
                leading-[1.08]
                tracking-normal
                text-white
                text-[clamp(2rem,4vw,3.6rem)]
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontWeight: 500,
              }}
            >
              Supporting Families of
            </h1>

            <h1
              className="
                m-0
                font-normal
                leading-[1.08]
                tracking-normal
                text-[#d6a64c]
                text-[clamp(2rem,4vw,3.6rem)]
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontWeight: 500,
              }}
            >
              Indian Heroes
            </h1>

            {/* HINDI TAGLINE */}

            <p
              className="
                mt-4
                mb-5
                text-[0.9rem]
                italic
                text-white/70
                sm:text-[1rem]
              "
            >
              वीर परिवारों का संबल
            </p>

            {/* GOLD DIVIDER */}

            <div
              className="
                mx-auto
                mb-6
                h-[2px]
                w-[60px]
                bg-[#c9912a]
                lg:mx-0
              "
            />

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mb-4
                w-full
                max-w-[560px]
                text-[0.94rem]
                leading-[1.7]
                text-white/80
                sm:text-[1rem]
                lg:mx-0
              "
            >
              Silent Salute Foundation was established with a
              singular purpose: to ensure that no family of a
              serving or former defence, police, or public service
              personnel is ever left without support, dignity, or
              hope.
            </p>

            <p
              className="
                mx-auto
                mb-8
                w-full
                max-w-[560px]
                text-[0.94rem]
                leading-[1.7]
                text-white/80
                sm:text-[1rem]
                lg:mx-0
              "
            >
              We work across India to provide scholarships,
              medical assistance, financial aid, and emotional
              support — because the families behind the uniform
              deserve as much honour as those who wear it.
            </p>

            {/* ==================================================
                STATISTICS
                ================================================== */}

            <div
              className="
                mx-auto
                mb-9
                grid
                w-full
                max-w-[520px]
                grid-cols-2
                gap-x-5
                gap-y-6
                text-left
                lg:mx-0
              "
            >
              {stats.map((stat, index) => {
                const suffix = stat.value.replace(/[0-9,]/g, '');

                const value =
                  animatedValues[index]?.toLocaleString() ?? '0';

                return (
                  <div
                    key={stat.label}
                    className="border-l border-[#d6a64c]/70 pl-4"
                  >
                    <div
                      className="
                        text-[2.2rem]
                        leading-none
                        text-[#d6a64c]
                        sm:text-[2.5rem]
                      "
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                        fontWeight: 700,
                      }}
                    >
                      {value}
                      {suffix}
                    </div>

                    <div className="mt-2 text-[0.78rem] text-white/70 sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ==================================================
                BUTTONS
                ================================================== */}

            <div
              className="
                flex
                flex-col
                items-center
                gap-3
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              <Link
                href="/donate"
                className="
                  btn-gold
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  sm:w-auto
                "
              >
                Support Our Mission

                <Icon
                  name="ArrowRightIcon"
                  size={16}
                />
              </Link>

              <Link
                href="/contact"
                className="
                  btn-outline-white
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  sm:w-auto
                "
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* ==================================================
              RIGHT IMAGE SLIDER
              ================================================== */}

          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[560px]
                overflow-hidden
                rounded-[22px]
                border
                border-[#d6a64c]/80
                bg-[#0d4236]
                p-[2px]
                shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                sm:rounded-[26px]
              "
            >
              <div
                className="
                  relative
                  h-[430px]
                  overflow-hidden
                  rounded-[20px]
                  bg-[#0d4236]
                  sm:h-[500px]
                  sm:rounded-[24px]
                "
              >
                {/* ==================================================
                    SLIDES
                    ================================================== */}

                <div className="absolute inset-0">
                  {featureSlides.map((slide, index) => (
                    <img
                      key={slide.image}
                      src={slide.image}
                      alt=""
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-opacity
                        duration-700
                        ease-in-out
                      "
                      style={{
                        opacity:
                          index === currentSlide ? 1 : 0,
                      }}
                    />
                  ))}

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,27,0.18)_0%,rgba(7,20,27,0.10)_35%,rgba(7,20,27,0.48)_100%)]" />
                </div>

                {/* ==================================================
                    SLIDE INFORMATION
                    ================================================== */}

                <div className="absolute inset-x-0 bottom-0 z-10 p-2 sm:p-3">
                  <div
                    className="
                      w-full
                      rounded-[18px]
                      border-[1.75px]
                      border-[#d6a64c]/80
                      bg-[rgba(9,25,31,0.52)]
                      px-2
                      pb-4
                      pt-3
                      backdrop-blur-[2px]
                      sm:rounded-[22px]
                      sm:px-4
                      sm:pb-5
                      sm:pt-4
                    "
                  >
                    <div
                      className="
                        grid
                        grid-cols-3
                        gap-2
                        text-center
                        text-white/90
                        sm:gap-4
                      "
                    >
                      {featureSlides[currentSlide].stats.map(
                        (item) => (
                          <div
                            key={item.label}
                            className="
                              flex
                              min-w-0
                              flex-col
                              items-center
                              justify-start
                            "
                          >
                            {/* ICON */}

                            <div
                              className="
                                mb-2
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border-[2px]
                                border-[#d6a64c]/80
                                bg-[rgba(214,166,76,0.08)]
                                shadow-[0_0_18px_rgba(214,166,76,0.12)]
                                sm:mb-3
                                sm:h-16
                                sm:w-16
                              "
                            >
                              <Icon
                                name={item.icon}
                                size={24}
                                className="text-[#d6a64c] sm:h-[30px] sm:w-[30px]"
                              />
                            </div>

                            {/* LABEL */}

                            <div
                              className="
                                text-[0.5rem]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-[#d6a64c]
                                sm:text-[0.64rem]
                                sm:tracking-[0.18em]
                              "
                              style={{
                                fontFamily:
                                  '"Cormorant Garamond", Georgia, serif',
                                fontWeight: 700,
                              }}
                            >
                              {item.label}
                            </div>

                            {/* VALUE */}

                            <div className="mt-1 text-[0.48rem] uppercase tracking-[0.06em] text-white/80 sm:mt-1.5 sm:text-[0.56rem] sm:tracking-[0.1em]">
                              {item.value}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}