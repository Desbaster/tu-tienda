import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} className="imgItem" />
      <p className="description">{item.description}</p>
      <p className="price">{item.price}</p>
    </>
  );
};

export default ItemDetail;
