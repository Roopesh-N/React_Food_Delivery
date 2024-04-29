import User from "./user"
import UserClass from "./UserClass"
import React from "react"

export class About extends React.Component{
    constructor(){
        super()
        console.log("parent constructors")
    }
    componentDidMount(){
        console.log("parent Cmount")
    }

    render(){
        console.log("child constructor")
        return (
            <div>
                <h1>About us Page</h1>
    
                <UserClass profession={"Full stack developer from class props"} count={0}/>
            </div>
        ) 
    }
}



