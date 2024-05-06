import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderPart from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart.js";
import Restaurant from "./components/Restaurant";
import userContexts from "./utils/userContexts";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";


const Grocery=lazy(()=>import("./components/Grocery"));


const AppLayout=()=>{

    const [username,setusername]=useState(null);

    useEffect(()=>{
        var data={
            name:"Roopesh_N"
        }
        setusername(data.name);
    },[])


    return (
        <Provider store={appStore}>
        <userContexts.Provider value={{loggedInUser:username,setusername}}>
        <div>
            <HeaderPart/>
            <Outlet/>
        </div>
    </userContexts.Provider>
    </Provider>
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
                path:'/Cart',
                element:<Cart/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>,
            },
        

        ]
    },

]);

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)