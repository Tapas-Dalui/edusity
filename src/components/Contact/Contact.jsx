import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


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
                    <h3>Send us some message <img src={msg_icon} alt="" /> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero illo perspiciatis maxime nobis accusamus blanditiis omnis, reprehenderit id! Voluptatibus dolorem soluta odio et quod vero repudiandae sint fuga vel?
                        Et facere aliquid voluptas consequatur eveniet harum quos, modi maxime, similique dolores culpa in, ea repudiandae veritatis deleniti! Eos cumque, ab iste possimus numquam accusantium fuga distinctio quasi delectus natus.</p>
                    <ul>
                        <li> <img src={mail_icon} alt='' /> admin@edusity.com</li>
                        <li> <img src={phone_icon} alt='' />+23 111-523-853-25</li>
                        <li> <img src={location_icon} alt='' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque maiores doloremque iure quibusdam </li>

                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Your Name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' required />
                        <label htmlFor="">Phone Number</label>
                        <input type="text" name='phone' placeholder='Enter your Phone Number' required />
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message' required></textarea>
                        <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>

        </>
    )
}

export default Contact
