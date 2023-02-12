// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_Url } from "../../config/config";
import Simmer from "../Simmer";

import useResturant from "../utility/useResturant";

import { useDispatch } from "react-redux";
import { addItem } from "../utility/cardSlice";

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const { resId } = useParams();
  const restaurant = useResturant(resId);

  const addFootitem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Simmer />
  ) : (
    <div>
      <div className="h-auto static  pt-28 pb-16 bg-slate-900 ">
        <img
          className=" w-[250px] mt   ml-24 absolute "
          src={IMG_Url + restaurant?.cloudinaryImageId}
        />

        <div className="ml-[400px]">
          <h1 className="text-white text-4xl my-2">{restaurant?.name}</h1>
          <h3 className="  text-gray-300 my-2">{restaurant?.area}</h3>
          <h3 className=" text-gray-300 my-2">{restaurant?.city}</h3>
          <h3 className=" text-gray-300 my-2">
            <span className="mr-1">{restaurant?.costForTwoMsg} | </span>
            {restaurant?.avgRating} ⭐
          </h3>
        </div>
      </div>
      <div className="flex flex-col p-2">
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div
            key={item.id}
            className=" w-80 group box-border h-5/6 border-2 md:shadow-xl m-6  hover:bg-black rounded-lg p-2"
          >
            <img
              className="w-full shadow-md rounded-md"
              src={IMG_Url + item?.cloudinaryImageId}
              alt="Food image"
            />
            <button
              className=" bg-slate-200 shadow-sm p-2 my-2 rounded-md "
              onClick={() => addFootitem(item)}
            >
              Add item
            </button>
            <div class=" py-4">
              <div className="group-hover:text-white font-bold text-lg mb-2">
                {item?.name}
              </div>
              <p class="text-gray-700 text-sm group-hover:text-white">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
