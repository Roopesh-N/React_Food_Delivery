
import {LOGO_URL} from "../utils/constants";
import { useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContexts from "../utils/userContexts";
import { useSelector } from "react-redux";

const HeaderPart=()=>{
    const [btnName,setbtnName]=useState("Login");
    // console.log("header re-render")

    useEffect(()=>{
        // console.log("useeffect called")
    },[])

    const onlinestatus=useOnlineStatus();
    const {loggedInUser}=useContext(userContexts);

    // subscribing to the store using useselector hook
    const cartItems=useSelector((store)=>store.cart.items);

    // console.log(cartItems);

    return (
    <div className="flex justify-between bg-gray-300">
        <div className="w-20">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="Nav-items">
            <ul className="flex p-5">
                <li className="pr-5"> 
                    Online :{onlinestatus? "Yes":"No"}
                </li>
                <li className="pr-5"><Link to="/">Home</Link></li>
                <li className="pr-5"><Link to="/about">About Us</Link></li>
                <li className="pr-5"><Link to="/contact">Contact Us</Link></li>
                <li className="pr-5">
                    <Link to="/Cart">Cart-({cartItems.length} items)</Link>
                </li>
                <li className="pr-5"><Link to="/grocery">Grocery</Link></li>
                <li className="pr-5"><button className="login-btn" onClick={()=>{
                    if(btnName=="Login"){
                        setbtnName("Logout");
                    }else{
                        setbtnName("Login");
                    }
                }}>{btnName}</button></li>
                { (btnName=="Logout") && <li>{loggedInUser}</li>}
            </ul>
        </div>
    </div>
    )
}

export default HeaderPart