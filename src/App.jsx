import React from "react";
import "./App.css";

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon">
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5.5 10.5V21h13V10.5" />
      <path d="M9 21v-6h6v6" />
      <path d="M10 9.5h4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon">
      <path d="M12 3l8 3v6c0 5-3.3 8-8 10-4.7-2-8-5-8-10V6l8-3z" />
      <path d="M8.5 12l2.3 2.3 4.7-5" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon">
      <path d="M3 8l4-3 4 3 2-2 4 2 4 4-3 3-3-2-3 3-3-3-3 2-4-4z" />
      <path d="M7 5l3 3" />
      <path d="M17 8l-3 3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="calendar-icon">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 10h18" />
      <path d="M8 14h2M14 14h2M8 17h2M14 17h2" />
    </svg>
  );
}

function SocialIcon({ children }) {
  return <span className="social-icon">{children}</span>;
}

function App() {
  return (
    <main className="coming-soon">

      {/* Background overlay */}
      <div className="background-overlay"></div>

      {/* Header */}
      <header className="brand-header">
        <span className="brand-line"></span>

        <div>
          <h2>T.O ANIFOWOSE</h2>
          <p>REAL ESTATE</p>
        </div>

        <span className="brand-line"></span>
      </header>

      {/* Main Card */}
      <section className="maintenance-card">

        <div className="logo-circle">
          <HouseIcon />
        </div>

        <div className="coming-soon-title">
          <span></span>
          <em>Coming Soon</em>
          <span></span>
        </div>

        <h1>
          WEBSITE
          <strong>UNDER</strong>
          <small>MAINTENANCE</small>
        </h1>

        <div className="gold-divider"></div>

        <p className="intro">
          We are working behind the scenes to bring you
          <br />
          a better real estate experience.
        </p>

        {/* Features */}
        <div className="features">

          <div className="feature">
            <HouseIcon />
            <h3>PREMIUM</h3>
            <p>PROPERTIES</p>
          </div>

          <div className="feature">
            <ShieldIcon />
            <h3>TRUST &</h3>
            <p>INTEGRITY</p>
          </div>

          <div className="feature">
            <HandshakeIcon />
            <h3>CLIENT</h3>
            <p>SATISFACTION</p>
          </div>

        </div>

        {/* Coming Back Box */}
        <div className="back-soon">

          <CalendarIcon />

          <div>
            <h3>WE'LL BE LIVE VERY SOON</h3>
            <p>THANK YOU FOR YOUR PATIENCE</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer>

        <div className="contact">
          <div className="contact-icon">☎</div>

          <div>
            <p>+234 803 123 4567</p>
            <p>admin@toanifowose.com</p>
          </div>
        </div>

        <div className="socials">
          <SocialIcon>f</SocialIcon>
          <SocialIcon>◎</SocialIcon>
          <SocialIcon>in</SocialIcon>
          <SocialIcon>𝕏</SocialIcon>
        </div>

        <div className="website">
          <span className="globe">◎</span>
          <span>www.toanifowose.com</span>
        </div>

      </footer>

      <div className="copyright">
        © {new Date().getFullYear()} T.O Anifowose Real Estate. All Rights Reserved.
      </div>

    </main>
  );
}

export default App;