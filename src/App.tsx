import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './app/components/ScrollToTop';

import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import DonatePage from './app/donate/page';
import StoryDetailPage from './app/stories/[id]/page';
import NotFound from './app/not-found';

// ABOUT
import WhoWeAre from './app/about/components/WhoWeAre';
import HowWeWork from './app/about/components/HowWeWork';
import PartnersSection from './app/about/components/PartnersSection';
import TeamSection from './app/about/components/TeamSection';
import TransparencySection from './app/about/components/TransparencySection';

// CAUSES
import CausesPage from './app/causes/page';
import Education from './app/causes/education';
import Healthcare from './app/causes/healthcare';

// IMPACT AND STORIES
import StoriesSection from './app/components/StoriesSection';

export default function App() {
  return (
    <>
      {/* =========================================
          GLOBAL NAVBAR
      ========================================= */}
      <Navbar />

      {/* Navbar is fixed and 94px high */}
      <main className="pt-[94px]">

        <ScrollToTop />

        <Routes>

          {/* =========================================
              MAIN PAGES
          ========================================= */}

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="/donate"
            element={<DonatePage />}
          />

          <Route
            path="/stories/:id"
            element={<StoryDetailPage />}
          />


          {/* =========================================
              ABOUT
          ========================================= */}

          <Route
            path="/about/who-we-are"
            element={<WhoWeAre />}
          />

          <Route
            path="/about/how-we-work"
            element={<HowWeWork />}
          />

          <Route
            path="/about/partners"
            element={<PartnersSection />}
          />

          <Route
            path="/about/team"
            element={<TeamSection />}
          />

          <Route
            path="/about/transparency"
            element={<TransparencySection />}
          />


          {/* =========================================
              OUR CAUSES

              /causes
              → Shows Our Causes page

              /causes/education
              → Shows Our Causes page
                THEN Education section below

              /causes/healthcare
              → Shows Our Causes page
                THEN Healthcare section below
          ========================================= */}
          <Route
          path="/causes"
          element={<CausesPage />}
          />
          <Route
          path="/causes/education"
          element={<Education />}
          />
          <Route
          path="/causes/healthcare"
          element={<Healthcare />}
          />


          {/* =========================================
              IMPACT AND STORIES
          ========================================= */}

          <Route
            path="/impact"
            element={<StoriesSection />}
          />


          {/* =========================================
              404
          ========================================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>
    </>
  );
}