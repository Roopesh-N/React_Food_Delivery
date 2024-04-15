
import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderPart=()=>{
    const [btnName,setbtnName]=useState("Login");
    console.log("header re-render")

    useEffect(()=>{
        console.log("useeffect called")

    },[])



    return (<div className="Header-class">
        <div className="logo-class">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="Nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li>Cart</li>
                <li><button className="login-btn" onClick={()=>{
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