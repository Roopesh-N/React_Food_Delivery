import React from "react";
import ReactDOM from "react-dom/client";
import HeaderPart from "./components/Header";
import Body from "./components/Body";



const AppLayout=()=>{
    return (
    <div>
        <HeaderPart/>
        <Body/>
    </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)