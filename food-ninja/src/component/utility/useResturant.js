import { useState, useEffect } from 'react';
import { Fetch_Menu_Url } from '../../config/config';

const useResturant = (resId) => {
	const [ restaurant, setRestauraunt ] = useState(null);

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	async function getRestaurantInfo() {
		const data = await fetch(Fetch_Menu_Url + resId);
		const json = await data.json();
		setRestauraunt(json.data);
	}

	return restaurant;
};

export default useResturant;
