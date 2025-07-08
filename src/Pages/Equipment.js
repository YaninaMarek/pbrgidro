import React, { useState,useEffect } from "react";
import { equipmentList } from "../Component/EquipmentData";
import EquipmentCard from "../Component/EquipmentCard"


function EquipmentPage() {
  const [flippedId, setFlippedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id) => {
    setFlippedId(prev => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 className="top" style={{ textAlign: "center", marginTop: "60px", marginBottom: "30px" }}>ОБОРУДОВАНИЕ</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))", gap: "20px", justifyItems: "center"}}>
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