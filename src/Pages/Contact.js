import React from "react";
import { useEffect } from "react";
import "../App.css";

function Contact() {
     useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  return (
   <div className="contact-page">
      <h2 className="top">КОНТАКТЫ</h2>
      <div className="contact-top">
        <div className="contact-left">
          <div className="contact-info">
            <p><img src="/images/adress.png" alt="Юр. адрес" className="icon" /> 678144, Республика Саха (Якутия), г. Мирный, ул. Тихонова, 8/87<strong><br />Юридический адрес</strong></p>
            <p><img src="/images/adress.png" alt="Факт. адрес" className="icon" /> 678144, Республика Саха (Якутия), г. Ленск, ул. Мелиораторов, 23<strong><br />Физический адрес</strong></p>
            <p><img src="/images/phone.png" alt="Телефон" className="icon" /><a href="tel:+74113739303" className="iconTel"><span>+74113739303</span></a><strong><br />Телефон</strong></p>
            <p><img src="/images/mail.png" alt="Меил" className="icon" /><a href="mailto:reception@pbr-gidro.com" className="iconTel"><span>reception@pbr-gidro.com</span></a><strong><br />Email</strong></p>
          
          
            <div className="contact-buttons">
              <a href="tel:+74113739303" className="animated-button"><img src="/images/telBut.png" alt="Позвонить" className="icon" /><span className="text">Позвонить</span></a>
              <a href="mailto:reception@pbr-gidro.com" className="animated-button"><img src="/images/mailBut.png" alt="Написать" className="icon" /><span className="text">Написать</span></a>
            </div>

          </div>
        </div>

        <div className="contact-right">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab50425df5c81cce3ece48e20135c86f8d4264463aa09e7e0062314eb65c33a37&amp;source=constructor" width="800" height="400" frameborder="0" title="карта Yandex"></iframe>
        </div>
      </div>

    </div>
  );
}

export default Contact;
