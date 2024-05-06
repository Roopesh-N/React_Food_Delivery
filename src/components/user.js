import { useState } from "react";

const User=(props)=>{
    const {profession,count}=props;
    const [Salary,setSalary]=useState(count);
    return (
        <div className="user-class">
            <h1>Roopesh N</h1>
            <h3>{profession}</h3>
            <h4>{Salary}</h4>
            <button onClick={()=>{
                newSal=Salary+1000
                setSalary(newSal)
            }}>Click for hike </button>
        </div>
    )
}

export default User