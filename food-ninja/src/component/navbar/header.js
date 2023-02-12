import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utility/useOnline";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Header = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [login, setLogin] = useState(false);
  const isOnline = useOnline();
  const cartItem = useSelector((store) => store.cart.item);
  console.log(cartItem);
  // navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const navItem = [
    {
      name: "Home",
      id: 1,
      icon: "https://www.citypng.com/public/uploads/preview/png-white-outline-fast-food-icon-11653269567imufwkmh2z.png",
      url: "/",
    },
    {
      name: "About Us",
      id: 2,
      icon: "https://www.citypng.com/public/uploads/preview/png-white-outline-fast-food-icon-11653269567imufwkmh2z.png",
      url: "/about",
    },
    {
      name: "Contact Us",
      id: 3,
      icon: "https://www.citypng.com/public/uploads/preview/png-white-outline-fast-food-icon-11653269567imufwkmh2z.png",
      url: "/contact",
    },
    {
      name: "Instamart",
      id: 4,
      icon: "https://www.citypng.com/public/uploads/preview/png-white-outline-fast-food-icon-11653269567imufwkmh2z.png",
      url: "/instamart",
    },
    {
      name: "+",
      icon: "https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png",
      id: 5,
      url: "/cart",
    },
  ];
  return (
    <div className=" bg-black">
      <div
        className=" flex justify-between  box-border h-20 w-100%   md:shadow-xl  fixed w-[100%]"
        style={{ background: "black" }}
      >
        <div>
          <img
            className="py-2 px-1 ml-4"
            src="/logo.svg"
            style={{ width: "100px" }}
          ></img>
        </div>
        <div>
          <ul className="flex mt-6 gap-2">
            {navItem.map((item) => (
              <li
                className={
                  "flex-col mt-2 mx-2 text-gray-100 hover:text-gray-400 hover:font-bold tracking-normal"
                }
                key={item.id}
              >
                <Link to={item.url}>
                  <div className="flex">
                    <img
                      className="mx-2 rounded-full"
                      src={item.icon}
                      style={{ width: "25px", color: "white" }}
                    />
                    {item.name} {item.id === 5 ? cartItem.length : ""}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex mt-6 ">
            <li className="border mx-4 py-2 px-6 rounded-md bg-white">
              {login ? (
                <button onClick={() => setLogin(false)}>Login</button>
              ) : (
                <button onClick={() => setLogin(true)}>Logout</button>
              )}
            </li>
            <li>
              <img
                className="w-10 h-10 rounded-full"
                src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
                alt=""
              />
            </li>
            <li className=" mr-4">
              {isOnline ? (
                <div className="h-3 w-3 mt-2  bg-lime-500 rounded-full"></div>
              ) : (
                <div className="h-3 w-3 mt-2 rounded-full bg-red-600"></div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
