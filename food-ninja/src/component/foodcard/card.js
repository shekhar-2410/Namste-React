import React from 'react';
import { IMG_Url } from '../../config/config';
//Config Driven UI

const Foodcard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
	return (
		<div className=" w-80 group box-border h-5/6 border-2 md:shadow-xl m-6  hover:bg-red-600 rounded-lg">
			<img className="rounded-lg" src={IMG_Url + cloudinaryImageId} />
			<div className="p-10">
				<h2 className="group-hover:text-white">{name || 'Resturants'}</h2>
				<p className="w-44 text-sm group-hover:text-white">{cuisines + ', ' || 'Food Type'}</p>
				<p className="text-sm group-hover:text-white">{avgRating} ⭐</p>
			</div>
		</div>
	);
};

export default Foodcard;
