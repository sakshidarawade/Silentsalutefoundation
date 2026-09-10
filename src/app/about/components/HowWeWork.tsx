import React from "react";
import Icon from "@/components/ui/AppIcon";

function MonitorFollowUpIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
    </svg>
  );
}

function ResourceConnectIcon({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" />
    </svg>
  );
}

function AccessVerifyIcon({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm278-58L296-440l58-58 84 84 168-168 58 58-226 226Zm-278 58v-480 480Z" />
    </svg>
  );
}

function IdentifyFamiliesIcon({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM731-229q29-29 29-71t-29-71q-29-29-71-29t-71 29q-29 29-29 71t29 71q29 29 71 29t71-29ZM320-380Zm120-260Z" />
    </svg>
  );
}

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
                {index === 0 ? (
                  <div className="relative z-10 mb-5">
                    <IdentifyFamiliesIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                ) : index === 1 ? (
                  <div className="relative z-10 mb-5">
                    <AccessVerifyIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                ) : index === 2 ? (
                  <div className="relative z-10 mb-5">
                    <ResourceConnectIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                ) : index === 3 ? (
                  <div className="relative z-10 mb-5">
                    <MonitorFollowUpIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                ) : (
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
                )}


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