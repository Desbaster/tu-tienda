import React from "react";
import ItemDetail from "./ItemDetail";
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className="itemlist">
      <h2 className="container itemContainer">{props.title}</h2>
      <ItemDetail />
    </div>
  );
};

export default ItemListContainer;
