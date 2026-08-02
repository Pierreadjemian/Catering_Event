import './App.css';
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from './Pages/About';
import Menus from './Pages/Menus';
import ThingsToKnow from './Pages/things-to-know';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Pages/Footer';
import Login from "./Pages/Login";
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';
import Users from './Pages/Users';
import { CartProvider } from './Pages/CartContext';
import Order from './Pages/Order';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/menus" element={<Menus />}></Route>
            <Route path="/things-to-know" element={<ThingsToKnow />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/admin/users" element={<Users />} />
            
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;