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
    <div className="menu  mt-2">
      <div className="h-auto static py-16 bg-blue-900">

        <img className=" w-[250px] mt   ml-24 absolute " src={IMG_Url  + restaurant?.cloudinaryImageId} />

        <div className="ml-[400px]">
        <h1 className="text-white text-4xl my-2">{restaurant?.name}</h1>
        <h3 className="  text-gray-300 my-2">{restaurant?.area}</h3>
        <h3 className=" text-gray-300 my-2">{restaurant?.city}</h3>
        <h3 className=" text-gray-300 my-2"> <span className="mr-1">{restaurant?.costForTwoMsg } | </span> {restaurant?.avgRating} ⭐</h3>
        {/* <h3 className=" text-gray-300">  {restaurant?.costForTwoMsg }</h3> */}
        </div>
       

       
      </div>
      <div className="flex flex-wrap ">
       
      
          {Object.values(restaurant?.menu?.items).map((item) => (
            
            <div key={item.id} className="w-[250px] rounded  shadow-xl m-2 border">
            <img class="w-full" src={IMG_Url+item?.cloudinaryImageId} alt="Food image"/>
            <div class="px-6 py-4">
              <div class="font-bold text-lg mb-2">{item?.name}</div>
              <p class="text-gray-700 text-sm">
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
