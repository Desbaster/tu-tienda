import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const getItems = (item) => {
  return (
    <div className="container">
      <h2>Zanella Zr 200</h2>
      <img
        src="http://http2.mlstatic.com/D_682026-MLA46213205466_052021-L.jpg"
        alt="Moto"
        className="imgItem"
      />
      <p className="price">$212500</p>
    </div>
  );
};

const ItemDetailContainer = () => {
  const [item, setItems] = useState([]);
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Zanella Zr 200",
            price: 212500,
            pictureUrl:
              "http://http2.mlstatic.com/D_682026-MLA46213205466_052021-L.jpg",
            description:
              "descripcion del producto: K 1000 Motos- Concesionario Oficial Premium - BENELLI - MOTOMEL - ZANELLA LLEVÁ TU ZR 200 OHC TOTALMENTE FINANCIADA CONSULTÁ POR TODAS LAS FINANCIACIONES TODAS LAS FORMAS DE PAGO - TARJETAS SERVICE OFICIAL Y GARANTÍA: BENELLI - MOTOMEL - KEEWAY - ZANELLA",
          },
        ]);
      }, 2000);
    });
    promise.then((resultado) => {
      setItems(resultado);
    });
  }, []);
  return getItems(<ItemDetail item={item} />);
};

export default ItemDetailContainer;
