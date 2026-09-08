import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@/components/ui/Link";
import Icon from "@/components/ui/AppIcon";
import "./education.css";

const educationPrograms = [
  {
    icon: "AcademicCapIcon",
    title: "School Fees Support",
    description:
      "We cover tuition fees and educational expenses for children of serving and retired soldiers.",
  },
  {
    icon: "BookOpenIcon",
    title: "Study Resources",
    description:
      "Providing books, uniforms, digital learning tools, and other essential resources.",
  },
  {
    icon: "UserGroupIcon",
    title: "Mentorship Programs",
    description:
      "Guidance, career counseling, and mentorship to help children dream beyond limits.",
  },
  {
    icon: "BriefcaseIcon",
    title: "Scholarships",
    description:
      "Merit-based scholarships for higher education to build future leaders of tomorrow.",
  },
];

const impactStats = [
  {
    icon: "AcademicCapIcon",
    value: "750+",
    label: "Children Supported",
  },
  {
    icon: "BookOpenIcon",
    value: "35+",
    label: "Schools & Programs",
  },
  {
    icon: "UserGroupIcon",
    value: "100%",
    label: "Commitment to Their Future",
  },
];

const responsibilityItems = [
  {
    icon: "HeartIcon",
    title: "A Child's Future",
    description:
      "Every child deserves the opportunity to learn, grow, and dream without financial barriers.",
  },
  {
    icon: "ShieldCheckIcon",
    title: "Honouring Service",
    description:
      "Supporting their children is one meaningful way to honour those who served our nation.",
  },
  {
    icon: "AcademicCapIcon",
    title: "Building Tomorrow",
    description:
      "Education today creates confident, capable and independent citizens tomorrow.",
  },
];

export default function Education() {
  return (
    <main className="education-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="education-hero">
        <div className="education-hero-overlay" />

        <div className="education-container education-hero-container">

          <div className="education-hero-content">

            <span className="education-eyebrow">
              EDUCATION
            </span>

            <h1>
              Empowering Young Minds.
              <span>Honoring Their Legacy.</span>
            </h1>

            <div className="education-gold-divider" />

            <p className="education-hero-description">
              At Silent Salute Foundation, we believe that education is
              the strongest tribute we can offer to the heroes who serve
              our nation.
            </p>

            <p className="education-hero-description secondary">
              We provide quality education, learning resources, and
              opportunities to the children of our brave soldiers —
              both serving and retired.
            </p>

            <Link
              href="/donate"
              className="education-primary-button"
            >
              Support a Child's Education
              <Icon name="ArrowRightIcon" size={18} />
            </Link>

          </div>

          {/* Hero Child Image */}

          <div className="education-hero-image-wrapper">

            <div className="education-hero-glow" />

            <img
            src="/assets/images/education1.png"
            alt="Child studying as part of Silent Salute Foundation's education initiative"
            className="education-hero-image"
            />

          </div>

          {/* Impact Statistics */}

          <div className="education-hero-stats">

            {impactStats.map((stat) => (
              <div
                className="education-hero-stat"
                key={stat.label}
              >

                <div className="education-stat-icon">
                  <Icon
                    name={stat.icon}
                    size={25}
                  />
                </div>

                <div className="education-stat-content">

                  <strong>{stat.value}</strong>

                  <span>{stat.label}</span>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section className="education-programs-section">

        <div className="education-container">

          <div className="education-section-heading">

            <span className="education-eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Building Brighter Tomorrows
            </h2>

            <div className="education-heading-decoration">
              <span />
            </div>

          </div>


          <div className="education-program-grid">

            {educationPrograms.map((program) => (
              <div
                className="education-program-card"
                key={program.title}
              >

                <div className="education-program-icon">
                  <Icon
                    name={program.icon}
                    size={42}
                  />
                </div>

                <h3>{program.title}</h3>

                <p>
                  {program.description}
                </p>

                <div className="education-card-line" />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY / WHY IT MATTERS
      ===================================================== */}

      <section className="education-story-section">

        <div className="education-container">

          <div className="education-story-layout">

            {/* Story Image / Quote */}

            <div className="education-story-visual">

              <img
              src="/assets/images/education2.png"
              alt="Child reading and building a brighter future"
              className="education-story-image"
              />

              <div className="education-story-overlay" />

              <div className="education-quote">

                <div className="education-quote-mark">
                  "
                </div>

                <p>
                  My father protects our country.
                  Silent Salute Foundation is helping
                  me build my future.
                </p>

                <span>
                  — A Proud Daughter
                </span>

              </div>

            </div>


            {/* Responsibility */}

            <div className="education-responsibility">

              <span className="education-eyebrow">
                WHY IT MATTERS
              </span>

              <h2>
                Their Sacrifice,
                <span>Our Responsibility</span>
              </h2>

              <div className="education-gold-divider" />

              <div className="education-responsibility-grid">

                <div className="education-responsibility-item">

                  <div className="education-check-icon">
                    <Icon
                      name="CheckIcon"
                      size={17}
                    />
                  </div>

                  <p>
                    Children of our soldiers carry the
                    pride and sacrifice of our nation
                    on their shoulders.
                  </p>

                </div>


                <div className="education-responsibility-item">

                  <div className="education-check-icon">
                    <Icon
                      name="CheckIcon"
                      size={17}
                    />
                  </div>

                  <p>
                    By educating them, we honour the
                    sacrifices made by their families.
                  </p>

                </div>


                <div className="education-responsibility-item">

                  <div className="education-check-icon">
                    <Icon
                      name="CheckIcon"
                      size={17}
                    />
                  </div>

                  <p>
                    An educated child today becomes
                    a strong and confident leader tomorrow.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDUCATION JOURNEY
      ===================================================== */}

      <section className="education-journey-section">

        <div className="education-container">

          <div className="education-section-heading">

            <span className="education-eyebrow">
              OUR COMMITMENT
            </span>

            <h2>
              From Opportunity to Independence
            </h2>

            <div className="education-heading-decoration">
              <span />
            </div>

            <p>
              Our support is designed to walk alongside children
              throughout their educational journey.
            </p>

          </div>


          <div className="education-journey-flow">

            {responsibilityItems.map((item, index) => (
              <React.Fragment key={item.title}>

                <div className="education-journey-item">

                  <div className="education-journey-icon">
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
                  <div className="education-flow-connector">
                    <span />
                  </div>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>

      </section>
    </main>
  );
}