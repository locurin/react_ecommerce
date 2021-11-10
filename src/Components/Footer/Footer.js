import React from "react";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <hr /> <div className="footer">{year} - ✿ PlantStore </div>
    </div>
  );
};
