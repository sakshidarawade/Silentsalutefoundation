import React from "react";
import "./WhoWeAre.css";

const values = [
  {
    icon: "♡",
    title: "Compassion",
    text: "We approach every family with empathy, understanding, and genuine care.",
  },
  {
    icon: "⚖",
    title: "Dignity",
    text: "We preserve the dignity of every family we serve — in charity, every action and decision.",
  },
  {
    icon: "⌕",
    title: "Transparency",
    text: "Every rupee is accounted for and reported openly to our donors and supporters.",
  },
  {
    icon: "ϟ",
    title: "Action",
    text: "We move quickly when families need us most — no bureaucracy, direct support.",
  },
];

const impactStats = [
  {
    icon: "♟",
    number: "1000+",
    label: "Families Supported",
  },
  {
    icon: "⌑",
    number: "500+",
    label: "Students Empowered",
  },
  {
    icon: "♡",
    number: "200+",
    label: "Healthcare Assistance",
  },
  {
    icon: "♢",
    number: "Nationwide",
    label: "Impact Across India",
  },
];

const responsibilityItems = [
  {
    icon: "♡",
    title: "We Understand",
    text: "We listen, we learn, and we stand together.",
  },
  {
    icon: "♢",
    title: "We Support",
    text: "Providing timely and meaningful support where it matters most.",
  },
  {
    icon: "♟",
    title: "We Empower",
    text: "Helping families rebuild, grow, and thrive with dignity.",
  },
  {
    icon: "♡",
    title: "We Honour",
    text: "Honouring their sacrifice every single day.",
  },
];

const MissionIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 21s-7-4.6-9.2-9.1C1.1 8.5 3.2 5 6.8 5c2.1 0 3.6 1.2 5.2 3 1.6-1.8 3.1-3 5.2-3 3.6 0 5.7 3.5 4 6.9C19 16.4 12 21 12 21Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 4v16M7 7h10M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6ZM8 20h8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle
      cx="10.8"
      cy="10.8"
      r="6.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="m16 16 5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M13.5 2 5 13h6l-1 9 8.5-12h-6L13.5 2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle
      cx="9"
      cy="8"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="17"
      cy="9"
      r="2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M3 20c.5-3.5 2.5-5 6-5s5.5 1.5 6 5M14 15c3.5-.2 5.8 1.3 6.5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GraduationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="m3 9 9-5 9 5-9 5-9-5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M7 11v5c2.8 2 7.2 2 10 0v-5M21 9v6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const HeartPulseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 10h2l1.2-2.2L12 14l1.5-3H17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="m4 12 4-4 3 2 2-2 7 4-3 5-4-2-3 2-6-5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="m8 8 3-3 3 2M14 7l3-1 3 3M8 15l3 3M12 14l3 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

function ValueIcon({ index }: { index: number }) {
  const icons = [
    <MissionIcon key="heart" />,
    <ScaleIcon key="scale" />,
    <SearchIcon key="search" />,
    <LightningIcon key="lightning" />,
  ];

  return icons[index];
}

function ImpactIcon({ index }: { index: number }) {
  const icons = [
    <UsersIcon key="users" />,
    <GraduationIcon key="graduation" />,
    <HeartPulseIcon key="health" />,
    <HandshakeIcon key="handshake" />,
  ];

  return icons[index];
}

function ResponsibilityIcon({ index }: { index: number }) {
  const icons = [
    <MissionIcon key="heart" />,
    <HandshakeIcon key="handshake" />,
    <UsersIcon key="users" />,
    <MissionIcon key="honour" />,
  ];

  return icons[index];
}

export default function WhoWeAre() {
  return (
    <main className="who-we-are">

      {/* =========================================
          HERO / HEADER
      ========================================= */}
      <section className="who-hero">
        {/* Faded soldier silhouette watermark */}
        <img
          src="/assets/images/watermark7.png"
          alt=""
          aria-hidden="true"
          className="hero-watermark"
        />

        <div className="who-container">

          <div className="section-heading">
            <span className="eyebrow">
              WHO WE ARE
            </span>

            <div className="heading-decoration">
              <span />
              
            </div>

            <h1>
              Our Mission, Vision &amp; Values
            </h1>

            <p className="hero-description">
              At Silent Salute, we stand with the brave hearts and their
              families.
              <br />
              Our mission drives us, our vision inspires us, and our values
              guide every step we take.
            </p>
          </div>

          {/* =========================================
              MAIN CONTENT
          ========================================= */}
          <div className="mission-layout">

            {/* LEFT IMAGE */}
            <div className="mission-image-wrapper">
              <div className="image-outline" />

              <div className="mission-image">
                <img
                  src="/assets/images/WhoWeSupport.png"
                  alt="A child saluting the Indian flag"
                />
              </div>
            </div>

            {/* MISSION / VISION */}
            <div className="mission-content">

              <article className="mission-block">
                <div className="small-gold-icon">
                  <MissionIcon />
                </div>

                <div>
                  <h2>Our Mission</h2>

                  <p>
                    To stand beside the families of India&apos;s military,
                    defence, police, and public service personnel —
                    ensuring access to education, healthcare, financial
                    support, and emotional care so that no family ever
                    faces hardship alone.
                  </p>
                </div>
              </article>

              <article className="mission-block">
                <div className="small-gold-icon">
                  <MissionIcon />
                </div>

                <div>
                  <h2>Our Vision</h2>

                  <p>
                    A nation where every family behind the uniform lives
                    with dignity, opportunity, and the certainty that
                    their sacrifice is honoured — not just in words,
                    but in action.
                  </p>
                </div>
              </article>

            </div>

            {/* DIVIDER */}
            <div className="mission-divider" />

            {/* VALUES */}
            <div className="values-container">
              <div className="values-grid">
                {values.map((value, index) => (
                  <article
                    className="value-card"
                    key={value.title}
                  >
                    <div className="value-icon">
                      <ValueIcon index={index} />
                    </div>

                    <h3>{value.title}</h3>

                    <p>{value.text}</p>

                    <div className="card-line" />
                  </article>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================
              IMPACT STRIP
          ========================================= */}
          <section className="impact-strip">
            {impactStats.map((stat, index) => (
              <div
                className="impact-item"
                key={stat.label}
              >
                <div className="impact-icon">
                  <ImpactIcon index={index} />
                </div>

                <div className="impact-content">
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </section>

          {/* =========================================
              RESPONSIBILITY SECTION
          ========================================= */}
          <section className="responsibility-section">

            <div className="responsibility-intro">
              <h2>
                More Than Support,
                <br />
                <span>We Share Responsibility.</span>
              </h2>

              <div className="gold-divider" />

              <p>
                We believe in walking alongside families, not just
                helping from afar. Together, we build a community
                of strength, respect, and unwavering gratitude.
              </p>

            </div>

            <div className="responsibility-flow">
              {responsibilityItems.map((item, index) => (
                <React.Fragment key={item.title}>

                  <article className="responsibility-item">

                    <div className="responsibility-icon">
                      <ResponsibilityIcon index={index} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </article>

                  {index < responsibilityItems.length - 1 && (
                    <div className="flow-connector">
                      <span />
                    </div>
                  )}

                </React.Fragment>
              ))}
            </div>

          </section>

        </div>
      </section>
    </main>
  );
}