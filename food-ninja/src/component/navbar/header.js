import React,{useState} from 'react';
import { Link } from 'react-router-dom';
const loggedInUser = () => {
    // API call to check authentication
    return false;
  };
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
                    btn_1: 'Login',
                    id:4,
                    url: '/'},
                    {
                        btn_2: 'Logout',
                        id:5,
                        url: '/'}

]
const Header = () => {
    const [login,setLogin] = useState(false) 
	return (
        <> 
        <div className='flex flex-wrap box-border h-20 w-100%  border-2 md:shadow-xl   bg-gradient-to-r from-red-500 to-red-800'>
           <div className='flex-auto'>
            <img className = 'pt-1 px-1' src='https://play-lh.googleusercontent.com/n8IX3vB2ABO_Pdt-eIfMyRsYQ2h41Za-XyA6bfUcUdhRzyAoSA0Mvfyb3apYHx5hPgDy'style={{height:'70px',width:'70px'}}></img>
            </div> 
            <div >
                <ul className='flex mt-6 mx-8'>
                    {navItem.map(item =>(<li  className='flex-col mx-2 text-gray-100 hover:text-gray-400 hover:font-bold' key={item.id}><Link to = {item.url}>{item.name}</Link>{login?(<button onClick={()=>setLogin(false)}>{item.btn_1}</button>):(<button onClick={()=>setLogin(true)}>{item.btn_2}</button>)} </li>))}
                </ul>
            </div>
        </div>
        </>
    )
};

export default Header;
