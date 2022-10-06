import React from "react";
import "./Header.css";

function Header({ price, symbol, time }) {
  return (
    <div className="header__container">
      <div className="header__items">
        <div className="header__symbol">{symbol}</div>
        <div className="header__price">${price? price : "-"}</div>
        <div className="header__datetime__container">
          <div className="header__date">{time ? time.toLocaleDateString() : "--:--"}</div>
          <div className="header__time">
            {time? time.toTimeString().substring(0, 5): "--:--"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
