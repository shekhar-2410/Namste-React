import React from 'react';
import Card from '../component/foodcard/Card';
import { RestrauntList } from '../config/config';

function filterData(change,restaurants){
const filterData = restaurants.filter((restaurant)=>restaurant.data.name.includes(change)  
)
return filterData;
}

const Body = () => {
    const [change, setChange] = React.useState('');
    const [restaurants,setRestaurant] = React.useState(RestrauntList)
    const handleChange = (event)=>{
        setChange(event.target.value)
    }
    
    

	return (
		<>
			<div>
            <input class={' box-border w-60 h-10 m-4 p-2 border-2 md:shadow-md  border-gray-300 rounded-md'} 
            type={'text'}
             placeholder={"Search here.."}
              value = {change}
            onChange={handleChange}
            />
            
            <button type="button" onClick={()=>{
                const data = filterData(change,restaurants)
               setRestaurant(data)
                
            }}
            class="bg-gray-300 h-9 w-auto px-4 rounded-sm  md:shadow-md motion-safe:hover:-translate-x-0.5 motion-safe:transition">
          Search 
             </button>
        </div>

			<div class={'flex flex-wrap justify-center'}>
				{restaurants.map((resturant) => {
					return <Card {...resturant.data} key={resturant.data.id} />;
				})}
			</div>
		</>
	);
};

export default Body;
