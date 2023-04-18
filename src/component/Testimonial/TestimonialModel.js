import React, { useState } from "react";

export default function TestimonialModel() {
  const data = [
    {
      title: "Govt Polytechnic college",
      content:
        "I got 96% with destinction grade in Government Polytechnic College Ooty.",
      image: "../images/govt_college.png",
    },
    {
      title: "Vikram Solar Ltd",
      content:
        "I got Appreciation letter from Vikram Solar Ltd for my work quality.",
      image: "../images/vikram_solar.jpg",
    },
  ];

  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {data.map((event)=>{
            return (
              <li className="testimonials-item">
                <div className="content-card">
                  <figure className="testimonials-avatar-box">
                    <img
                      src={event.image}
                      alt={event.title}
                      width="60"
                      testimonials-avatar
                    />
                  </figure>

                  <h4 className="h4 testimonials-item-title">
                    {event.title}
                  </h4>

                  <div className="testimonials-text">
                    <p>{event.content}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
