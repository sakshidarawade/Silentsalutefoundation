import React from "react";
import Link from "@/components/ui/Link";
import Icon from "@/components/ui/AppIcon";
import "./healthcare.css";

const healthcarePrograms = [
  {
    icon: "HeartIcon",
    title: "Medical Aid",
    description:
      "We provide financial assistance for surgeries, treatments, and critical medical needs of soldiers, veterans, and their families.",
  },
  {
    icon: "BuildingOfficeIcon",
    title: "Health Camps",
    description:
      "Organizing free health check-ups and specialized medical camps for early detection, prevention, and care.",
  },
  {
    icon: "UserGroupIcon",
    title: "Mental Wellness",
    description:
      "Counseling and emotional support programs helping soldiers and families manage stress, trauma, and emotional well-being.",
  },
  {
    icon: "BeakerIcon",
    title: "Medicine Support",
    description:
      "Ensuring access to essential medicines and ongoing treatment for chronic and long-term health conditions.",
  },
];

const impactStats = [
  {
    icon: "HeartIcon",
    value: "10K+",
    label: "Lives Impacted",
  },
  {
    icon: "BuildingOfficeIcon",
    value: "25+",
    label: "Medical Camps Conducted",
  },
  {
    icon: "UserGroupIcon",
    value: "500+",
    label: "Soldiers & Families Supported",
  },
  {
    icon: "ShieldCheckIcon",
    value: "100%",
    label: "Care & Compassion",
  },
];

const responsibilityItems = [
  {
    icon: "HeartIcon",
    title: "Timely Healthcare",
    description:
      "Every soldier and veteran deserves access to timely, dignified, and quality healthcare.",
  },
  {
    icon: "ShieldCheckIcon",
    title: "Honouring Service",
    description:
      "Caring for those who served our nation is one meaningful way to honour their sacrifice.",
  },
  {
    icon: "UserGroupIcon",
    title: "Supporting Families",
    description:
      "When we care for our heroes, we also protect the health, dignity, and future of their families.",
  },
];

