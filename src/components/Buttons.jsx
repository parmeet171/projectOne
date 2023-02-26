import React from "react";

const Buttons = () => {
  return (
    <div className="buttons">
      <p>Select Your Subject Here:</p>
      <div className="buttons_container">
        <a href="#bcom">
          <button className="main_btn">B. Com</button>
        </a>
        <button className="main_btn">M. Com</button>
        <button className="main_btn">B.A</button>
        <button className="main_btn">LLB</button>
        <button className="main_btn">B. Sc</button>
      </div>
    </div>
  );
};

export default Buttons;
