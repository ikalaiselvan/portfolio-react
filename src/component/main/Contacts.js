import React, { useState } from 'react';
import axios from 'axios';

export default function Contacts() {

  const [userCred, setUserCred] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCred = (value) => {
    return setUserCred((event) => {
      return { ...event, ...value }
    })
  }
const handleSubmit = async (event) => {
  console.log("i am handlesubmit", event)
  try{
    event.preventDefault();
    // const response = await axios.post(
    //   `https://portfolio-backend-0agj.onrender.com/`,
    //   userCred,
    //   { withCredentials: true }
    // );
    // console.log(response);
    
 
  await fetch("https://portfolio-backend-0agj.onrender.com/portfolio", {
    method: "POST",
    body: JSON.stringify(userCred),
    headers: { "content-type": "application/json" },
  })
  setUserCred({
    name: "",
    email: "",
    message: "",
  });
  }catch(error){
    console.log("Error : ", error);
  }
  
}
  return (
    <>
      <header>
        <h2 id="contact" className="h2 article-title">
          Contact
        </h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        {/* <!-- -------------------------------------------------- --> */}

        <form id="myForm" className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              id="name"
              className="form-input"
              placeholder="Full name"
              value={userCred.name}
              onChange={(e) => handleCred({ name: e.target.value })}
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Email address"
              value={userCred.email}
              onChange={(e) => handleCred({ email: e.target.value })}
              required
            />
          </div>

          <textarea
            name="message"
            id="message"
            className="form-input"
            placeholder="Your Message"
            value={userCred.message}
            onChange={(e) => handleCred({ message: e.target.value })}
            required
          ></textarea>

          <button onClick={handleSubmit} className="form-btn" type="submit">
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>

      <h3 className="h3 form-title">Location</h3>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.9480738230427!2d78.89219031463806!3d12.319281991286203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x38bca698f97edf0e!2zMTLCsDE5JzA5LjQiTiA3OMKwNTMnMzkuOCJF!5e0!3m2!1sen!2sin!4v1668706696871!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
    </>
  );
}
