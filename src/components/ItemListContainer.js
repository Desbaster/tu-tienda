import React from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className="itemlist">
      <h2 className="container itemContainer">{props.greeting}</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
