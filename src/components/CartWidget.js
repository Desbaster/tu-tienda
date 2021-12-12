import React from "react";
import bolsa from "../bolsa.svg";

const CartWidget = () => {
  return (
    <div className="cart">
      <a href="/">
        <img src={bolsa} alt="logo" width="30px" height="30px" />
      </a>
      <p className="number">4</p>
    </div>
  );
};

export default CartWidget;
