// import React from "react";
// import Icon from "@/components/ui/AppIcon";

// function MonitorFollowUpIcon({ className = "" }) {
//   return (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
//       <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
//     </svg>
//   );
// }

// function ResourceConnectIcon({ className = "" }) {
//   return (
//     <svg className={className} width="24" height="24" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//       <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" />
//     </svg>
//   );
// }

// function AccessVerifyIcon({ className = "" }) {
//   return (
//     <svg className={className} width="24" height="24" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//       <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm278-58L296-440l58-58 84 84 168-168 58 58-226 226Zm-278 58v-480 480Z" />
//     </svg>
//   );
// }

// function IdentifyFamiliesIcon({ className = "" }) {
//   return (
//     <svg className={className} width="24" height="24" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//       <path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM731-229q29-29 29-71t-29-71q-29-29-71-29t-71 29q-29 29-29 71t29 71q29 29 71 29t71-29ZM320-380Zm120-260Z" />
//     </svg>
//   );
// }

// const steps = [
//   {
//     num: "01",
//     icon: "MagnifyingGlassCircleIcon",
//     title: "Identify Families in Need",
//     desc: "Through our network of field volunteers, government liaisons, and community leaders, we identify families of serving or former defence and police personnel facing hardship.",
//   },
//   {
//     num: "02",
//     icon: "ClipboardDocumentCheckIcon",
//     title: "Assess & Verify",
//     desc: "Our team conducts careful assessments to understand each family's specific needs, including education, healthcare, financial assistance, and emotional support.",
//   },
//   {
//     num: "03",
//     icon: "HandshakeIcon",
//     title: "Connect with Resources",
//     desc: "We connect families with the right programs, partners, and support, from scholarship opportunities to medical care and rehabilitation.",
//   },
//   {
//     num: "04",
//     icon: "ChartBarIcon",
//     title: "Monitor & Follow Up",
//     desc: "We maintain long-term relationships with families, tracking progress and adapting support as their needs evolve.",
//   },
// ];

// export default function HowWeWork() {
//   return (
//     <section
//       id="how-we-work"
//       className="relative overflow-hidden bg-[#041e2e] py-16 text-white sm:py-20 lg:py-24"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#0d4236]/20 blur-[120px]" />

//       <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8">

//         {/* ================= HEADER ================= */}
//         <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">

//           <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-[#d6a64c]">
//             HOW WE WORK
//           </p>

//           <h2
//             className="mb-4 text-[clamp(2.2rem,3.5vw,3.25rem)] leading-[1.08] text-white"
//             style={{
//               fontFamily: '"Cormorant Garamond", Georgia, serif',
//               fontWeight: 600,
//             }}
//           >
//             Our Process
//           </h2>

//           {/* Gold Divider */}
//           <div className="mx-auto mb-5 h-[2px] w-[64px] bg-[#d6a64c]" />

//           <p className="mx-auto max-w-[620px] text-[0.95rem] leading-[1.7] text-white/70 sm:text-[1rem]">
//             A structured and compassionate approach that ensures every
//             family receives the right support at the right time.
//           </p>
//         </div>


//         {/* ================= PROCESS CARDS ================= */}
//         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">

//           {steps.map((step, index) => (
//             <div
//               key={step.num}
//               className="group relative"
//             >

//               {/* CARD */}
//               <div
//                 className="
//                   relative flex min-h-[340px] h-full flex-col
//                   overflow-hidden rounded-[18px]
//                   border border-[#d6a64c]/25
//                   bg-[#0d4236]
//                   px-7 py-6
//                   shadow-[0_15px_40px_rgba(0,0,0,0.16)]
//                   transition-all duration-300
//                   hover:-translate-y-[6px]
//                   hover:border-[#d6a64c]/70
//                   hover:shadow-[0_22px_50px_rgba(0,0,0,0.25)]
//                 "
//               >

