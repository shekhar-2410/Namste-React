import React from 'react';

const Header = () => {
    const navItem = [
        {
            name: 'Home',
            id:1,
            url: '/'},
            {
                name: 'About Us',
                id:2,
                url: '/'},
                {
                    name: 'Food & Drink',
                    id:3,
                    url: '/'},
                    {
                        btn: 'Login',
                        id:4,
                        url: '/'}
    ]

    
	return (
        <>
        <div class='flex flex-wrap box-border h-20 w-100%  border-2 md:shadow-xl   bg-gradient-to-r from-red-500 to-red-800'>
           <div class='flex-auto'>
            <img class = 'pt-1 px-1' src='https://play-lh.googleusercontent.com/n8IX3vB2ABO_Pdt-eIfMyRsYQ2h41Za-XyA6bfUcUdhRzyAoSA0Mvfyb3apYHx5hPgDy'style={{height:'70px',width:'70px'}}></img>
            </div> 
            <div >
                <ul class='flex mt-6 mx-8'>
                    {navItem.map(item =>(<li href='#' class='flex-col mx-2 text-gray-100 hover:text-gray-400 hover:font-bold' key={item.id}>{item.name} <button>{item.btn}</button></li>))}
                </ul>
            </div>
        </div>
        </>
    )
};

export default Header;
