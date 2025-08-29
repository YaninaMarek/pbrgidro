import React, { useEffect, useState } from "react";
import "../App/Certificates.css";

function Certificates() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); 
    setTimeout(() => setShow(true), 100); 
  }, []);

  const images = [
    "/images/sro1.jpg",
    "/images/sro2.jpg",
    "/images/sro3.jpg"
  ];

  return (
    <div className="cert-page">
      <h2 className="top">СЕРТИФИКАТЫ</h2>
      <div className="cert-grid">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`cert-item ${show ? "visible" : ""}`}
            style={{ "--delay": `${idx * 0.3}s` }}
          >
            <img src={src} alt={`certificate-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
