import React from "react";
import Icon from "@/components/ui/AppIcon";

const steps = [
  {
    num: "01",
    icon: "MagnifyingGlassCircleIcon",
    title: "Identify Families in Need",
    desc: "Through our network of field volunteers, government liaisons, and community leaders, we identify families of serving or former defence and police personnel facing hardship.",
  },
  {
    num: "02",
    icon: "ClipboardDocumentCheckIcon",
    title: "Assess & Verify",
    desc: "Our team conducts careful assessments to understand each family's specific needs, including education, healthcare, financial assistance, and emotional support.",
  },
  {
    num: "03",
    icon: "HandshakeIcon",
    title: "Connect with Resources",
    desc: "We connect families with the right programs, partners, and support, from scholarship opportunities to medical care and rehabilitation.",
  },
  {
    num: "04",
    icon: "ChartBarIcon",
    title: "Monitor & Follow Up",
    desc: "We maintain long-term relationships with families, tracking progress and adapting support as their needs evolve.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-[#041e2e] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#0d4236]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">

          <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-[#d6a64c]">
            HOW WE WORK
          </p>

          <h2
            className="mb-4 text-[clamp(2.2rem,3.5vw,3.25rem)] leading-[1.08] text-white"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
            }}
          >
            Our Process
          </h2>

          {/* Gold Divider */}
          <div className="mx-auto mb-5 h-[2px] w-[64px] bg-[#d6a64c]" />

          <p className="mx-auto max-w-[620px] text-[0.95rem] leading-[1.7] text-white/70 sm:text-[1rem]">
            A structured and compassionate approach that ensures every
            family receives the right support at the right time.
          </p>
        </div>


        {/* ================= PROCESS CARDS ================= */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {steps.map((step, index) => (
            <div
              key={step.num}
              className="group relative"
            >

              {/* CARD */}
              <div
                className="
                  relative flex min-h-[340px] h-full flex-col
                  overflow-hidden rounded-[18px]
                  border border-[#d6a64c]/25
                  bg-[#0d4236]
                  px-7 py-6
                  shadow-[0_15px_40px_rgba(0,0,0,0.16)]
                  transition-all duration-300
                  hover:-translate-y-[6px]
                  hover:border-[#d6a64c]/70
                  hover:shadow-[0_22px_50px_rgba(0,0,0,0.25)]
                "
              >

                {/* Decorative Glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-12 -top-12
                    h-[140px] w-[140px]
                    rounded-full
                    bg-[#d6a64c]/[0.05]
                    blur-2xl
                    transition-all duration-300
                    group-hover:bg-[#d6a64c]/[0.10]
                  "
                />

                {/* STEP NUMBER */}
                <div
                  className="relative z-10 mb-5 text-[2.35rem] leading-none text-[#d6a64c]/80"
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step.num}
                </div>


                {/* ICON */}
                <div
                  className="
                    relative z-10 mb-5
                    flex h-[60px] w-[60px]
                    items-center justify-center
                    rounded-full
                    border border-[#d6a64c]/70
                    bg-[#d6a64c]/[0.07]
                    transition-all duration-300
                    group-hover:border-[#d6a64c]
                    group-hover:bg-[#d6a64c]/[0.12]
                  "
                >
                  <Icon
                    name={step.icon}
                    size={24}
                    className="text-[#d6a64c]"
                  />
                </div>


                {/* CONTENT */}
                <div className="relative z-10">

                  <h3
                    className="
                      mb-3
                      text-[1.35rem]
                      leading-[1.1]
                      text-white
                    "
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 600,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-[0.88rem] leading-[1.7] text-white/65">
                    {step.desc}
                  </p>

                </div>


                {/* BOTTOM GOLD LINE */}
                <div
                  className="
                    absolute bottom-0 left-7 right-7
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-[#d6a64c]
                    transition-transform duration-500
                    group-hover:scale-x-100
                  "
                />

              </div>


              {/* CONNECTING LINE */}
              {index < steps.length - 1 && (
                <div
                  className="
                    pointer-events-none
                    absolute right-[-12px] top-1/2
                    z-20 hidden
                    h-px w-6
                    bg-[#d6a64c]/40
                    lg:block
                  "
                />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}