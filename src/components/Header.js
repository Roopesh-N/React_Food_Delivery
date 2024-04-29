
import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderPart=()=>{
    const [btnName,setbtnName]=useState("Login");
    // console.log("header re-render")

    useEffect(()=>{
        // console.log("useeffect called")

    },[])

    const onlinestatus=useOnlineStatus();



    return (
    <div className="flex justify-between bg-gray-300">
        <div className="w-20">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="Nav-items">
            <ul className="flex p-5">
                <li className="pr-5"> 
                    Online :{onlinestatus? "yes":"No"}
                </li>
                <li className="pr-5"><Link to="/">Home</Link></li>
                <li className="pr-5"><Link to="/about">About Us</Link></li>
                <li className="pr-5"><Link to="#">Contact Us</Link></li>
                <li className="pr-5">Cart</li>
                <li className="pr-5"><Link to="/grocery">Grocery</Link></li>
                <li className="pr-5"><button className="login-btn" onClick={()=>{
                    if(btnName=="Login"){
                        setbtnName("Logout");
                    }else{
                        setbtnName("Login");
                    }
                }}>{btnName}</button></li>
            </ul>
        </div>
    </div>
    )
}

export default HeaderPart