//                 {/* Decorative Glow */}
//                 <div
//                   className="
//                     pointer-events-none absolute
//                     -right-12 -top-12
//                     h-[140px] w-[140px]
//                     rounded-full
//                     bg-[#d6a64c]/[0.05]
//                     blur-2xl
//                     transition-all duration-300
//                     group-hover:bg-[#d6a64c]/[0.10]
//                   "
//                 />

//                 {/* STEP NUMBER */}
//                 <div
//                   className="relative z-10 mb-5 text-[2.35rem] leading-none text-[#d6a64c]/80"
//                   style={{
//                     fontFamily: '"Cormorant Garamond", Georgia, serif',
//                     fontWeight: 600,
//                     letterSpacing: "-0.03em",
//                   }}
//                 >
//                   {step.num}
//                 </div>


//                 {/* ICON */}
//                 {index === 0 ? (
//                   <div className="relative z-10 mb-5">
//                     <IdentifyFamiliesIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
//                   </div>
//                 ) : index === 1 ? (
//                   <div className="relative z-10 mb-5">
//                     <AccessVerifyIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
//                   </div>
//                 ) : index === 2 ? (
//                   <div className="relative z-10 mb-5">
//                     <ResourceConnectIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
//                   </div>
//                 ) : index === 3 ? (
//                   <div className="relative z-10 mb-5">
//                     <MonitorFollowUpIcon className="h-11 w-11 text-[#d6a64c] transition-transform duration-300 group-hover:scale-110" />
//                   </div>
//                 ) : (
//                   <div
//                     className="
//                       relative z-10 mb-5
//                       flex h-[60px] w-[60px]
//                       items-center justify-center
//                       rounded-full
//                       border border-[#d6a64c]/70
//                       bg-[#d6a64c]/[0.07]
//                       transition-all duration-300
//                       group-hover:border-[#d6a64c]
//                       group-hover:bg-[#d6a64c]/[0.12]
//                     "
//                   >
//                     <Icon
//                       name={step.icon}
//                       size={24}
//                       className="text-[#d6a64c]"
//                     />
//                   </div>
//                 )}


//                 {/* CONTENT */}
//                 <div className="relative z-10">

//                   <h3
//                     className="
//                       mb-3
//                       text-[1.35rem]
//                       leading-[1.1]
//                       text-white
//                     "
//                     style={{
//                       fontFamily: '"Cormorant Garamond", Georgia, serif',
//                       fontWeight: 600,
//                     }}
//                   >
//                     {step.title}
//                   </h3>

//                   <p className="text-[0.88rem] leading-[1.7] text-white/65">
//                     {step.desc}
//                   </p>

//                 </div>


//                 {/* BOTTOM GOLD LINE */}
//                 <div
//                   className="
//                     absolute bottom-0 left-7 right-7
//                     h-[2px]
//                     origin-left
//                     scale-x-0
//                     bg-[#d6a64c]
//                     transition-transform duration-500
//                     group-hover:scale-x-100
//                   "
//                 />

//               </div>


//               {/* CONNECTING LINE */}
//               {index < steps.length - 1 && (
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute right-[-12px] top-1/2
//                     z-20 hidden
//                     h-px w-6
//                     bg-[#d6a64c]/40
//                     lg:block
//                   "
//                 />
//               )}

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import Link from "@/components/ui/Link";
import Icon from "@/components/ui/AppIcon";

/* =========================================================
   TYPES
========================================================= */

type StepType =
  | "custom"
  | "identify"
  | "verify"
  | "resource"
  | "monitor";

interface Step {
  num: string;
  type: StepType;
  title: string;
  desc: string;
}

/* =========================================================
   CUSTOM ICONS
========================================================= */

function CollectDonationsIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path d="M336-120q-91 0-153.5-62.5T120-336q0-38 13-74t37-65l142-171-97-194h530l-97 194 142 171q24 29 37 65t13 74q0 91-63 153.5T624-120H336Zm144-200q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320Zm-95-360h190l40-80H345l40 80Zm-49 480h288q57 0 96.5-39.5T760-336q0-24-8.5-46.5T728-423L581-600H380L232-424q-15 18-23.5 41t-8.5 47q0 57 39.5 96.5T336-200Z" />
    </svg>
  );
}

function InvestResponsiblyIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
    </svg>
  );
}

function AllocateDistributionIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80Zm221.5-198.5Q510-807 510-820t-8.5-21.5Q493-850 480-850t-21.5 8.5Q450-833 450-820t8.5 21.5Q467-790 480-790t21.5-8.5Zm77 700Q520-157 520-240t58.5-141.5Q637-440 720-440t141.5 58.5Q920-323 920-240T861.5-98.5Q803-40 720-40T578.5-98.5ZM720-100q54 0 93.5-36t45.5-89q-5 2-9.5 3.5T840-220h-40q-17 0-28.5-11.5T760-260v-20h-80v-40q0-17 11.5-28.5T720-360h20q0-5 1-9.5t3-8.5q-6-1-12-1.5t-12-.5q-58 0-99 41t-41 99h80q33 0 56.5 23.5T740-160v20h-60v34q10 3 19.5 4.5T720-100Z" />
    </svg>
  );
}

function MonitorFollowUpIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
    </svg>
  );
}

function ResourceConnectIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 -960 960 960"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" />
    </svg>
  );
}

function AccessVerifyIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 -960 960 960"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm278-58L296-440l58-58 84 84 168-168 58 58-226 226Zm-278 58v-480 480Z" />
    </svg>
  );
}

function IdentifyFamiliesIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 -960 960 960"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM731-229q29-29 29-71t-29-71q-29-29-71-29t-71 29q-29 29-29 71t29 71q29 29 71 29t71-29ZM320-380Zm120-260Z" />
    </svg>
  );
}

/* =========================================================
   PROCESS STEPS
========================================================= */

const steps: Step[] = [
  {
    num: "01",
    type: "custom",
    title: "Collect Donations",
    desc: "We collect donations from individuals, organizations, and partners committed to supporting the families who stood behind the nation.",
  },
  {
    num: "02",
    type: "custom",
    title: "Invest Responsibly",
    desc: "Donations are responsibly invested in appropriate financial avenues to preserve and grow the resources entrusted to us.",
  },
  {
    num: "03",
    type: "custom",
    title: "Allocate for Distribution",
    desc: "The returns from these investments are then allocated towards the causes and families that need support.",
  },
  {
    num: "04",
    type: "identify",
    title: "Identify Families in Need",
    desc: "Through our network of field volunteers, government liaisons, and community leaders, we identify families of serving and former defence and police personnel facing hardship.",
  },
  {
    num: "05",
    type: "verify",
    title: "Assess & Verify",
    desc: "We carefully assess and verify each family's circumstances to understand their specific needs across education, healthcare, financial assistance, and emotional support.",
  },
  {
    num: "06",
    type: "resource",
    title: "Connect with Resources",
    desc: "We connect verified families with the right programs and resources, from scholarships and medical care to rehabilitation and other essential support.",
  },
  {
    num: "07",
    type: "monitor",
    title: "Monitor & Follow Up",
    desc: "We maintain long-term relationships with supported families, monitor their progress, and adapt our assistance as their needs evolve.",
  },
];

/* =========================================================
   CARD COMPONENT
========================================================= */

