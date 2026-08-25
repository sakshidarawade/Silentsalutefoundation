import React from 'react';
import Link from '@/components/ui/Link';

const ways = [
  {
    icon: '/assets/images/icon9.png',
    title: 'Volunteer',
    desc: 'Contribute your time and skills. Help us reach more families through on-ground programs, events, and awareness drives.',
    cta: 'Volunteer Now',
    href: '/contact#volunteer',
  },
  {
    icon: '/assets/images/icon10.png',
    title: 'Donate',
    desc: 'Every rupee goes directly to families. Fund education, healthcare, and rehabilitation with full transparency.',
    cta: 'Donate Today',
    href: '/donate',
    primary: true,
  },
  {
    icon: '/assets/images/icon7.png',
    title: 'Partner',
    desc: 'Corporate CSR, institutional partnerships, or community collaborations — build a lasting legacy with us.',
    cta: 'Become a Partner',
    href: '/contact#partner',
  },
];

export default function JoinSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 text-[#07172a] sm:py-20">
      <div className="relative z-10 mx-auto max-w-[1160px] px-5 sm:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-2 text-[0.82rem] font-semibold uppercase tracking-[0.24em] text-[#ad842d]">
            GET INVOLVED
          </p>

          <h2
            className="mb-3 text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.04em] text-[#07172a]"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 700,
            }}
          >
            Be Part of Something Meaningful
          </h2>

          <div className="mx-auto mb-4 h-[3px] w-10 bg-[#c99b2e]" />

          <p className="mx-auto max-w-lg text-muted-foreground">
            There are many ways to stand with the families who stood behind
            the nation. Find yours.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ways.map((w) => (
            <div
              key={w.title}
              className="
                group
                flex
                min-h-[380px]
                flex-col
                items-center
                rounded-2xl
                border
                border-[#dfd2bd]
                bg-[#f6f0e8]
                p-8
                text-center
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:shadow-[0_18px_40px_rgba(7,23,42,0.12)]
              "
            >
              {/* ================= ICON ================= */}

              <div
                className="
                  mb-7
                  flex
                  h-[88px]
                  w-[88px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c99b2e]
                  bg-transparent
                  transition-all
                  duration-300
                  ease-out
                  group-hover:-translate-y-1
                  group-hover:shadow-[0_8px_20px_rgba(201,155,46,0.18)]
                "
              >
                <img
                  src={w.icon}
                  alt={w.title}
                  className="
                    h-[62px]
                    w-[62px]
                    object-contain
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:scale-110
                  "
                />
              </div>

              {/* ================= TITLE ================= */}

              <h3
                className="
                  mb-5
                  text-[2rem]
                  leading-[0.95]
                  tracking-[-0.03em]
                  text-[#07172a]
                "
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 700,
                }}
              >
                {w.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mb-8
                  mt-1
                  max-w-[280px]
                  text-sm
                  leading-relaxed
                  text-[#555555]
                "
              >
                {w.desc}
              </p>

              {/* ================= CTA ================= */}

              <Link
                href={w.href}
                className="
                  mt-auto
                  rounded-md
                  border
                  border-[#c99b2e]
                  px-6
                  py-2.5
                  text-[0.8rem]
                  font-semibold
                  text-[#07172a]
                  transition-all
                  duration-300
                  hover:bg-[#c99b2e]
                  hover:text-white
                "
              >
                {w.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}