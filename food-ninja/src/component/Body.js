import React, { useEffect, useState } from "react";
import Card from "../component/foodcard/Card";
import { filterData } from "./utility/helper";
import Simmer from "./Simmer";
import HerSection from "./HerSection";
import { Link } from "react-router-dom";

// function filterData(change,restaurants){
// const filterData = restaurants.filter((restaurant)=>restaurant.data.name.includes(change)
// )
// return filterData;
// }
const Body = () => {
  const [change, setChange] = React.useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurant] = React.useState([]);
  const handleChange = (event) => {
    setChange(event.target.value);
  };

  //     can direct filter resturant on search bar without using search btn
  //    const filterData = !change?
  // restaurants:
  // restaurants.filter((resturant)=>(resturant?.data?.name.toLowerCase()).includes(change.toLowerCase())
  // )

  useEffect(() => {
    // API call
    //it takes the call back function
    //it takes dependency array as a parameter
    getRestaurants();
  }, []);
  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  //not render component early return
  if (!restaurants) return null;

  return restaurants?.length === 0 ? (
    <Simmer />
  ) : (
    <>
      <HerSection />

      <div className="pl-4">
        {filteredRestaurants.length === 0 ? "No Resturant Available 🙁" : null}
        <br />
        <h1 className="text-3xl md:text-5xl p-2 tracking-loose">Explore</h1>
        <h2 className="text-3xl md:text-5xl  text-yellow-300 leading-relaxed md:leading-snug mb-2">
          Your Food here
        </h2>
        <input
          class={
            "w-1/4 box-border h-10 my-4 ml-28 mr-4  py-6 px-2 border-2 md:shadow-md  border-gray-300 rounded-md"
          }
          type={"text"}
          placeholder={"Search here.."}
          value={change}
          onChange={handleChange}
        />

        <button
          type="button"
          onClick={() => {
            const data = filterData(change, restaurants);
            setFilteredRestaurants(data);
          }}
          class="bg-black text-white h-12 w-24 px-4 rounded-md  md:shadow-md motion-safe:hover:-translate-x-0.5 motion-safe:transition"
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap mx-24">
        {filteredRestaurants.map((resturant) => (
          <Link to={"/restaurant/" + resturant.data.id} key={resturant.data.id}>
            <Card {...resturant.data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
