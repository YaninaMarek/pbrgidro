import React from "react";
import "../App/Slider.css";
import { useNavigate } from "react-router-dom";

function CardEquipment({ image, text, link }) {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate(link);
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <img src={image} alt="Card Front" />
        </div>

        <div className="flip-card-back">
          {text.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          <button className="flip-button" onClick={handleButtonClick}>Подробнее</button>
        </div>

      </div>
    </div>
  );
}

export default CardEquipment;
