import React, { useState, useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Equipment from "./Pages/Equipment";
import Certificates from "./Pages/Certificates";
import Customers from "./Pages/Customers";
import Footer from './Component/Footer';
import Loader from './Pages/Loader';
import Navbar from "./Pages/Navbar";
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);               // запускаем исчезновение
      setTimeout(() => setLoading(false), 500); // убираем loader через 0.5 сек
    }, 2000); // общая задержка загрузки

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader fadeOut={fadeOut} />;

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
