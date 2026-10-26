import { Hero } from '../../sections/hero/Hero';
import { WhatIDo } from '../../sections/what-i-do/WhatIDo';
import { Work } from '../../sections/work/Work';
import { Experience } from '../../sections/experience/Experience';
import { Engineering } from '../../sections/engineering/Engineering';
import { About } from '../../sections/about/About';
import { Contact } from '../../sections/contact/Contact';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Work />
      <Experience />
      <Engineering />
      <About />
      <Contact />
    </>
  );
};
