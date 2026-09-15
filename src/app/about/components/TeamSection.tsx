// import React from 'react';

// const team = [
//   {
//     name: 'Ketan Patwardhan',
//     role: 'Governing Council',
//     bio: '35 years in the Indian Army. Founded Silent Salute after witnessing the struggles of families left behind.',
//     bg: 'linear-gradient(135deg, #0d4236 0%, #123f50 100%)',
//   },
//   {
//     name: 'Ashish Ganju',
//     role: 'Governing Council',
//     bio: 'Former IAS officer with 20 years in social welfare policy. Drives program strategy and government partnerships.',
//     bg: 'linear-gradient(135deg, #123f50 0%, #0d4236 100%)',
//   },
//   {
//     name: 'Hemant Kumar',
//     role: 'Governing Council',
//     bio: 'Ex-Army Colonel overseeing ground-level family assessments and outreach across 15 states.',
//     bg: 'linear-gradient(135deg, #0d4236 0%, #102d3d 100%)',
//   },
//   {
//     name: 'Navneet',
//     role: 'Governing Council',
//     bio: 'Education specialist with 12 years experience running scholarship programs for underprivileged youth.',
//     bg: 'linear-gradient(135deg, #102d3d 0%, #0d4236 100%)',
//   },
//   {
//     name: 'Shiva',
//     role: 'Governing Council',
//     bio: 'MBBS, MD. Organizes medical camps and manages emergency healthcare fund disbursements.',
//     bg: 'linear-gradient(135deg, #0f3548 0%, #123f50 100%)',
//   },
//   {
//     name: 'Meena Tiwari',
//     role: 'Governing Council',
//     bio: 'Social worker with deep expertise in trauma counseling and family rehabilitation support.',
//     bg: 'linear-gradient(135deg, #0d4236 0%, #102f35 100%)',
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section
//       id="team"
//       className="
//         relative
//         overflow-hidden
//         bg-[#041e2e]
//         py-16
//         text-white
//         sm:py-20
//         lg:py-24
//       "
//     >
//       {/* Background Glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-0
//           h-[500px]
//           w-[700px]
//           -translate-x-1/2
//           rounded-full
//           bg-[#0d4236]/20
//           blur-[120px]
//         "
//       />

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           max-w-[1500px]
//           px-4
//           sm:px-6
//           lg:px-8
//         "
//       >
//         {/* ================= HEADER ================= */}

//         <div
//           className="
//             mx-auto
//             mb-10
//             max-w-3xl
//             text-center
//             sm:mb-12
//           "
//         >
//           {/* Eyebrow */}
//           <p
//             className="
//               mb-3
//               uppercase
//               text-[12px]
//               font-semibold
//               tracking-[0.3em]
//               text-[#d6a64c]
//               sm:text-[13px]
//             "
//             style={{
//               fontFamily:
//                 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//             }}
//           >
//             OUR TEAM
//           </p>

//           {/* Heading */}
//           <h2
//             className="
//               mb-3
//               text-[clamp(2rem,3.2vw,3rem)]
//               font-semibold
//               leading-[1.08]
//               tracking-[-0.02em]
//               text-white
//             "
//             style={{
//               fontFamily: '"Cormorant Garamond", Georgia, serif',
//             }}
//           >
//             Leaders & Team
//           </h2>

//           {/* Gold Divider */}
//           <div
//             className="
//               mx-auto
//               mb-4
//               h-[2px]
//               w-[72px]
//               bg-[#d6a64c]
//             "
//           />

//           {/* Description */}
//           <p
//             className="
//               mx-auto
//               max-w-[650px]
//               text-[14px]
//               leading-[1.75]
//               text-white/65
//               sm:text-[15px]
//             "
//             style={{
//               fontFamily:
//                 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//             }}
//           >
//             Driven by purpose, guided by experience, united in commitment to
//             every family we serve.
//           </p>
//         </div>

//         {/* ================= TEAM GRID ================= */}

//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-5
//             sm:grid-cols-2
//             lg:grid-cols-3
//             lg:gap-6
//           "
//         >
//           {team.map((member) => {
//             const initial =
//               member.name
//                 .split(' ')
//                 .filter(Boolean)[0]
//                 ?.charAt(0)
//                 .toUpperCase() || '';

