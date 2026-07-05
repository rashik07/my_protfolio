import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
// import { Achievements } from '../components/sections/Achievements';
import { GithubStats } from '../components/sections/GithubStats';
import { Blog } from '../components/sections/Blog';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      {/* <Achievements /> */}
      <GithubStats />
      {/* <Blog /> */}
      <Contact />
    </main>
  );
};
