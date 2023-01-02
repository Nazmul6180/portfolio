import React, {useState } from 'react';
import './Navbar.scss';
import {images} from '../../constants';
import {HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={item}>
            <div/>
            <a href={`#${item}`}>{item}</a>

          </li>
        )) }
      </ul>
          
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          
          {toggle && (
            <motion.div
              // whileInView={{ x:[250,0] }}
              transition={{ duration: 0.85, ease:'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul >
              {['home', 'about', 'work', 'skills', 'contact'].map((items) => (
                  <li key={Math.random()}>                  
                    <a href={`#${items}`} onClick={() => setToggle(false)} >{items}</a>
                  </li>
                )) }
               </ul>
            </motion.div>
            )}
      </div>


    </nav>
  );
}

export default Navbar;