//             return (
//               <article
//                 key={member.name}
//                 className="
//                   group
//                   relative
//                   flex
//                   flex-col
//                   overflow-hidden
//                   rounded-[16px]
//                   border
//                   border-[#d6a64c]/25
//                   bg-[#0d4236]
//                   shadow-[0_14px_35px_rgba(0,0,0,0.16)]
//                   transition-all
//                   duration-500
//                   hover:-translate-y-1.5
//                   hover:border-[#d6a64c]/65
//                   hover:shadow-[0_20px_45px_rgba(0,0,0,0.26)]
//                 "
//               >
//                 {/* ================= TOP VISUAL ================= */}

//                 <div
//                   className="
//                     relative
//                     flex
//                     h-[160px]
//                     shrink-0
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     sm:h-[175px]
//                   "
//                   style={{
//                     background: member.bg,
//                   }}
//                 >
//                   {/* Background Gold Glow */}
//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       right-[-60px]
//                       top-[-70px]
//                       h-[160px]
//                       w-[160px]
//                       rounded-full
//                       bg-[#d6a64c]/[0.08]
//                       blur-3xl
//                       transition-all
//                       duration-500
//                       group-hover:bg-[#d6a64c]/[0.15]
//                     "
//                   />

//                   {/* Bottom Fade */}
//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       bottom-0
//                       left-0
//                       right-0
//                       h-[60px]
//                     "
//                     style={{
//                       background:
//                         'linear-gradient(to top, rgba(13,66,54,0.92), transparent)',
//                     }}
//                   />

//                   {/* Initial Circle */}
//                   <div
//                     className="
//                       relative
//                       z-10
//                       flex
//                       h-[70px]
//                       w-[70px]
//                       items-center
//                       justify-center
//                       rounded-full
//                       border-[2px]
//                       border-[#d6a64c]/80
//                       bg-[#d6a64c]/[0.10]
//                       shadow-[0_0_24px_rgba(214,166,76,0.10)]
//                       transition-all
//                       duration-500
//                       group-hover:scale-105
//                       group-hover:border-[#d6a64c]
//                       group-hover:bg-[#d6a64c]/[0.16]
//                     "
//                   >
//                     <span
//                       className="
//                         text-[29px]
//                         font-semibold
//                         leading-none
//                         text-white
//                       "
//                       style={{
//                         fontFamily:
//                           '"Cormorant Garamond", Georgia, serif',
//                       }}
//                     >
//                       {initial}
//                     </span>
//                   </div>

//                   {/* Gold Accent */}
//                   <div
//                     className="
//                       absolute
//                       bottom-3
//                       left-1/2
//                       z-10
//                       h-[2px]
//                       w-[34px]
//                       -translate-x-1/2
//                       bg-[#d6a64c]
//                       transition-all
//                       duration-500
//                       group-hover:w-[54px]
//                     "
//                   />
//                 </div>

//                 {/* ================= CONTENT ================= */}

//                 <div
//                   className="
//                     relative
//                     flex
//                     flex-1
//                     flex-col
//                     p-5
//                     sm:p-6
//                   "
//                 >
//                   {/* Decorative Glow */}
//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       bottom-[-80px]
//                       right-[-60px]
//                       h-[150px]
//                       w-[150px]
//                       rounded-full
//                       bg-[#d6a64c]/[0.035]
//                       blur-3xl
//                     "
//                   />

//                   <div className="relative z-10 flex h-full flex-col">
//                     {/* Member Name */}
//                     <h3
//                       className="
//                         mb-2
//                         text-[22px]
//                         font-semibold
//                         leading-[1.08]
//                         tracking-[-0.015em]
//                         text-white
//                         sm:text-[23px]
//                       "
//                       style={{
//                         fontFamily:
//                           '"Cormorant Garamond", Georgia, serif',
//                       }}
//                     >
//                       {member.name}
//                     </h3>

//                     {/* Role */}
//                     <p
//                       className="
//                         mb-3
//                         text-[10px]
//                         font-semibold
//                         uppercase
//                         leading-[1.45]
//                         tracking-[0.14em]
//                         text-[#d6a64c]
//                         sm:text-[11px]
//                       "
//                       style={{
//                         fontFamily:
//                           'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                       }}
//                     >
//                       {member.role}
//                     </p>

//                     {/* Divider */}
//                     <div
//                       className="
//                         mb-3
//                         h-px
//                         w-[38px]
//                         bg-[#d6a64c]/55
//                         transition-all
//                         duration-500
//                         group-hover:w-[60px]
//                       "
//                     />

