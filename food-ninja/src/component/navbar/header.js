import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utility/useOnline';
import {useSelector} from 'react-redux'

const loggedInUser = () => {
    // API call to check authentication
    return false;
  };

const Header = () => {
    const [login,setLogin] = useState(false) 
    const isOnline = useOnline()
    const cartItem = useSelector(store => store.cart.item)
    console.log(cartItem)
    const navItem = [
        {
            name: 'Home',
            id:1,
            url: '/'},
            {
                name: 'About Us',
                id:2,
                url: '/about'},
                {
                    name: 'Contact Us',
                    id:3,
                    url: '/contact'},
                    {
                        name: 'Instamart',
                        id:4,
                        url: '/instamart'},
                        {
                            name: 'Cart',
                            id:5,
                            url: '/cart'},
                    
    
    ]
	return (
        <> 
        <div className='flex justify-between  box-border h-20 w-100%   md:shadow-xl   bg-gradient-to-r from-blue-500 to-blue-900'>
           <div >
            <img className = 'pt-1 px-1' src='https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_1280.png'style={{height:'70px',width:'70px'}}></img>
            </div> 
            <div >
                <ul className='flex mt-6 gap-2'>
                    {navItem.map(item =>(

                    <li  className='flex-col mx-2 text-gray-100 hover:text-gray-400 hover:font-bold' key={item.id}><Link to = {item.url}>{item.name + cartItem.length} </Link> </li>))}
                </ul>
            </div>
            <div>
            <ul className='flex mt-6 '>
                <li className='border mx-4 p-2 rounded-md bg-white'>{login?(<button onClick={()=>setLogin(false)}>Login</button>):(<button onClick={()=>setLogin(true)}>Logout</button>)}</li>
                <li> <img class="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt=""/>
                </li>
                <li className=' mr-2'>{isOnline ? "✅" : "🔴"}</li>
                </ul>
            </div>
        </div>
        </>
    )
};

export default Header;
