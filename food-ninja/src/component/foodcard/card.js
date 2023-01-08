import React from 'react';
import { IMG_Url } from '../../config/config';
//Config Driven UI

const Foodcard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
	return (
		<div class="group box-border h-60 w-60 border-2 md:shadow-xl m-6 p-2 hover:bg-red-600  rounded-md">
			<img src={IMG_Url + cloudinaryImageId} />
			<h2 class="group-hover:text-white">{name || 'Resturants'}</h2>
			<p class="text-sm group-hover:text-white">{cuisines + ', ' || 'Food Type'}</p>
			<p class="text-sm group-hover:text-white">{avgRating} ⭐</p>
		</div>
	);
};

export default Foodcard;
