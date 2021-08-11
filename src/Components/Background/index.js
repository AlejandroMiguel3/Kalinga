import React, { useState, useEffect } from 'react'
// import './Background.css'
import mapImg from '../../Assets/SVG/Map.svg'

const Location = () => {
  const [offset, setOffset] = useState(0)
  const [locOffset, setLocOffset] = useState(0)

  useEffect(() => {
    const locSection = document.querySelector('.location-height')
    const docHeight = document.documentElement.offsetHeight
    const locImg = document.querySelector('.location-img')
    let locHeight = window.scrollY / (offset - locSection.offsetTop)
    locHeight = locHeight < 0 ? 0 : 1

    function handleScroll() {
      setOffset(window.pageYOffset)
      setLocOffset(locHeight)
      let scrolled = window.scrollY / (docHeight - window.innerHeight) + 0.5

      let transformValue = 'scale(' + scrolled + ')'
      let opacityValue = locOffset

      locImg.style.WebkitTransform = transformValue
      locImg.style.MozTransform = transformValue
      locImg.style.OTransform = transformValue
      locImg.style.transform = transformValue
      locSection.style.opacity = opacityValue
    }
    console.log(locOffset)

    window.addEventListener('scroll', handleScroll)
    // console.log(locSection.offsetTop)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])

  return (
    <section className='location-height'>
      <div className='location-container'>
        <img src={mapImg} className='location-img' alt='kalinga-map' />
        <h1>hello Motherfather!!!!!</h1>
      </div>
    </section>
  )
}

export default Location
