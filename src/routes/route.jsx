import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path:'/',
        element : <App/>,
        children :[
            {
                path:'/',
                element : <Home />
            },
            {
                path:'login',
                element : <Login />
            },
            {
                path :'shop',
                element : <Shop />
            },{
                path:'about',
                element: <About />
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path :"cart",
                element : <Cart />
            },
            {
                path:'signup',
                element : <Signup />
            }

        ]
    }

])


export default router