import React from 'react';
import AppImage from '@/components/ui/AppImage';

const categories = [
  {
    image: '/assets/images/icon1.png',
    title: (
      <>
        Armed Forces
        <br />
        & Defence
      </>
    ),
    items: [
      'Indian Army',
      'Indian Navy',
      'Indian Air Force',
      'Indian Coast Guard',
    ],
    size: 'h-14 w-14 sm:h-16 sm:w-16',
  },
  {
    image: '/assets/images/icon2.png',
    title: <>Police Services</>,
    items: [
      'State Police',
      'City Police',
      'Traffic Police',
      'Railway Police (GRP)',
    ],
    size: 'h-13 w-13 sm:h-16 sm:w-16',
  },
  {
    image: '/assets/images/icon3.png',
    title: (
      <>
        Central Armed Police
        <br />
        & Paramilitary
      </>
    ),
    items: [
      'CRPF',
      'BSF',
      'CISF',
      'ITBP',
      'SSB',
      'Assam Rifles',
    ],
    size: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
  },
  {
    image: '/assets/images/icon4.png',
    title: (
      <>
        Protection &
        <br />
        Emergency Services
      </>
    ),
    items: [
      'Railway Protection Force (RPF)',
      'Fire & Emergency Services',
      'Disaster Response & Rescue Personnel',
      'Civil Defence Personnel',
    ],
    size: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
  },
  {
    image: '/assets/images/icon5.png',
    title: (
      <>
        Government Security
        <br />
        Services
      </>
    ),
    items: [
      'Special Protection Group (SPG)',
      'National Security Guard (NSG)',
      'Other Recognised Government Security Services',
      'Other Protective Service Personnel',
    ],
    size: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
  },
];

