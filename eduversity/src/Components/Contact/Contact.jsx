import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "df95ebf3-d069-4e16-bfb8-544e1072cfae");
    
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
   <div className="contact">
            <div className="contact-col">
                <h3>
                    Send us a Message <img src={msg_icon} alt="" />
                </h3>
                <p>
                Feel free to reach out through the contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@eduversity.in</li>
                    <li><img src={phone_icon} alt="" />044 - 2655 6289</li>
                    <li><img src={location_icon} alt="" />#365, Anna Nagar Main Road, Anna Nagar, Chennai - 600040</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write your Message</label>
                    <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea> 
                    <button type='submit' className='btn-submit dark-btn'>Submit <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
   </div>
  )
}

export default Contact