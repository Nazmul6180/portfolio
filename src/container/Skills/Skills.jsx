import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';


// add bg color #edf2f8 

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [experiances, setExperiances] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) =>{
        setExperiances(data);
      });

    client.fetch(skillsQuery)
      .then((data) =>{
        setSkills(data);
      })

  }, [])


  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div
          className='app__skills-list'
         >
            {skills.map((skill) =>(
              <motion.div
                whileInView={{opacity: [0,1]}}
                transition={{duration: 0.5}}
                className="app__skills-item app__flex"
                key={Math.random()}
              >
                <div className="app__flex" style={{backgroundColor: '#edf2f8' }}> {/*change the bg color of icon mabye from here */}
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
                </motion.div>
            ))}
        </motion.div>

        <div className="app__skills-exp">
        
          {experiances.map((experiance) => (
              <motion.div
                className="app__skills-exp-item"
                key={Math.random()}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experiance.year}</p>
                </div>
                <motion.div
                  className="app__skills-exp-works"
                >
                  {experiance.works.map((work) => (

                    <div key={Math.random()}>
                        <motion.div
                          whileInView={{opacity: [0,1]}}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip 
                          data-for={work.name}
                          key={Math.random()}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>
                        <Tooltip
                          id={work.name}
                          effect='solid' 
                          arrowColor= "#fff"
                          className="skills-tooltip"
                          data-tooltip-content="hello world"
                        >
                          {work.desc}
          
                        </Tooltip>
                    </div> 
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
        MotionWrap(Skills, 'app__skills'),
        'skills',
        "app__whitebg"
      );