export default function WhoWeSupport() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">

      {/* ===================================================== */}
      {/* BACKGROUND IMAGE */}
      {/* ===================================================== */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/images/who-we-support-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* WARM OVERLAY */}

      <div className="absolute inset-0 bg-[#f2eee7]/90" />


      {/* ===================================================== */}
      {/* LEFT WATERMARK */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute left-6 top-0 hidden h-[48%] w-[26%] items-start justify-start opacity-35 lg:flex">
        <AppImage
          src="/assets/images/watermark1.png"
          alt=""
          width={480}
          height={480}
          className="
            h-full
            w-full
            select-none
            object-contain
            object-left-top
            grayscale
            contrast-125
            blur-[1px]
          "
          unoptimized
        />
      </div>


      {/* ===================================================== */}
      {/* RIGHT WATERMARK */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 hidden h-[48%] w-[26%] items-start justify-end opacity-35 lg:flex">
        <AppImage
          src="/assets/images/watermark2.png"
          alt=""
          width={480}
          height={480}
          className="
            h-full
            w-full
            select-none
            object-contain
            object-right-top
            grayscale
            contrast-125
            blur-[1px]
          "
          unoptimized
        />
      </div>


      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* =================================================== */}
        {/* SECTION HEADER */}
        {/* =================================================== */}

        <div className="mb-12 text-center sm:mb-14">

          <p
            className="
              mb-4
              text-[0.82rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#c9912a]
              sm:text-[0.95rem]
            "
          >
            WHO WE SUPPORT
          </p>

          <h2
            className="
              mx-auto
              max-w-[980px]
              text-[clamp(2.4rem,3.8vw,4.2rem)]
              leading-[0.95]
              text-[#0D1B2A]
            "
            style={{
              fontFamily:
                'Cormorant Garamond, Georgia, serif',
              fontWeight: 700,
              letterSpacing: '-0.035em',
            }}
          >
            Behind Every Uniform Is A Family.
          </h2>

          <div className="mx-auto my-6 h-[3px] w-[80px] rounded-full bg-gradient-to-r from-[#c9912a] to-[#e7c57a]" />

          <p className="mx-auto max-w-[760px] text-[1.05rem] leading-relaxed text-[#3c3a35] sm:text-[1.15rem]">
            We support the dependants and families connected to
            those who serve or have served in service to the
            nation and society.
          </p>

        </div>


        {/* =================================================== */}
        {/* FIRST ROW — 3 CARDS */}
        {/* =================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-[1080px]
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {categories.slice(0, 3).map((cat, index) => (
            <SupportCard
              key={index}
              cat={cat}
              index={index}
            />
          ))}
        </div>


        {/* =================================================== */}
        {/* SECOND ROW — 2 CARDS CENTERED */}
        {/* =================================================== */}

        <div
          className="
            mx-auto
            mt-5
            grid
            max-w-[720px]
            grid-cols-1
            gap-5
            sm:grid-cols-2
          "
        >
          {categories.slice(3, 5).map((cat, index) => (
            <SupportCard
              key={index}
              cat={cat}
              index={index + 3}
            />
          ))}
        </div>


        {/* =================================================== */}
        {/* BOTTOM NOTE */}
        {/* =================================================== */}

        <p
          className="
            mx-auto
            mt-8
            max-w-[850px]
            text-center
            text-sm
            leading-relaxed
            text-[#625b52]
            sm:text-[0.95rem]
          "
        >
          Our support is guided by the circumstances of each family,
          with the aim of ensuring dignity, stability, opportunity
          and a better future.
        </p>

      </div>

    </section>
  );
}


/* ========================================================= */
/* REUSABLE SUPPORT CARD */
/* ========================================================= */

function SupportCard({ cat, index }: { cat: (typeof categories)[number]; index: number }) {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[255px]
        flex-col
        items-center
        overflow-hidden
        rounded-[22px]
        border
        border-[#c9b998]/60
        bg-[#f7f3ec]/75
        px-5
        py-5
        text-center
        shadow-[0_10px_28px_rgba(40,30,15,0.05)]
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#c9912a]/80
        hover:shadow-[0_18px_35px_rgba(40,30,15,0.10)]
        sm:px-6
      "
      style={{
        transitionDelay: `${index * 60}ms`,
      }}
    >

      {/* ================================================= */}
      {/* ICON */}
      {/* ================================================= */}

      <div
        className="
          mb-3
          flex
          h-[64px]
          w-[64px]
          items-center
          justify-center
          rounded-full
          border-[1.5px]
          border-[#c9912a]
          bg-[#f7f3ec]/60
          transition-transform
          duration-300
          group-hover:scale-105
          sm:h-[70px]
          sm:w-[70px]
        "
      >

        <AppImage
          src={cat.image}
          alt=""
          width={80}
          height={80}
          className={`
            ${cat.size}
            object-contain
          `}
          unoptimized
        />

      </div>


      {/* ================================================= */}
      {/* TITLE */}
      {/* ================================================= */}

      <h3
        className="
          mb-3
          min-h-[52px]
          text-[clamp(1.45rem,1.8vw,1.9rem)]
          leading-[1]
          text-[#0d1b2a]
        "
        style={{
          fontFamily:
            'Cormorant Garamond, Georgia, serif',
          fontWeight: 700,
          letterSpacing: '-0.03em',
        }}
      >
        {cat.title}
      </h3>


      {/* ================================================= */}
      {/* GOLD DIVIDER */}
      {/* ================================================= */}

      <div className="mb-3 h-[2px] w-10 rounded-full bg-[#c9912a]/70" />


      {/* ================================================= */}
      {/* SERVICES */}
      {/* ================================================= */}

      <ul
        className="
          flex
          w-full
          max-w-[300px]
          flex-col
          items-center
          gap-1
        "
      >
        {cat.items.map((item: string) => (
          <li
            key={item}
            className="
              text-[0.8rem]
              leading-relaxed
              text-[#443f39]
              sm:text-[0.84rem]
            "
          >
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}