export default function Healthcare() {
  return (
    <main className="healthcare-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="healthcare-hero">

        <div className="healthcare-hero-overlay" />

        <div className="healthcare-container healthcare-hero-container">

          {/* HERO CONTENT */}

          <div className="healthcare-hero-content">

            <span className="healthcare-eyebrow">
              HEALTHCARE
            </span>

            <h1>
              Caring for Those
              <span>Who Protect Us.</span>
              Healing Their
              <span>Tomorrow.</span>
            </h1>

            <div className="healthcare-gold-divider" />

            <p className="healthcare-hero-description">
              At Silent Salute Foundation, we are committed to providing
              quality healthcare and support to our brave soldiers,
              veterans, and their families.
            </p>

            <p className="healthcare-hero-description secondary">
              Because those who dedicate their lives to protecting our
              nation deserve care, dignity, and support when they need
              it most.
            </p>

            <Link
              href="/donate"
              className="healthcare-primary-button"
            >
              Support a Soldier's Health

              <Icon
                name="ArrowRightIcon"
                size={18}
              />
            </Link>

          </div>


          {/* HERO IMAGE */}

          <div className="healthcare-hero-image-wrapper">

            <div className="healthcare-hero-glow" />

            <img
              src="/assets/images/healthcare1.png"
              alt="Healthcare support for an Indian soldier"
              className="healthcare-hero-image"
            />

          </div>


          {/* IMPACT STATISTICS */}

          <div className="healthcare-hero-stats">

            {impactStats.map((stat) => (

              <div
                className="healthcare-hero-stat"
                key={stat.label}
              >

                <div className="healthcare-stat-icon">

                  <Icon
                    name={stat.icon}
                    size={25}
                  />

                </div>

                <div className="healthcare-stat-content">

                  <strong>
                    {stat.value}
                  </strong>

                  <span>
                    {stat.label}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section className="healthcare-programs-section">

        <div className="healthcare-container">

          <div className="healthcare-section-heading">

            <span className="healthcare-eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Comprehensive Healthcare.
              <span>Lasting Impact.</span>
            </h2>

            <div className="healthcare-heading-decoration">
              <span />
            </div>

          </div>


          <div className="healthcare-program-grid">

            {healthcarePrograms.map((program) => (

              <div
                className="healthcare-program-card"
                key={program.title}
              >

                <div className="healthcare-program-icon">

                  <Icon
                    name={program.icon}
                    size={42}
                  />

                </div>

                <h3>
                  {program.title}
                </h3>

                <p>
                  {program.description}
                </p>

                <div className="healthcare-card-line" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY / WHY IT MATTERS
      ===================================================== */}

      <section className="healthcare-story-section">

        <div className="healthcare-container">

          <div className="healthcare-story-layout">

            {/* IMAGE + QUOTE */}

            <div className="healthcare-story-visual">

              <img
                src="/assets/images/healthcare2.png"
                alt="Veteran with his family"
                className="healthcare-story-image"
              />

              <div className="healthcare-story-overlay" />

              <div className="healthcare-quote">

                <div className="healthcare-quote-mark">
                  "
                </div>

                <p>
                  Silent Salute Foundation stood by us
                  when we needed it the most. Their care
                  gave my father a second chance at life.
                </p>

                <span>
                  — A Grateful Daughter
                </span>

              </div>

            </div>


            {/* WHY IT MATTERS */}

            <div className="healthcare-responsibility">

              <span className="healthcare-eyebrow">
                WHY IT MATTERS
              </span>

              <h2>
                Their Health,
                <span>Our Honor</span>
              </h2>

              <div className="healthcare-gold-divider" />


              <div className="healthcare-responsibility-grid">

                <div className="healthcare-responsibility-item">

                  <div className="healthcare-check-icon">

                    <Icon
                      name="CheckIcon"
                      size={17}
                    />

                  </div>

                  <p>
                    Healthy soldiers and veterans
                    help build a stronger nation.
                  </p>

                </div>


                <div className="healthcare-responsibility-item">

                  <div className="healthcare-check-icon">

                    <Icon
                      name="CheckIcon"
                      size={17}
                    />

                  </div>

                  <p>
                    Timely healthcare can prevent
                    small problems from becoming
                    life-changing battles.
                  </p>

                </div>


                <div className="healthcare-responsibility-item">

                  <div className="healthcare-check-icon">

                    <Icon
                      name="CheckIcon"
                      size={17}
                    />

                  </div>

                  <p>
                    When we care for them, we uplift
                    their families and future.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HEALTHCARE JOURNEY
      ===================================================== */}

      <section className="healthcare-journey-section">

        <div className="healthcare-container">

          <div className="healthcare-section-heading">

            <span className="healthcare-eyebrow">
              OUR COMMITMENT
            </span>

            <h2>
              From Care to Recovery
            </h2>

            <div className="healthcare-heading-decoration">
              <span />
            </div>

            <p>
              Our healthcare support is designed to stand beside
              soldiers, veterans, and their families throughout
              their journey toward better health.
            </p>

          </div>


          <div className="healthcare-journey-flow">

            {responsibilityItems.map((item, index) => (

              <React.Fragment key={item.title}>

                <div className="healthcare-journey-item">

                  <div className="healthcare-journey-icon">

                    <Icon
                      name={item.icon}
                      size={34}
                    />

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>


                {index !== responsibilityItems.length - 1 && (

                  <div className="healthcare-flow-connector">

                    <span />

                  </div>

                )}

              </React.Fragment>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="healthcare-cta-section">

        <div className="healthcare-container">

          <div className="healthcare-cta">

            <div className="healthcare-cta-icon">

              <Icon
                name="HeartIcon"
                size={34}
              />

            </div>


            <div className="healthcare-cta-content">

              <h2>
                Together, we can heal those
                who heal our nation.
              </h2>

              <p>
                Your support today can bring hope
                and health tomorrow.
              </p>

            </div>


            <Link
              href="/donate"
              className="healthcare-cta-button"
            >
              Donate
              <Icon
                name="HeartIcon"
                size={18}
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}