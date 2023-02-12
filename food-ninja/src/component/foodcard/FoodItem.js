import { IMG_Url } from "../../config/config";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-80 group box-border h-5/6 border-2 md:shadow-xl m-6  hover:bg-black rounded-lg p-2">
      <img src={IMG_Url + cloudinaryImageId} />
      <h2 className=" group-hover:text-white font-bold text-xl">{name}</h2>
      <h3 className=" group-hover:text-white">{description}</h3>
      <h4 className=" group-hover:text-white">Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
