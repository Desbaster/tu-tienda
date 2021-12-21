import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Camara",
            price: 250000,
            pictureUrl:
              "https://http2.mlstatic.com/D_NQ_NP_777466-MLA31993477669_082019-O.webp",
          },
          {
            id: 2,
            title: "Bicicleta",
            price: 40000,
            pictureUrl:
              "https://http2.mlstatic.com/D_NQ_NP_624708-MLA44503599516_012021-O.webp",
          },
          {
            id: 3,
            title: "Bolso",
            price: 6500,
            pictureUrl:
              "https://http2.mlstatic.com/D_NQ_NP_664077-MLA40822321846_022020-O.webp",
          },
          {
            id: 4,
            title: "PS5",
            price: 210000,
            pictureUrl:
              "https://http2.mlstatic.com/D_NQ_NP_2X_739160-MLA44484414453_012021-F.webp",
          },
        ]);
      }, 2000);
    });
    promise.then((resultado) => {
      setProductos(resultado);
    });
  }, []);

  return (
    <>
      {productos.map((items) => (
        <Item
          key={items.id}
          title={items.title}
          pictureUrl={items.pictureUrl}
          price={items.price}
        />
      ))}
    </>
  );
};
export default ItemList;
