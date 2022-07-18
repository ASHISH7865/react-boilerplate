import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInDown, fadeInUp, fadeScale } from '../utility/Animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3, faJs } from '@fortawesome/fontawesome-free-brands';

import InfoCard from '../components/InfoCard';

function Home(props) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="home__wrapper">
      <div className="home__greetings">
        <motion.p className="home__greetings-up">
          Hello , <motion.span>I am </motion.span>
        </motion.p>
        <motion.p className="home__greetings-name">Ashish</motion.p>
        <motion.div class="role">
          <span>Web Developer</span>
          <FontAwesomeIcon size={'xs'} icon={faCircle} />
          <span> Software Developer</span>
          <FontAwesomeIcon size={'xs'} icon={faCircle} />
          <span>UI/UX Designer</span>
        </motion.div>
      </div>
      <InfoCard
        className={'w-70 '}
        title={'About Me'}
        description={
          ' I am a Web Developer and a Software Developer. I have a passion for creating beautiful and\n' +
          '          functional websites and software.I love to learn new things and I am always looking to\n' +
          '          improve my skills.'
        }
        anchor={true}
        href={'#about'}
      />
      <motion.div className="technologies">
        <FontAwesomeIcon icon={faReact} size={'6x'} />
        <FontAwesomeIcon icon={faHtml5} size={'6x'} />
        <FontAwesomeIcon icon={faCss3} size={'6x'} />
        <FontAwesomeIcon icon={faJs} size={'6x'} />
      </motion.div>
    </motion.div>
  );
}

export default Home;
