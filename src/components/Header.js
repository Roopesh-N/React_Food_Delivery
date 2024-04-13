
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const HeaderPart=()=>{
    const [btnName,setbtnName]=useState("Login");
    console.log("header rerender")

    return (<div className="Header-class">
        <div className="logo-class">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="Nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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