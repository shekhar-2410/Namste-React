import React, { useEffect } from 'react';
import Card from '../component/foodcard/Card';
// import { RestrauntList } from '../config/config';
import Picker from 'emoji-picker-react';
import Simmer from './Simmer';

// function filterData(change,restaurants){
// const filterData = restaurants.filter((restaurant)=>restaurant.data.name.includes(change)  
// )
// return filterData;
// }
const Body = () => {
    const [change, setChange] = React.useState('');
    const [restaurants,setRestaurant] = React.useState([])
    const handleChange = (event)=>{
        setChange(event.target.value)
    }
    const filterData = !change? 
    restaurants: 
    restaurants.filter((resturant)=>(resturant?.data?.name.toLowerCase()).includes(change.toLowerCase())
    )
    
    useEffect(() => {
        // API call
        //it takes the call back function
        //it takes dependency array as a parameter
        getRestaurants();
      }, []);
      const getRestaurants = async () =>{
       const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
       const  json = await data.json();
       setTimeout(function(){
       setRestaurant(json?.data?.cards[2]?.data?.data?.cards)
       },5000)
      }
//not render component early return
if (!restaurants) return null;

	return restaurants?.length === 0 ?(<Simmer/>):(
		<>
			<div>
        {filterData.length===0 ? ('No Resturant Available 🙁'):(null)}
        <br/>
            <input class={'w-1/4 box-border h-10 my-4 ml-12  py-6 px-2 border-2 md:shadow-md  border-gray-300 rounded-md'} 
            type={'text'}
             placeholder={"Search here.."}
              value = {change}
            onChange={handleChange}
            />
            
            {/* <button type="button" onClick={()=>{
                const data = filterData(change,restaurants)
               setRestaurant(data)
                
            }}
            class="bg-gray-300 h-9 w-auto px-4 rounded-sm  md:shadow-md motion-safe:hover:-translate-x-0.5 motion-safe:transition">
          Search 
             </button> */}
        </div>

			<div class={'flex flex-wrap justify-center'}>
				{filterData.map((resturant) => {
					return <Card {...resturant.data} key={resturant.data.id} />;
				})}
			</div>
		</>
	);
};

export default Body;
