import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Software developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. I'm a versatile
            software developer experienced in backend, frontend, and Flutter app
            development. I create integrated solutions that seamlessly combine
            technology with user experiences.
          </p>
          <p align="LEFT">
            In backend development, I specialize in Node.js, crafting robust
            systems with efficient databases, strong APIs, and scalable
            architectures. Clean code ensures reliability and peak
            performance.I'm quiet confident, naturally curious, and perpetually
            working on improving my chops one design problem at a time.
          </p>
          <p>
            For the frontend, I design captivating user interfaces using HTML,
            CSS, and PHP. My passion for Flutter allows me to build engaging
            cross-platform apps for iOS and Android. My dedication to excellence
            and learning drives me to optimize, innovate, and lead in tech
            trends. Join me in creating impactful digital experiences.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
