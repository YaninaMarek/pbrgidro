import React from "react";
import "../App.css";

function EquipmentCard({ item, isFlipped, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
        </div>
        <div className="card-back">
          <h4>{item.name}</h4>
          <p className="info">{item.info}</p>
          <table>
            <tbody>
              {item.specs.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.param}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EquipmentCard;
