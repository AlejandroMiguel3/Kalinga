import React, { useEffect, useState } from 'react'
// import './Kaleidoscope.css'

const Kaleidoscope = () => {
  let timer = null
  const [offset, setOffset] = useState(0)
  const [isStop, setIsStop] = useState(false)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout(function () {
        setIsStop(!isStop)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className='scroll-container'>
      <div className='wrapper'>
        <div className='kaleidoscope-container text-multiplier'>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
          <div className='kaleidoscope-slice slice'>
            <div
              className='kaleidoscope-slice__size kaleidoscope-bg'
              style={
                isStop
                  ? {
                      animationPlayState: 'running',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
                  : {
                      animationPlayState: 'paused',
                      transform: `rotate(${186.1 - offset * 0.0052}deg)`,
                    }
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kaleidoscope
