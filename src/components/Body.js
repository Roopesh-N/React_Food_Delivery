import Rescard,{PromotedResCard} from "./ResCard"
import { useState , useEffect,useContext} from "react";
import { Shimmer } from "./Shimmer.js";
import { SWIGGY_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRest from "../utils/useRest.js";
import userContexts from "../utils/userContexts.js";
const Body=()=>{

    let listofRest=useRest();
    const [filteredRestlist, setfilteredRestlist]=useState([]);
    const [inputText,setinputText]=useState("");


    const PromotedCard=PromotedResCard(Rescard);
    // console.log(listofRest);

    useEffect(()=>{
        fetchdata();
    },[listofRest]); //if i use [] dependency, it wont gives data for next re-renders.
    //if I used [] dependency here, every time the page rendered, this will get actual list of rest and update the filtered rest with actual list and filters wont work.
    //if i wont use listofrest dependency Home in header is not working because the useRest is rendered only once
    const fetchdata=async ()=>{
        setfilteredRestlist(listofRest);
    };

    if (listofRest.length===0){
        return <Shimmer/>
    }
    const {loggedInUser,setusername}=useContext(userContexts);
    
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-2">
                    <input type="text" className="border border-solid border-gray m-5 shadow-md" data-testid="search" value={inputText} onChange={(inp)=>{
                        setinputText(inp.target.value);
                    }}></input>
                    <button className="bg-green-400 px-3 py-1 rounded-md pr-3 " onClick={()=>{
                        // setlistofRest(restList);
                        const searchedlist=listofRest.filter((res)=>res.info.name.toLowerCase().includes(inputText.toLowerCase()));
                        setfilteredRestlist(searchedlist);
                    }}>Search</button>
                    
                </div>
                <div className="filter m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={()=>{
                    const toprated=filteredRestlist.filter(
                        (resto)=> resto.info.avgRating >4.0 );
                    setfilteredRestlist(toprated);
                }}>Top rated restaurants</button>
                </div>
                <div>
                    <label>Username:</label>
                    <input className="border border-solid border-gray m-5 shadow-md" value={loggedInUser} onChange={(e)=>{
                        setusername(e.target.value)
                    }}></input>
                </div>

            </div>

            <div className="res-container flex flex-wrap">
                {
                    filteredRestlist.map((resto)=>(<Link to={"/restaurant/" + resto.info.id} key={resto.info.id}> 
                    {resto.info.avgRating>=4.2? <PromotedCard resData={resto.info}/> : <Rescard  resData={resto.info}/>}
                    </Link>
                        
                        ))}
                {/* <div className="Showmore-btn">
                <button>Show More</button>
            </div> */}
            </div>
        </div>
    )
}


export default Body