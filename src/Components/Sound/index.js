import React, { useState } from 'react'
// import './Sound.css'
import soundfile from '../../Assets/Sounds/bg-sound.mp3'

const Music = () => {
  const [isEnter, setIsEnter] = useState(false)
  const [audio] = useState(new Audio(soundfile))
  const [isToggle, setIsToggle] = useState(false)
  const enterHandler = () => {
    setIsEnter(!isEnter)
    setIsToggle(!isToggle)
  }
  const toggleHandler = () => {
    setIsToggle(!isToggle)
  }
  isEnter
    ? (document.body.className = 'scroll-enable')
    : (document.body.className = 'scroll-disable')
  audio.loop = true
  isToggle ? audio.play() : audio.pause()

  return (
    <>
      <section
        className={`disclaimer-container ${
          isEnter ? 'disclaimer-off pointer-none' : 'disclaimer-on'
        }`}
      >
        <div
          className={`disclaimer-wrapper ${
            isEnter ? 'disclaimer-content__hide' : 'disclaimer-content__show'
          }`}
        >
          <span>
            I created this website to show my appreciation of apo whang od
            preserving the Kalinga culture.
          </span>
          <h1 className='disclaimer-button' onClick={enterHandler}>
            enter
          </h1>
        </div>
      </section>
      <section className='sound-container'>
        <div className='sound-wrapper container'>
          <div
            className={`sound-icon ${isToggle ? 'sound-up' : 'sound-down'}`}
            onClick={toggleHandler}
          >
            <div className={`${isToggle ? 'sound-on' : 'sound-mute'}`}></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Music
