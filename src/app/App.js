import React from 'react';
import 'antd/dist/antd.css';
import '../assets/styles/colors.scss';
import '../assets/styles/App.scss';
import NavigationBar from './components/NavigationBar';
import { motion } from 'framer-motion';
import { greenBar } from './utility/Animation';
import Home from './sections/Home';
import About from './sections/About';

const App = () => {
  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={greenBar} className="green-bar">
        <NavigationBar />
      </motion.div>
      <div className="app">
        <Home />
        <About />
      </div>
    </div>
  );
};

export default App;
