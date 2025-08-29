import React, { useState,useEffect } from "react";
import { equipmentList } from "../Component/EquipmentData";
import EquipmentCard from "../Component/EquipmentCard"
import "../App/EquipmentCard.css"

function EquipmentPage() {
  const [flippedId, setFlippedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id) => {
    setFlippedId(prev => (prev === id ? null : id));
  };

  return (
    <div>
      <h2 className="top eqip">ОБОРУДОВАНИЕ</h2>
      <div className="eqipcard">
        {equipmentList.map(item => (
          <EquipmentCard
            key={item.id}
            item={item}
            isFlipped={flippedId === item.id}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default EquipmentPage;