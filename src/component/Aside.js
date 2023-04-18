import React, { useState } from 'react'

export default function Aside() {
  const [toggle, setToggle] = useState(false);

  const handleClick = ()=> {
    setToggle(!toggle);
  }
  console.log(toggle)

  return (
    <aside className={toggle ? "sidebar active" : "sidebar"}>
      <div className="sidebar-info">
        <div className="avatar-box">
          {/* <!-- need to add profile image --> */}
          <img src="./images/my-avatar.png" alt="Kalaiselvan" width="80" />
        </div>

        <div className="info-content">
          <h1 className="name" title="Kalaiselvan">
            Kalaiselvan P
          </h1>

          <p className="title">Full stack developer</p>
        </div>

        <button onClick={handleClick} className="info_more-btn">
          <span>Show Contacts</span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:inskalai@gmail.com" className="contact-link">
                inskalai@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+91 8667262074" className="contact-link">
                +91 8667262074
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Address</p>

              <address>
                No: 352, Periyeri Village, <br />
                Thorapadi Post, <br />
                Chengam Taluk, <br />
                Thiruvannamalai Dist,
                <br />
                PIN : 606 704
              </address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <div></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/ikalaiselvan" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/kalai-selvan-b5a199238/"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
