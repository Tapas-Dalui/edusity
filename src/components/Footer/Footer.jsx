import React from 'react'
import './Footer.css'


function Footer() {
  const d = new Date()

  return (
    <>
      <div className="footer">
        <p> &copy; { d.getFullYear() } Eduol. All rights reserved.</p>
        <ul>
            <li>Terms of services</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
    </>
  )
}

export default Footer
