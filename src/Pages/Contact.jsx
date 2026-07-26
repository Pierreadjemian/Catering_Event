

import "../Styles/Contact.css";

const Section = ({ id, title, body, children}) => {
  return (
    <div id={id} className={`section-card`}>
      <h2 className="section-title">{title}</h2>
      {body && <p className="section-body">{body}</p>}
      {children}
    </div>
  );
};

const ContactRow = ({ icon, label, value }) => {
  return (
    <li className="contact-row">
      <span className="contact-icon" >
        {icon}
      </span>
      <div>
        <p className="contact-label">{label}</p>

          <p className="contact-value">{value}</p>
    
      </div>
    </li>
  );
};



const Contact = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <h1 className="about-heading">Contact us</h1>
        <p className="about-sub">
          Questions about booking, catering, or your event — reach us any way that's easiest.
        </p>
      </header>

      <main className="about-list contact-grid">
        <Section id="contact-info" title="Get in touch" >
          <ul className="contact-list">
            <ContactRow
              icon="📞"
              label="Phone"
              value="+961 123 456"
            
            />
            <ContactRow
              icon="✉️"
              label="Email"
              value="info@diafacatering.com"
            
            />
            <ContactRow
              icon="📍"
              label="Address"
              value="Sin El Fil, Mount Lebanon"
            />
            <ContactRow
              icon="🕐"
              label="Hours"
              value="Mon–Fri, 10am–9pm"
            />
          </ul>
        </Section>

        
       
      </main>
    </div>
  );
};

export default Contact;
