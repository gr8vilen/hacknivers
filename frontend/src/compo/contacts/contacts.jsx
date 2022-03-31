import React, { useRef } from 'react';
import  { urlFor, client } from "../../client";
import { useState, useEffect } from "react";
import "./contacts.sass";
import{AiOutlineMail , AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com'


const Contacts = () => {
  

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9m6jvz9', 'template_14umtn4', form.current, '7qn3kPmRCnFwY8HlP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    };
  



  const [condata, setcondata] = useState([]);

  useEffect(() => {
    if (condata == []) {
      console.log("going on ");
    } else {
      client
        .fetch(
          '*[_type == "contact"]'
        )
        .then((data) => {
          setcondata(data[0]);
        });
    }
  }, []);
// console.log(condata)
  return (
    <div className="contacts" id="contacts">
      <p className="cen1">Get In Touch</p>
      <h2 className="cen">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <AiOutlineMail/>
              <h4>Email</h4>
              <a href={"mailto:"+condata.email} target="_blank" className="btn btn-outline-primary btn3"> link </a>
          </article>
          <article className="contact__option">
              <AiOutlineWhatsApp/>
              <h4>WhatsApp</h4>
              <a href={"https://api.whatsapp.com/send?phone="+ condata.phone} target="_blank" className="btn btn-outline-primary btn3">link</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail  }>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" id=""  rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-outline-primary btn3">Submit</button>
        </form>

      </div>

    </div>
  );
};

export default Contacts;
