import "../Styles/Home.css";
import storyImage from "../Images/x.jpeg";
import heroImage from "../Images/Y.jpeg";
import Login from "../Pages/Login";
import { Link } from "react-router-dom";

const Home = () => {
      console.log("hero:", heroImage);
    console.log("story:", storyImage);

    return(
        <div>
             <main className="body">
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">أهلاً وسهلاً — WELCOME TO DIAFA</p>
          <div className="divider" />
          <h1 className="hero-title">
            Hospitality,<br />served on a plate
          </h1>
          <Link to="/Login"><button className="cta-outline">Order Now</button></Link>
        </div>
      </section>
 
      {/* OUR STORY */}
      <section className="story">
        <div className="story-text">
          <span className="story-eyebrow">Our Story</span>
          <h2>Karam, at every table</h2>
          <p>
            Diafa began the way most Lebanese meals do — with more food
            than anyone could finish, and more guests than were expected.
            That's karam: a generosity that never asks first, it just sets
            another place at the table.
          </p>
          <p>
            Every dish we serve, from the first round of mezze to the last
            piece of knafeh, carries that same instinct. We cater weddings,
            corporate events, and family gatherings across the country,
            bringing the warmth of a Lebanese sofra wherever you're hosting.
          </p>
          <a href="/about" className="text-link">Read our full story →</a>
        </div>
 
        <div className="story-image-wrap">
          <div
            className="story-image"
            style={{ backgroundImage: `url(${storyImage})` }}
          />
          <div className="story-badge">
            <span>Sahtein</span>
            <small>To your health</small>
          </div>
        </div>
      </section>
    </main>
        </div>
    )
}
export default Home;