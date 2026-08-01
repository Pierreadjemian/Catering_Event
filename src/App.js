
import './App.css';
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from './Pages/About';
import Menus from './Pages/Menus';
import ThingsToKnow from './Pages/things-to-know';
import Contact from './Pages/Contact';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './Pages/Footer';
import Login from "./Pages/Login";




function App() {
  return (
     <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/menus" element={<Menus />}></Route>
          <Route path="/things-to-know" element={<ThingsToKnow />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          
          

        </Routes>
        <Footer/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
