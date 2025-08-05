// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Alliance of Learning School Thana</div>

        <div className="nav-links desktop-only">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="hamburger mobile-only" onClick={toggleSidebar}>☰</div>
      </nav>

      {/* Sidebar (Mobile Only) */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={closeSidebar}>×</div>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/about" onClick={closeSidebar}>About</Link>
        <Link to="/admissions" onClick={closeSidebar}>Admissions</Link>
        <Link to="/academics" onClick={closeSidebar}>Academics</Link>
        <Link to="/contact" onClick={closeSidebar}>Contact</Link>
      </div>
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Hero */}
     <section className="hero animated">
<div className="floating-shapes">
  {Array.from({ length: 15 }, (_, i) => (
    <div className={`geo-shape shape-${i + 1}`} key={i}></div>
  ))}
</div>


  <h1> Where Every Child Shines Bright </h1>
  <p>
    Welcome to Alliance of Learning School Thana — nurturing knowledge,
    creativity, and character in Faqirabad, Malakand.
  </p>
</section>


      {/* About */}
      <section className="animated">
        <h2>About Our School</h2>
        <p>Alliance of Learning School Thana is a trusted and inclusive school in Faqirabad Thana, Malakand. We provide nurturing education through innovative methods, a safe campus, and a supportive team.</p>
        <p>We offer education from Playgroup to Grade 10 with a focus on literacy, values, skills, and personality growth.</p>
      </section>

      {/* Child Development */}
      <section className="animated">
        <h2>How We Help Your Child Grow</h2>
        <ul>
          <li> Small classrooms with personal attention</li>
          <li> Creative programs in art, drama, and music</li>
          <li> Focus on reading, speaking, and leadership</li>
          <li> Emotional care and value-based learning</li>
          <li> Celebrating each child's uniqueness</li>
        </ul>
      </section>

      {/* Academics */}
      <section className="academics animated">
        <h2>Our Curriculum & Activities</h2>
        <div className="program-list">
          <div className="program-card">
            <h3>Playgroup – Nursery</h3>
            <p>Colorful classes, story-based learning, basic letters and numbers, rhymes, art, and games.</p>
          </div>
          <div className="program-card">
            <h3>Grades 1–5</h3>
            <p>Fun learning in English, Urdu, Maths, Science, Islamiat & more — project-based education.</p>
          </div>
          <div className="program-card">
            <h3>Grades 6–10</h3>
            <p>Board exam prep, science streams, moral education, debate, tech & cultural activities.</p>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="admissions animated">
        <h2>Admissions & Contact</h2>
        <p>Enroll now for 2025-2026! Visit us or call the admin office for form, criteria, and fee structure.</p>
        <p><strong>📞 +92 312 555 4321</strong></p>
        <p><strong>📧 admin@alliancelearning.pk</strong></p>
        <p><strong>📍 School Road, Faqirabad Thana, Malakand</strong></p>
      </section>

      {/* Testimonials */}
      <section className="testimonials animated">
        <h2>What Parents Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"My child loves going to school! The atmosphere is supportive and creative."</p>
            <span>— Fatima, Grade 1 Parent</span>
          </div>
          <div className="testimonial">
            <p>"This school gives personal attention and develops real confidence in children."</p>
            <span>— Ahmad, Playgroup Parent</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Alliance of Learning School Thana, Faqirabad. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
