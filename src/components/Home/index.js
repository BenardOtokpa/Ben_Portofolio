import { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

import LogoTitle from '../../assets/images/logo-B.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
// import { LinneardLoader } from 'react-loaders-kit'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const [isLoading, setIsLoading] = useState(true)

  const nameArray = ['e', 'n', 'a', 'r', 'd',',']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Backend Engineer / Front end developer / App developer</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
          <Link to="https://drive.google.com/uc?export=download&id=1lXB3tGBPGYXxz8wiv9CV6hhDmK26ofbN"  className="resume">
            Resume
          </Link>
        </div >
        <Logo className='.logo=container' />
      </div>

      {/* <LinneardLoader loading={isLoading} size={600}duration={0.5}/> */}

    </>
  )
}

export default Home
