import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderPart from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";




const Grocery=lazy(()=>import("./components/Grocery"));


const AppLayout=()=>{
    return (
    <div>
        <HeaderPart/>
        <Outlet/>
    </div>
    )
}


const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/restaurant/:restId',
                element:<Restaurant/>,
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>,
            }

        ]
    },

]);

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)