export function filterData(search, resturants) {
	const filterData = resturants.filter((resturant)=>(resturant?.data?.name?.toLowerCase().includes(search.toLowerCase()))
    );
    return filterData;
}



