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
      { label: 'EDUCATION', value: 'Brighter Futures', icon: 'AcademicCapIcon' },
      { label: 'HEALTHCARE', value: 'Health & Healing', icon: 'PlusIcon' },
      { label: 'HOPE', value: 'Stronger Together', icon: 'HeartIcon' },
    ],
  },
  {
    image: '/assets/images/about2.png',
    stats: [
      { label: 'EDUCATION', value: 'Brighter Futures', icon: 'AcademicCapIcon' },
      { label: 'HEALTHCARE', value: 'Health & Healing', icon: 'PlusIcon' },
      { label: 'HOPE', value: 'Stronger Together', icon: 'HeartIcon' },
    ],
  },
  {
    image: '/assets/images/about3.png',
    stats: [
      { label: 'EDUCATION', value: 'Brighter Futures', icon: 'AcademicCapIcon' },
      { label: 'HEALTHCARE', value: 'Health & Healing', icon: 'PlusIcon' },
      { label: 'HOPE', value: 'Stronger Together', icon: 'HeartIcon' },
    ],
  },
  {
    image: '/assets/images/about4.png',
    stats: [
      { label: 'EDUCATION', value: 'Brighter Futures', icon: 'AcademicCapIcon' },
      { label: 'HEALTHCARE', value: 'Health & Healing', icon: 'PlusIcon' },
      { label: 'HOPE', value: 'Stronger Together', icon: 'HeartIcon' },
    ],
  },
];

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureSlides.length);
    }, 3500);

    return () => clearInterval(sliderInterval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameIds: number[] = [];

    const animateCounters = () => {
      setAnimatedValues(stats.map(() => 0));

      const startTime = performance.now();
      const duration = 1500;

      stats.forEach((stat, index) => {
        const target = Number(String(stat.value).replace(/[^0-9]/g, ''));

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
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
      { threshold: 0.35 }
    );

    observer.observe(section);

    if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom > 0) {
      animateCounters();
    }

    return () => {
      observer.disconnect();
      frameIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-32 pb-20 relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #08111A 0%, #0D1B2A 50%, #112236 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(201,145,42,0.25) 0%, transparent 55%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="pointer-events-none absolute bottom-[-30px] left-[-10px] hidden h-[420px] w-[420px] opacity-30 lg:block">
        <img
          src="/assets/images/watermark3.png"
          alt=""
          className="h-full w-full object-contain object-left-bottom grayscale brightness-150 contrast-125"
        />
      </div>

      <div className="pointer-events-none absolute right-[-20px] top-[-10px] hidden h-[420px] w-[420px] opacity-25 lg:block">
        <img
          src="/assets/images/watermark4.png"
          alt=""
          className="h-full w-full object-contain object-right-top"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1.05fr]">
          <div className="max-w-[860px] justify-self-start text-left lg:ml-[70px]">
            <p className="section-label mb-4">ABOUT US</p>

            <h1
              className="mb-0 text-[clamp(3.1rem,4.5vw,5rem)] leading-[0.9] text-white"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
              }}
            >
              Supporting Families of
            </h1>
            <h1
              className="mb-4 text-[clamp(3.1rem,4.5vw,5rem)] leading-[0.9] text-[#d6a64c]"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
              }}
            >
              Indian Heroes
            </h1>

            <p className="mb-6 text-[1.05rem] italic text-white/70">
              वीर परिवारों का संबल
            </p>

            <div className="divider-gold mb-7" />

            <p className="mb-5 max-w-[560px] text-[1.02rem] leading-[1.8] text-white/80">
              Silent Salute Foundation was established with a singular purpose: to ensure that no family of a serving or former defence, police, or public service personnel is ever left without support, dignity, or hope.
            </p>

            <p className="mb-8 max-w-[560px] text-[1.02rem] leading-[1.8] text-white/80">
              We work across India to provide scholarships, medical assistance, financial aid, and emotional support — because the families behind the uniform deserve as much honour as those who wear it.
            </p>

            <div className="mb-10 grid max-w-[520px] grid-cols-2 gap-x-5 gap-y-6">
              {stats.map((stat, index) => {
                const suffix = stat.value.replace(/[0-9,]/g, '');
                const value = animatedValues[index]?.toLocaleString() ?? '0';

                return (
                  <div key={stat.label} className="border-l border-[#d6a64c]/70 pl-4">
                    <div
                      className="text-[3rem] leading-none text-[#d6a64c]"
                      style={{
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontWeight: 700,
                      }}
                    >
                      {value}
                      {suffix}
                    </div>
                    <div className="mt-2 text-sm text-white/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-gold inline-flex items-center gap-2">
                Support Our Mission
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-white">
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="relative flex w-full items-center justify-center">
            <div
              className="relative overflow-hidden rounded-[26px] border border-[#d6a64c]/80 bg-[#0d4236] p-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              style={{
                width: '100%',
                maxWidth: '560px',
                minHeight: '500px',
              }}
            >
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-[24px] bg-[#0d4236]">
                <div className="absolute inset-0">
                  {featureSlides.map((slide, index) => (
                    <img
                      key={slide.image}
                      src={slide.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out"
                      style={{ opacity: index === currentSlide ? 1 : 0 }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,27,0.18)_0%,rgba(7,20,27,0.10)_35%,rgba(7,20,27,0.48)_100%)]" />
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-2">
                  <div
                    className="w-full rounded-[22px] border-[1.75px] border-[#d6a64c]/80 bg-[rgba(9,25,31,0.52)] px-4 pb-5 pt-4 backdrop-blur-[2px]"
                    style={{ minHeight: '180px' }}
                  >
                    <div className="grid grid-cols-3 gap-4 text-center text-white/90">
                      {featureSlides[currentSlide].stats.map((item) => (
                        <div key={item.label} className="flex flex-col items-center justify-start">
                          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-[2px] border-[#d6a64c]/80 bg-[rgba(214,166,76,0.08)] shadow-[0_0_18px_rgba(214,166,76,0.12)]">
                            <Icon name={item.icon} size={30} className="text-[#d6a64c]" />
                          </div>

                          <div
                            className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#d6a64c]"
                            style={{
                              fontFamily: 'Cormorant Garamond, Georgia, serif',
                              fontWeight: 700,
                            }}
                          >
                            {item.label}
                          </div>

                          <div className="mt-1.5 text-[0.56rem] uppercase tracking-[0.1em] text-white/80">
                            {item.value}
                          </div>
                        </div>
                      ))}
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