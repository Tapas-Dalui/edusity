import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'
function About({ setPlayState }) {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about} className='about-img' />
          <img src={play} className='play-icon' onClick={() => { setPlayState(true) }} />
        </div>
        <div className="about-right">
          <h3>About University</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod numquam culpa temporibus officia voluptatem magnam laboriosam voluptate nihil odit praesentium mollitia minus quibusdam sed perferendis repudiandae, vitae porro. Voluptas, sapiente!
            Impedit porro alias deserunt expedita provident saepe possimus consequatur odio, cum sunt eum repudiandae non nobis quidem maiores tempora facere facilis? Suscipit aperiam cupiditate maxime nisi distinctio asperiores dignissimos recusandae.
            Minima earum dolor sint aperiam atque culpa ut sit eveniet quod molestiae sed impedit eius qui hic et necessitatibus inventore, quidem illum maiores saepe libero ipsum? Dolorum ut ratione commodi?
            Error ad commodi velit debitis earum incidunt ipsum voluptate voluptates, natus minima animi saepe ipsa beatae voluptatem. Ullam, distinctio ipsum, placeat beatae eum earum amet rerum laboriosam minima, alias fugiat!
            Ab magni nobis tempore debitis fugit, enim itaque eaque voluptatibus architecto maxime laudantium aut minima distinctio quam nemo dignissimos deserunt sint tempora fuga blanditiis! Dolore reiciendis error voluptatem est velit.</p>
        </div>
      </div>
    </>
  )
}

export default About
