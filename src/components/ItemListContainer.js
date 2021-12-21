import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <div className="itemlist">
      <h2 className="container itemContainer">{props.greeting}</h2>
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
