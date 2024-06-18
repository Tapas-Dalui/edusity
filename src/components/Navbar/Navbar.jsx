import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-scroll'
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })

  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={sticky ? logo1 : logo2} className='logo' />
        <ul className={ mobileMenu ? 'hide-mobile-menu' : ''}>
          <li> <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Home</Link> </li>
          <li><Link
            to="programs"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
          >Programs</Link></li>
          <li><Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >About Us</Link></li>
          <li><Link
            to="campus"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >Campus</Link></li>
          <li><Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-230}
            duration={500}
          >Testimonials</Link></li>

          <li><Link to="contact"
            spy={true}
            smooth={true}
            offset={-230}
            duration={500} className={`${sticky || mobileMenu ? 'btn-colored' : 'btn'}`}>Contact Us</Link></li>
        </ul>
        <FaBarsStaggered className={` ${ sticky || (!sticky && mobileMenu) ? 'menu-icon-black' : 'menu-icon-white'}`}  onClick={toggleMenu}/>
      </nav>
    </>
  )
}

export default Navbar
