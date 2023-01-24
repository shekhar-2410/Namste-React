// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_Url } from "../../config/config";
import Simmer from "../Simmer";
import useResturant from "../utility/useResturant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant =useResturant(resId);

  return !restaurant ? (
    <Simmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_Url  + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
