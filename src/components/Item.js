import "./Item.css";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="containerI" key={id}>
      <h2>{title}</h2>
      <img src={pictureUrl} alt={title} className="imgItem" />
      <p className="price">${price}</p>
    </div>
  );
};

export default Item;
