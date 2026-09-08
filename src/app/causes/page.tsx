import React from 'react';

import OurCauses from '../components/OurCauses';
import Education from './education';
import Healthcare from './healthcare';

export default function CausesPage() {
  return (
    <>
      {/* Main Our Causes section */}
      <OurCauses />

      {/* Education section/page content */}
      <section id="education">
        <Education />
      </section>

      {/* Healthcare section/page content */}
      <section id="healthcare">
        <Healthcare />
      </section>
    </>
  );
}