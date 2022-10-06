import React from "react";
import "./Header.css";

function Header({ price, symbol, time }) {
  console.log("price: ", price);
  console.log("time: ", time?.toTimeString());
  return (
    <div className="header__container">
      <div className="header__items">
        <div className="header__symbol">{symbol}</div>
        <div className="header__price">${price}</div>
        <div className="header_date">{time?.toDateString()}</div>
        <div className="header__time">{time?.toTimeString().substring(0,5)}</div>
      </div>
    </div>
  );
}

export default Header;
