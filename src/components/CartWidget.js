import React from "react";
import bolsa from "../bolsa.svg";

const CartWidget = () => {
  return (
    <div className="Cart">
      <a href="/">
        <img src={bolsa} alt="logo" width="30px" height="30px" />
      </a>
      <p className="Number">4</p>
    </div>
  );
};

export default CartWidget;
