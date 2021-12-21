import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../logo.svg";

const ItemCount = ({ stock, initial, onAdd }) => {
  initial = "1";
  stock = "5";
  onAdd = () => {
    console.log("Agregado al carrito");
  };

  const [contador, setContador] = useState(parseInt(initial));
  const sumarUno = () => {
    setContador(contador + 1);
  };
  const restarUno = () => {
    setContador(contador - 1);
  };

  return (
    <Container className="containerCount">
      <h2>Articulo</h2>
      <img src={logo} alt="logo" className="logo" href="/" />
      <section className="section">
        <button className="btn" disabled={contador >= stock} onClick={sumarUno}>
          +
        </button>
        <p className="number">{contador}</p>
        <button className="btn" disabled={contador <= 1} onClick={restarUno}>
          -
        </button>
      </section>
      <button className="addCart" onClick={onAdd}>
        Agregar al carrito
      </button>
    </Container>
  );
};

export default ItemCount;