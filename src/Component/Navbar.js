import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="nav-logo">
            <Link to="/" className="logo-link" onClick={closeMenu}><img src="/images/main.png" alt="logo" className="logo" /><span className="company-name">ООО ПБР-ГИДРО</span>
            </Link>
          </div>

          <div className="nav-section nav-left">
            <Link to="/about" onClick={closeMenu} className="link">О НАС</Link>
            <Link to="/services" onClick={closeMenu} className="link">УСЛУГИ</Link>
            <Link to="/equipment" onClick={closeMenu} className="link">ОБОРУДОВАНИЕ</Link>
          </div>

          <div className="nav-section nav-center desktop-only">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <img src="/images/main.png" alt="logo" className="logo" />
              <span className="company-name">ООО ПБР-ГИДРО</span>
            </Link>
          </div>

          <div className="nav-section nav-right">
            <Link to="/certificates" onClick={closeMenu} className="link">СЕРТИФИКАТЫ</Link>
            <Link to="/customers" onClick={closeMenu} className="link">ЗАКАЗЧИКИ</Link>
            <Link to="/contact" onClick={closeMenu} className="link">КОНТАКТЫ</Link>
          </div>

          <div className="burger" onClick={toggleMenu}>
            {menuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/about" onClick={closeMenu}>О НАС</Link>
        <Link to="/services" onClick={closeMenu}>УСЛУГИ</Link>
        <Link to="/equipment" onClick={closeMenu}>ОБОРУДОВАНИЕ</Link>
        <Link to="/certificates" onClick={closeMenu}>СЕРТИФИКАТЫ</Link>
        <Link to="/customers" onClick={closeMenu}>ЗАКАЗЧИКИ</Link>
        <Link to="/contact" onClick={closeMenu}>КОНТАКТЫ</Link>
      </div>

      <div className={`page-content ${menuOpen ? "shifted" : ""}`}>
      </div>
    </>
  );
}

export default Navbar;
