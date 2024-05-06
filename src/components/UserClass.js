import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
            login:"Dummy"
            }
        }
    }
    async componentDidMount(){
        const api=await fetch("https://api.github.com/users/Roopesh-N");
        const json=await api.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    render(){
        const {login}=this.state.userInfo
        console.log("user rendered")
        return (

            <div className="user-class">
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>Name: {login}</h1>

            </div>
        )
    }
}

export default UserClass