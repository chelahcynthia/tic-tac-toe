import React from "react";

export default function cell({ id, cell, setCells }) {
  const handleClick = (e) => {
    const taken = e.target.firstChild.classList.contains("circles") || 
    e.target.firstChild.classList.contains("cross")
   
  };

  return <div className="square" id={id} onClick={handleClick}></div>;
}
