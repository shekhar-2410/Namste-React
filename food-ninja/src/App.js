import Body from './component/Body';
import Header from './component/navbar/Header';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import About from './component/navbar/About-Us';
import Error from './component/Error';


const App =()=> {
	return(<>
  <Header />
  <Outlet/>
  

  </>) 
}
export default App;

export const appRouter = createBrowserRouter([
  {path:'/',
  element:<App/>,
errorElement :<Error/>,
children:[
  {
    path:'/',
    element:<Body />
  },
  {
    path:'/about',
    element:<About/>
    }
]
},

]) 
  
