import React from 'react'
import './Contact.css'
import { FaLongArrowAltRight } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FcPackage } from "react-icons/fc";


function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "69e0c515-3d0e-4e86-a2e5-46c553a92efa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>Send us some message <FcPackage /> </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero illo perspiciatis maxime nobis accusamus blanditiis omnis, reprehenderit id! Voluptatibus dolorem soluta odio et quod vero repudiandae sint fuga vel?
            Et facere aliquid voluptas consequatur eveniet harum quos, modi maxime, similique dolores culpa in, ea repudiandae veritatis deleniti! Eos cumque, ab iste possimus numquam accusantium fuga distinctio quasi delectus natus.</p>
          <ul>
            <li> <MdEmail className='icons' /> admin@edusity.com</li>
            <li> <FaPhoneAlt className='icons' /> +23 111-523-853-25</li>
            <li> <FaLocationDot className='icons' /> Mountain View, California, USA</li>

          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label htmlFor="">Phone Number</label>
            <input type="text" name='phone' placeholder='Enter your Phone Number' required />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now <FaLongArrowAltRight className='arrow-icon-white' /> </button>
          </form>
          <span>{result}</span>
        </div>
      </div>

    </>
  )
}

export default Contact
