import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam minima itaque repellendus animi facere nihil nulla non dolorem saepe inventore qui repudiandae officia deserunt doloremque, tempora porro rerum voluptate.
            Tenetur, facere rem modi, dolores quidem saepe iure ducimus dolore adipisci placeat dicta iusto. Ab tempora magnam nam facilis porro temporibus optio accusantium cupiditate, ipsam, nisi, distinctio reprehenderit quisquam laborum.</p>
            <button className='btn'>Explore More <img src={arrow} /> </button>

        </div>
      </div>
    </>
  )
}

export default Hero
