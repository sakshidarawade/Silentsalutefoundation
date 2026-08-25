import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    num: '01',
    icon: 'MagnifyingGlassIcon',
    title: 'Understand the Need',
    desc: 'We understand each family’s situation and what support they need.',
  },
  {
    num: '02',
    icon: 'HandshakeIcon',
    title: 'Provide Support',
    desc: 'We connect families with the right help, resources and opportunities.',
  },
  {
    num: '03',
    icon: 'BuildingOffice2Icon',
    title: 'Build a Better Future',
    desc: 'We help families move forward with dignity, confidence and hope.',
  },
];

export default function HowWeCreateImpact() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-14 text-center">

          <p className="section-label mb-3">
            HOW WE CREATE IMPACT
          </p>

          <h2
            className="mb-3 text-[clamp(2.4rem,3.8vw,4.2rem)] leading-[1] tracking-[-0.04em] text-foreground"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            Simple. Thoughtful. Lasting.
          </h2>

          <p className="mx-auto max-w-lg text-muted-foreground">
            Our approach is simple: understand what families need, provide the
            right support and help them build a better future.
          </p>

          <div className="divider-gold mx-auto mt-5" />

        </div>

        {/* =====================================================
            IMPACT STEPS
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {steps.map((step, i) => (

            <div
              key={step.num}
              className="relative"
            >

              {/* =================================================
                  CONNECTOR LINE — DESKTOP
              ================================================= */}

              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] top-10 z-0 hidden h-px bg-gradient-to-r from-accent/60 to-accent/10 md:block" />
              )}

              {/* =================================================
                  STEP CARD
              ================================================= */}

              <div className="group relative z-10 flex min-h-[310px] flex-col items-center rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:border-accent hover:shadow-xl">

                {/* STEP NUMBER */}

                <div
                  className="mb-4 text-4xl leading-none text-accent"
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {step.num}
                </div>

                {/* ICON */}

                <div className="icon-circle mb-5 transition-all group-hover:border-accent group-hover:bg-accent">

                  <Icon
                    name={step.icon as 'MagnifyingGlassIcon'}
                    size={28}
                    className="text-accent group-hover:text-white"
                  />

                </div>

                {/* STEP HEADING */}

                <h3
                  className="mb-3 text-[clamp(1.8rem,2.2vw,2.2rem)] leading-[1] tracking-[-0.03em] text-foreground"
                  style={{
                    fontFamily: 'Cormant Garamond, Georgia, serif',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {step.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}