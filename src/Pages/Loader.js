import React from "react";
import "../App.css";

const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <img src="/images/main.png" alt="Loading..." className="logo-spinner" />
    </div>
  );
};

export default Loader;
