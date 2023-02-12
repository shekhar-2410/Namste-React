import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utility/cardSlice";
const MenuCard = () => {
  const cardItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleClearCard = () => {
    dispatch(clearCart());
  };
  return (
    <div className="h-auto static  pt-28  ">
      <button
        className=" bg-slate-200 shadow-sm p-2 my-2 rounded-md ml-6"
        onClick={handleClearCard}
      >
        Clear Cards
      </button>
      {cardItems.map((item) => {
        return <FoodItem key={item.id} {...item}></FoodItem>;
      })}
    </div>
  );
};

export default MenuCard;
