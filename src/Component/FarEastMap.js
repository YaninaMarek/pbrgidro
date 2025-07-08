import React from 'react';
import mapRF from '../FotoSite/mapRF.jpg'


const MapWithIcons = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src={mapRF}
        alt="Карта России"
        className="w-full"
      />
    </div>
  );
};

export default MapWithIcons;
