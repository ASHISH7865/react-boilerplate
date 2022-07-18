import React from 'react';
import { motion } from 'framer-motion';
import { fadeScale } from '../utility/Animation';

function InfoCard({ title, description, anchor, href, className }) {
  return (
    <motion.div
      initial={fadeScale.hidden}
      animate={fadeScale.visible}
      className={`short-about__wrapper ${className}`}>
      <div className="short-about__title">
        <p>{title}</p>
      </div>
      <div className="short-about__content p-10 text-center">
        <p>{description}</p>
      </div>
      {anchor && (
        <a className="read-more" href={href}>
          Read More
        </a>
      )}
    </motion.div>
  );
}

export default InfoCard;
