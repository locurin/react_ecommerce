import React, { useContext } from "react";

import { Bag } from "react-bootstrap-icons";

import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";

import "./CartIcon.css";

export const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log("cartItems:", cartItems);
  return (
    <div>
      <Link to={"/cart"} className="cartIcon">
        {" "}
        <Bag />
        {itemCount > 0 ? (
          <span className="cartCount"> {itemCount} </span>
        ) : null}
      </Link>
    </div>
  );
};
