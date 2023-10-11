import { useContext } from "react";

import MealItemForm from "../MealItemForm";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.scss";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const mealPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
