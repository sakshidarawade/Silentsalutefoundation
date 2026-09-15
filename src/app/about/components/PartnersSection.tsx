// import React, { useState } from 'react';

// const partners = [
//   { name: 'Sainik Welfare Board', type: 'Government Partner', state: 'National' },
//   { name: 'Ex-Servicemen Contributory Health Scheme', type: 'Healthcare Partner', state: 'National' },
//   { name: 'Indian Red Cross Society', type: 'Humanitarian Partner', state: 'National' },
//   { name: 'Kendriya Sainik Board', type: 'Welfare Partner', state: 'New Delhi' },
//   { name: 'Army Wives Welfare Association', type: 'Community Partner', state: 'National' },
//   { name: 'National Skill Development Corporation', type: 'Skill Partner', state: 'National' },
//   { name: 'Rajya Sainik Board (UP)', type: 'State Partner', state: 'Uttar Pradesh' },
//   { name: 'Veer Nari Welfare Foundation', type: 'Welfare Partner', state: 'Rajasthan' },
// ];

// export default function PartnersSection() {
//   const [showAllPartners, setShowAllPartners] = useState(false);
//   const visiblePartners = showAllPartners ? partners : partners.slice(0, 4);

//   return (
//     <section id="partners" className="py-20 bg-secondary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-14">
//           <p className="section-label mb-3">PARTNERSHIP & OUTREACH</p>
//           <h2 className="section-heading text-foreground mb-4">
//             Building Partnerships for Impact
//           </h2>
//           <div className="divider-gold mx-auto mb-5" />
//           <p className="text-muted-foreground max-w-lg mx-auto">
//             We work with government bodies, welfare organizations, and civil society partners to maximize impact for families.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {visiblePartners.map((p) => (
//             <div key={p?.name} className="partner-card">
//               <div
//                 className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
//                 style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.1), rgba(201,145,42,0.15))' }}
//               >
//                 <span className="font-display font-bold text-accent text-xl">
//                   {p?.name?.charAt(0)}
//                 </span>
//               </div>
//               <h4 className="font-semibold text-foreground text-sm text-center mb-1">{p?.name}</h4>
//               <p className="text-accent text-xs text-center font-medium">{p?.type}</p>
//               <p className="text-muted-foreground text-xs text-center mt-1">{p?.state}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 flex justify-center">
//           <button
//             type="button"
//             aria-expanded={showAllPartners}
//             onClick={() => setShowAllPartners((current) => !current)}
//             className="inline-flex items-center justify-center rounded-md border-2 border-[#0D1B2A] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#0D1B2A] transition-colors hover:bg-[#0D1B2A] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0D1B2A] focus:ring-offset-2"
//           >
//             {showAllPartners ? 'Show Less' : 'View More'}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';

const partners = [
  {
    name: 'Government Bodies',
    type: 'Exploring collaboration with government bodies supporting veterans, serving personnel, and their families.',
    // state: 'National',
  },
  {
    name: 'Welfare Organizations',
    type: 'Seeking connections with organizations working for the welfare and well-being of defence families.',
    // state: 'National',
  },
  {
    name: 'Healthcare Organizations',
    type: 'Exploring partnerships that can improve access to healthcare and essential medical support.',
    // state: 'National',
  },
  {
    name: 'Community Organizations',
    type: 'Connecting with community-led organizations to strengthen local support networks.',
    // state: 'New Delhi',
  },
  {
    name: 'Humanitarian Organizations',
    type: 'Exploring opportunities for skill development, training, and livelihood support.',
    // state: 'National',
  },
  {
    name: 'Skill Development Organizations',
    type: 'Seeking collaboration with organizations providing humanitarian and emergency assistance.',
    // state: 'National',
  },
  {
    name: 'State & Regional Bodies',
    type: 'Building connections with state and regional organizations serving defence communities.',
    // state: 'Uttar Pradesh',
  },
  {
    name: 'Corporate & Institutional Partners',
    type: 'Exploring future collaborations with institutions that can contribute resources and expertise.',
    // state: 'Rajasthan',
  },
];

export default function PartnersSection() {
  const [showAllPartners, setShowAllPartners] = useState(false);

  const visiblePartners = showAllPartners
    ? partners
    : partners.slice(0, 4);

  return (
    <section
      id="partners"
      className="py-20 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="text-center mb-14">

          {/* SECTION LABEL */}
          <p className="section-label mb-3">
            PARTNERSHIP & OUTREACH
          </p>

          {/* SECTION HEADING */}
          <h2
            className="section-heading text-foreground mb-4"
            style={{
              fontWeight: 400,
            }}
          >
            Building Partnerships for Impact
          </h2>

          {/* GOLD DIVIDER */}
          <div className="divider-gold mx-auto mb-5" />

          {/* DESCRIPTION */}
          <p className="text-muted-foreground max-w-lg mx-auto">
            We are reaching out to government bodies, welfare organizations,
            and civil society organizations to explore meaningful
            collaborations that can strengthen support for families.
          </p>

        </div>

        {/* =========================
            PARTNER / OUTREACH CARDS
        ========================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {visiblePartners.map((p) => (
            <div
              key={p.name}
              className="partner-card"
            >

              {/* ICON / INITIAL */}
              <div
                className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(13,27,42,0.1), rgba(201,145,42,0.15))',
                }}
              >
                <span className="font-display font-bold text-accent text-xl">
                  {p.name.charAt(0)}
                </span>
              </div>

              {/* ORGANIZATION NAME */}
              <h4 className="font-semibold text-foreground text-sm text-center mb-1">
                {p.name}
              </h4>

              {/* COLLABORATION TYPE */}
              <p className="text-accent text-xs text-center font-medium">
                {p.type}
              </p>

              {/* LOCATION */}
              {/* <p className="text-muted-foreground text-xs text-center mt-1">
                {p.state}
              </p> */}

            </div>
          ))}

        </div>

        {/* =========================
            VIEW MORE / VIEW LESS
        ========================== */}
        <div className="mt-8 flex justify-center">

          <button
            type="button"
            aria-expanded={showAllPartners}
            aria-label={
              showAllPartners
                ? 'Show fewer potential collaboration organizations'
                : 'View more potential collaboration organizations'
            }
            onClick={() =>
              setShowAllPartners((current) => !current)
            }
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              border-2
              border-[#0D1B2A]
              bg-transparent
              px-5
              py-2.5
              text-sm
              font-semibold
              text-[#0D1B2A]
              transition-colors
              hover:bg-[#0D1B2A]
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-[#0D1B2A]
              focus:ring-offset-2
            "
          >
            {showAllPartners ? 'Show Less' : 'View More'}
          </button>

        </div>

      </div>
    </section>
  );
}