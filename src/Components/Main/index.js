import React from 'react'
import Hero from '../Hero/'
import Navbar from '../Navbar/'
import Background from '../Background'
// import Kaleidoscope from '../Kaleidoscope'
// import './Main.css'

const index = () => {
  return (
    <>
      <section className='page-container'>
        <div>
          <Hero />
          <Navbar />
        </div>
        {/* <Navbar /> */}
        <Background />
        {/* <Kaleidoscope /> */}
        {/* <div className='sample-container'>
          <h1>Hello World</h1>
        </div> */}
      </section>
    </>
  )
}

export default index
