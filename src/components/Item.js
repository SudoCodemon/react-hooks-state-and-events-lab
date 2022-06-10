import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const isInCart = inCart ? "in-cart" : ""
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setInCart(!inCart)} className="add">{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
