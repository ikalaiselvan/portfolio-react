import React from 'react';
import About from './main/About';
import { Routes, Route } from "react-router-dom";
import Resume from './main/Resume';
import Navebar from './Navebar';
import Projects from './main/Projects';
import Contacts from './main/Contacts';

export default function Main() {
  return (
    <div class="main-content">
      <article class="active" data-page="about">
        <Navebar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </article>
    </div>
  );
}
