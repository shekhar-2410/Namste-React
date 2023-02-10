import { lazy,Suspense } from 'react';
import Body from './component/Body';
import Header from './component/navbar/Header';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import About from './component/navbar/About-Us';
import Error from './component/Error';
import ContactUs from './component/navbar/ContactUs';
import Footer from './component/Footer';
import ResturanMenu from './component/foodcard/ResturanMenu';
import { Profile } from './component/navbar/Profile';
import Simmer from './component/Simmer';
import { Provider } from 'react-redux'
import store from "./component/utility/store"
const Instamart = lazy(() => import("./component/navbar/Instamart"));


const App =()=> {
	return(
  <Provider store={store}>
  <Header />
  <Outlet/>
  <Footer/>
  </Provider>) 
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
    element:<About/>,
    children :[{
      path:'profile', // parent path = about/profile
      element:<Profile/>
    }]
    },
    {
path:'/contact',
element:<ContactUs/>
    },
    {
      path: "/restaurant/:resId",
      element:<ResturanMenu/>
    },
    {
      path: "/instamart",
      element: (
        <Suspense fallback={<Simmer />}>
          <Instamart />
        </Suspense>
      ),
    },
]
},

]) 
  