function ProcessCard({
  step,
  index,
}: {
  step: Step;
  index: number;
}) {
  return (
    <div className="group relative h-full">

      {/* CARD */}

      <div
        className="
          relative flex h-full min-h-[340px] flex-col
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

        {/* DECORATIVE GLOW */}

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
          className="
            relative z-10 mb-5
            text-[2.35rem] leading-none
            text-[#d6a64c]/80
          "
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
        >
          {step.num}
        </div>

        {/* ICON */}

        <div className="relative z-10 mb-5">
          {step.type === "custom" && step.num === "01" ? (
            <CollectDonationsIcon
              className="
                h-11 w-11
                text-[#d6a64c]
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          ) : step.type === "custom" && step.num === "02" ? (
            <InvestResponsiblyIcon
              className="
                h-11 w-11
                text-[#d6a64c]
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          ) : step.type === "custom" && step.num === "03" ? (
            <AllocateDistributionIcon
              className="
                h-11 w-11
                text-[#d6a64c]
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          ) : step.type === "identify" ? (
            <IdentifyFamiliesIcon
              className="
                h-11 w-11
                text-[#d6a64c]
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          ) : step.type === "verify" ? (
            <AccessVerifyIcon
              className="
                h-11 w-11
                text-[#d6a64c]
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          ) : step.type === "resource" ? (
            <ResourceConnectIcon
              className="
                h-11 w-11
                text-[#d6a64c]
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          ) : step.type === "monitor" ? (
            <MonitorFollowUpIcon
              className="
                h-11 w-11
                text-[#d6a64c]
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          ) : null}
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

      {/* CONNECTING LINE — FIRST ROW */}

      {index < 3 && (
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

      {/* CONNECTING LINE — SECOND ROW */}

      {index >= 4 && index < 6 && (
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
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function HowWeWork() {

  /* 
     false = Mobile shows first 4 cards
     true  = Mobile shows all 7 cards
  */
  const [showAllMobile, setShowAllMobile] = useState(false);

  const firstRow = steps.slice(0, 4);
  const secondRow = steps.slice(4, 7);

  return (
    <section
      id="how-we-work"
      className="
        relative overflow-hidden
        bg-[#041e2e]
        py-16
        text-white
        sm:py-20
        lg:py-24
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-[500px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#0d4236]/20
          blur-[120px]
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          max-w-[1440px]
          px-6
          lg:px-8
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mx-auto mb-12
            max-w-3xl
            text-center
            lg:mb-14
          "
        >

          <p
            className="
              mb-3
              text-[0.78rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#d6a64c]
            "
          >
            HOW WE WORK
          </p>

          <h2
            className="
              mb-4
              text-[clamp(2.2rem,3.5vw,3.25rem)]
              leading-[1.08]
              text-white
            "
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
            }}
          >
            Our Process
          </h2>

          {/* GOLD DIVIDER */}

          <div
            className="
              mx-auto mb-5
              h-[2px] w-[64px]
              bg-[#d6a64c]
            "
          />

          <p
            className="
              mx-auto
              max-w-[620px]
              text-[0.95rem]
              leading-[1.7]
              text-white/70
              sm:text-[1rem]
            "
          >
            A structured and compassionate approach that ensures every
            family receives the right support at the right time.
          </p>

        </div>

        {/* =================================================
            FIRST ROW — 01 TO 04

            ALWAYS VISIBLE
            BOTH MOBILE + DESKTOP
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {firstRow.map((step, index) => (
            <ProcessCard
              key={step.num}
              step={step}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            SECOND ROW — 05 TO 07

            MOBILE:
            hidden initially
            visible when View More clicked

            TABLET/DESKTOP:
            ALWAYS VISIBLE
        ================================================= */}

        <div
          className={`
            mt-5
            flex
            flex-col
            gap-5
            md:grid
            md:grid-cols-2
            lg:mt-6
            lg:flex
            lg:flex-row
            lg:justify-center
            lg:gap-6

            ${
              showAllMobile
                ? "flex"
                : "hidden md:grid"
            }
          `}
        >
          {secondRow.map((step, index) => (
            <div
              key={step.num}
              className="
                w-full
                lg:w-[calc((100%-4.5rem)/4)]
              "
            >
              <ProcessCard
                step={step}
                index={index + 4}
              />
            </div>
          ))}
        </div>

        {/* =================================================
            MOBILE VIEW MORE / VIEW LESS BUTTON

            lg:hidden = NEVER SHOWN ON DESKTOP
        ================================================= */}

        <div className="mt-10 flex justify-center lg:hidden">

          <button
            type="button"
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="
              btn-gold
              inline-flex
              items-center
              gap-2
            "
            aria-expanded={showAllMobile}
          >
            {showAllMobile ? "View Less" : "View More"}

            <Icon
              name={
                showAllMobile
                  ? "ChevronUpIcon"
                  : "ChevronDownIcon"
              }
              size={16}
            />
          </button>

        </div>

      </div>
    </section>
  );
}