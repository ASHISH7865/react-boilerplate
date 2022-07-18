import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Signature from '../../assets/icons/signature(1).png';
import { motion } from 'framer-motion';
import InfoCard from '../components/InfoCard';

function About() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      id="about"
      className="about-wrapper">
      <h1>About</h1>
      <ProfileCard className={'bg-primary'}>
        <div className="introduction">
          I’m Ashish, I’m a frontend developer, and I specialize in efficient React apps and CSS &
          HTML that just work across all platforms and browsers. I care deeply about building
          interfaces that are usable and pleasant for the most number of people possible.
        </div>
        <div className="introduction">
          Right now, I’m excited about the still very complicated WebAssembly, and working towards
          becoming a React senior. In the following years, I also plan to explore the “server-side”
          more and become a better-rounded full-stack dev.
        </div>
        <div className="signature">
          <img src={Signature} alt="" />
        </div>
      </ProfileCard>
      <div className={'flex-horizontal'}>
        <InfoCard
          className={'w-40 min-h-200 '}
          title={'Interests & Hobbies'}
          description={'I love to learn new things and I am always looking to improve my skills.Fan of movies and web series and love to play pc games. '}
        />
        <InfoCard
          className={'w-40 min-h-200 '}
          title={'Education'}
          description={
            'I am currently pursuing my B.Tech in Computer Science from Lovely Professional University, Punjab. And I completed my 10+2 from Vishal Internation School, Ghaziabad.'
          }
        />
      </div>
    </motion.div>
  );
}

export default About;
