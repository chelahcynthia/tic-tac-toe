import React from "react";

export default function cell({ id, cell, setCells }) {
  const handleClick = (e) => {
    const taken = e.target.firstChild.classList.contains("circle") || 
    e.target.firstChild.classList.contains("cross")

    if (!taken) {
      
    }
   
  };

  return <div className="square" id={id} onClick={handleClick}>
    <div className="cross"></div>
  </div>;
}