//                     {/* Bio */}
//                     <p
//                       className="
//                         text-[13px]
//                         leading-[1.65]
//                         text-white/65
//                         sm:text-[14px]
//                       "
//                       style={{
//                         fontFamily:
//                           'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                       }}
//                     >
//                       {member.bio}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bottom Hover Line */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-5
//                     right-5
//                     h-[2px]
//                     origin-left
//                     scale-x-0
//                     bg-[#d6a64c]
//                     transition-transform
//                     duration-500
//                     group-hover:scale-x-100
//                   "
//                 />
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';

const team = [
  {
    name: 'Ketan Patwardhan',
    role: 'Governing Council',
    bio: '30+ years experience in Talent Acquisition across Industries.',
    linkedin: 'your-linkedin-id',
    bg: 'linear-gradient(135deg, #0d4236 0%, #123f50 100%)',
  },
  {
    name: 'Ashish Ganju',
    role: 'Governing Council',
    bio: 'Former IAS officer with 20 years in social welfare policy. Drives program strategy and government partnerships.',
    linkedin: 'your-linkedin-id',
    bg: 'linear-gradient(135deg, #123f50 0%, #0d4236 100%)',
  },
  {
    name: 'Hemant Kumar',
    role: 'Governing Council',
    bio: 'Ex-Army Colonel overseeing ground-level family assessments and outreach across 15 states.',
    linkedin: 'your-linkedin-id',
    bg: 'linear-gradient(135deg, #0d4236 0%, #102d3d 100%)',
  },
  {
    name: 'Navneet',
    role: 'Governing Council',
    bio: 'Education specialist with 12 years experience running scholarship programs for underprivileged youth.',
    linkedin: 'your-linkedin-id',
    bg: 'linear-gradient(135deg, #102d3d 0%, #0d4236 100%)',
  },
  {
    name: 'Shiva',
    role: 'Governing Council',
    bio: 'MBBS, MD. Organizes medical camps and manages emergency healthcare fund disbursements.',
    linkedin: 'your-linkedin-id',
    bg: 'linear-gradient(135deg, #0f3548 0%, #123f50 100%)',
  },
  {
    name: 'Meena Tiwari',
    role: 'Governing Council',
    bio: 'Social worker with deep expertise in trauma counseling and family rehabilitation support.',
    linkedin: 'your-linkedin-id',
    bg: 'linear-gradient(135deg, #0d4236 0%, #102f35 100%)',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="
        relative
        overflow-hidden
        bg-[#041e2e]
        py-16
        text-white
        sm:py-20
        lg:py-24
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#0d4236]/20
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
          "
        >
          {/* Eyebrow */}

          <p
            className="
              mb-3
              uppercase
              text-[12px]
              font-semibold
              tracking-[0.3em]
              text-[#d6a64c]
              sm:text-[13px]
            "
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            OUR TEAM
          </p>

          {/* Heading */}

          <h2
            className="
              mb-3
              text-[clamp(2rem,3.2vw,3rem)]
              font-semibold
              leading-[1.08]
              tracking-[-0.02em]
              text-white
            "
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
            }}
          >
            Governing Council
          </h2>

          {/* Gold Divider */}

          <div
            className="
              mx-auto
              mb-4
              h-[2px]
              w-[72px]
              bg-[#d6a64c]
            "
          />

          {/* Description */}

          <p
            className="
              mx-auto
              max-w-[650px]
              text-[14px]
              leading-[1.75]
              text-white/65
              sm:text-[15px]
            "
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Providing strategic direction, experience and responsible
            governance to support the families we serve.
          </p>
        </div>

        {/* ================= TEAM GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {team.map((member) => {
            const initial =
              member.name
                .split(' ')
                .filter(Boolean)[0]
                ?.charAt(0)
                .toUpperCase() || '';

            return (
              <article
                key={member.name}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#d6a64c]/25
                  bg-[#0d4236]
                  shadow-[0_14px_35px_rgba(0,0,0,0.16)]
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-[#d6a64c]/65
                  hover:shadow-[0_20px_45px_rgba(0,0,0,0.26)]
                "
              >
                {/* ================= TOP VISUAL ================= */}

                <div
                  className="
                    relative
                    flex
                    h-[160px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    sm:h-[175px]
                  "
                  style={{
                    background: member.bg,
                  }}
                >
                  {/* Background Gold Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[-60px]
                      top-[-70px]
                      h-[160px]
                      w-[160px]
                      rounded-full
                      bg-[#d6a64c]/[0.08]
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#d6a64c]/[0.15]
                    "
                  />

                  {/* Bottom Fade */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-[60px]
                    "
                    style={{
                      background:
                        'linear-gradient(to top, rgba(13,66,54,0.92), transparent)',
                    }}
                  />

                  {/* Initial Circle */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-[70px]
                      w-[70px]
                      items-center
                      justify-center
                      rounded-full
                      border-[2px]
                      border-[#d6a64c]/80
                      bg-[#d6a64c]/[0.10]
                      shadow-[0_0_24px_rgba(214,166,76,0.10)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:border-[#d6a64c]
                      group-hover:bg-[#d6a64c]/[0.16]
                    "
                  >
                    <span
                      className="
                        text-[29px]
                        font-semibold
                        leading-none
                        text-white
                      "
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      {initial}
                    </span>
                  </div>

                  {/* Gold Accent */}

                  <div
                    className="
                      absolute
                      bottom-3
                      left-1/2
                      z-10
                      h-[2px]
                      w-[34px]
                      -translate-x-1/2
                      bg-[#d6a64c]
                      transition-all
                      duration-500
                      group-hover:w-[54px]
                    "
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div
                  className="
                    relative
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                  "
                >
                  {/* Decorative Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-80px]
                      right-[-60px]
                      h-[150px]
                      w-[150px]
                      rounded-full
                      bg-[#d6a64c]/[0.035]
                      blur-3xl
                    "
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Member Name */}

                    <h3
                      className="
                        mb-2
                        text-[22px]
                        font-semibold
                        leading-[1.08]
                        tracking-[-0.015em]
                        text-white
                        sm:text-[23px]
                      "
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      {member.name}
                    </h3>

                    {/* Role */}

                    <p
                      className="
                        mb-3
                        text-[10px]
                        font-semibold
                        uppercase
                        leading-[1.45]
                        tracking-[0.14em]
                        text-[#d6a64c]
                        sm:text-[11px]
                      "
                      style={{
                        fontFamily:
                          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      {member.role}
                    </p>

                    {/* Divider */}

                    <div
                      className="
                        mb-3
                        h-px
                        w-[38px]
                        bg-[#d6a64c]/55
                        transition-all
                        duration-500
                        group-hover:w-[60px]
                      "
                    />

                    {/* Bio */}

                    <p
                      className="
                        text-[13px]
                        leading-[1.65]
                        text-white/65
                        sm:text-[14px]
                      "
                      style={{
                        fontFamily:
                          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      {member.bio}
                    </p>

                    {/* ================= LINKEDIN ================= */}

                    <div className="mt-auto pt-6">
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          border-t
                          border-white/10
                          pt-4
                        "
                      >
                        {/* LinkedIn Icon */}

                        <a
                          href={
                            member.linkedin === 'your-linkedin-id'
                              ? '#'
                              : `https://www.linkedin.com/in/${member.linkedin}`
                          }
                          target={
                            member.linkedin === 'your-linkedin-id'
                              ? undefined
                              : '_blank'
                          }
                          rel={
                            member.linkedin === 'your-linkedin-id'
                              ? undefined
                              : 'noopener noreferrer'
                          }
                          onClick={(e) => {
                            if (
                              member.linkedin === 'your-linkedin-id'
                            ) {
                              e.preventDefault();
                            }
                          }}
                          aria-label={`${member.name} LinkedIn`}
                          className="
                            flex
                            h-[30px]
                            w-[30px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#d6a64c]/50
                            bg-[#d6a64c]/[0.08]
                            text-[#d6a64c]
                            transition-all
                            duration-300
                            hover:border-[#d6a64c]
                            hover:bg-[#d6a64c]/[0.16]
                            hover:text-white
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-[15px] w-[15px]"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.372 4.27 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 9h3.558v11.452H3.56V9z" />
                          </svg>
                        </a>

                        {/* LinkedIn Placeholder */}

                        <div
                          className="
                            flex
                            min-w-0
                            flex-col
                          "
                        >
                          <span
                            className="
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.12em]
                              text-[#d6a64c]
                            "
                            style={{
                              fontFamily:
                                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                          >
                            LinkedIn
                          </span>

                          <span
                            className="
                              truncate
                              text-[11px]
                              text-white/50
                            "
                            style={{
                              fontFamily:
                                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                          >
                            /in/{member.linkedin}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Hover Line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-5
                    right-5
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-[#d6a64c]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}