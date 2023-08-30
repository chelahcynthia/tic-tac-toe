import React from "react";

export default function cell({ id, cell, setCells }) {
  const handleClick = (e) => {
   
  };

  return <div className="square" id={id} onClick={handleClick}></div>;
}
