import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import ReactTooltip from 'react-tooltip'
import { motion } from 'framer-motion'
import { skills } from '../../content_option'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container_skills skills-page">
        <section className="text-zone">
          <h1 className="display-4 mb-4">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={10}
            />
          </h1>
        </section>
        <div className="app__skills-container">
          <motion.div className='app__skills-list'>
            {skills.map((skill) => (
               <motion.div
               whileInView={{opacity:[0,1]}}
               transition={{duration:0.5}}
               className='app__skills-items app__flex'
               key={skill.id}
               >
                <div className='app__flex' >
                  <img src={skill.Image} alt= {skill.name} />
                </div>
                  <p className='p-text'>{skill.name}</p>
               </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Skills
