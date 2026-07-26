

import react from "react";
import "../Styles/Footer.css";
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-logo">Diafa</span>
 
        <nav className="footer-nav">
          {["Home", "Menu", "About us", "Things to know", "Get in touch"].map(
            (item) => (
              <a key={item} href="#" className="footer-link">
                {item}
              </a>
            )
          )}
        </nav>
 
        <p className="footer-contact">
          Beirut, Lebanon &nbsp;&middot;&nbsp; +961 1 234 567 &nbsp;&middot;&nbsp; hello@diafacatering.com
        </p>
 
        <div className="footer-divider" />
 
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Diafa Catering. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
 
export default Footer;