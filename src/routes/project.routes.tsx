import { Outlet } from "react-router-dom";
import { MyNavbar } from "../components/navbar/MyNavbar.com";


export let ProjectRoutes={
    path:'/projact',
    element:<div><MyNavbar/><Outlet/></div>,
    children:[
        {
            path:'home',
            element:<h1>im home page</h1>
        },
        {
            path:'login',
            element:<h1>im login page</h1>
        },
        {
            path:'register',
            element:<h1>im register page</h1>
        },
    ]
}