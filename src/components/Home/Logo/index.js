import { useState } from 'react'
import LogoS from '../../../assets/images/Programming (1).gif'
import loop from '../../../assets/images/Programming.gif'
import './index.scss'
import { useEffect } from 'react'
// import logo from '../../../assets/images/Developer activity.gif'


const Logo = () => {
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true)

  useEffect(() => {
    // Start the looping animation after 3 seconds
    const timeout = setTimeout(() => {
      setShowEntranceAnimation(false)
    }, 2000) // 3000 milliseconds = 3 seconds

    // Clear the timeout on unmount to avoid memory leaks
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="logo-container">
      {showEntranceAnimation ? (
        <img className="entrance" src={LogoS} alt="Entrance Animation" />
      ) : (
        <img className="looping" src={loop} alt="Looping Animation" />
      )}
    </div>
  )
}

export default Logo
