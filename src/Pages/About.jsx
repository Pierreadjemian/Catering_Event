import "../Styles/About.css";

const Section = ({ id, title, body }) => {
  return (
    <div id={id} className="section-card">
      <h2 className="section-title">{title}</h2>
      <p className="section-body">{body}</p>
    </div>
  );
};


const About = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <h1 className="about-heading">About us</h1>
      </header>

      <main className="about-list">
        <Section
          id="Kitchen"
          title="The kitchen"
          body="One wood oven, a short seasonal menu, and produce bought the same morning it's cooked. We don't run a big line — three cooks, one pass, nothing plated that wasn't tasted first. If it isn't good enough to serve a friend, it doesn't leave the kitchen."
        />
        <Section 
        id="Company"
          title="The Company"
          body="Diafa Catering opened its doors this year. We're new — no investors, no franchise plan, just three people who left bigger kitchens to cook the way we actually wanted to. Everything here is still being figured out in real time, and we like it that way."
         />
         <Section id="Laction" 
         title="Location" 
         body="Sin el fil   /   Opening Hours: 10:00 - 9:00"
         
         ></Section>
    
      </main>
    </div>
  );
};

export default About;