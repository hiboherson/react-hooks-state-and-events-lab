import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const liClassName = isInCart ? "in-cart" : "";

  const handleAddToCartClick = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="purple-button" onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
