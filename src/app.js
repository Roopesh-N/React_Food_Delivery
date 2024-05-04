import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderPart from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import userContexts from "./utils/userContexts";


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
        <userContexts.Provider value={{loggedInUser:username,setusername}}>
        <div>
            <HeaderPart/>
            <Outlet/>
        </div>
    </userContexts.Provider>
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