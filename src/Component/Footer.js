import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column left">
        <img src="/images/main.png" alt="foto" width="50px" className="footer-logo"/>
      </div>

      <div className="footer-column center">
        <nav className="footer-links">
          <Link to="/"> {'>'}Главная</Link>
          <Link to="/services"> {'>'}Услуги</Link>
          <Link to="/equipment"> {'>'}Оборудование</Link>
          <Link to="/certificates"> {'>'}Сертификаты</Link>
          <Link to="/customers"> {'>'}Заказчики</Link>
          <Link to="/contact"> {'>'}Контакты</Link>
        </nav>
      </div>

      <div className="footer-column right">
        <div className="footer-info">
          <div><img src="/images/adress.png" alt="Адрес" /> Юр. адрес: г. Мирный, ул. Тихонова, 8/87</div>
          <div><img src="/images/adress.png" alt="Адрес" /> Факт. адрес: г. Ленск, ул. Мелиораторов, 23</div>
          <div><img src="/images/phone.png" alt="Телефон" /> +7 (41137) 39-303</div>
          <div><img src="/images/mail.png" alt="Почта" /> reception@pbr-gidro.com</div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p className="footer-copy">© 2007–2025 ООО «ПБР_ГИДРО». Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
