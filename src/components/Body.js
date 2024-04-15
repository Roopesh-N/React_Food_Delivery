import Rescard from "./ResCard"
import { useState , useEffect} from "react";
import { Shimmer } from "./Shimmer.js";
import { SWIGGY_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const Body=()=>{
    const [listofRest, setlistofRest]=useState([]);

    const [filteredRestlist, setfilteredRestlist]=useState([]);

    const [inputText,setinputText]=useState("");

    useEffect(()=>{
        fetchdata();
        
    },[]);

    const fetchdata=async ()=>{
        //added proxy cors io to api
        const api=await fetch(SWIGGY_URL);
        const data=await api.json()
        const apidata=(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofRest(apidata);
        setfilteredRestlist(apidata);
    };

    if (listofRest.length===0){
        return <Shimmer/>
    }


    return (
        <div className="body">
            <div className="filter-class">
                <div className="Search-class">
                    <input type="text" className="input" value={inputText} onChange={(inp)=>{
                        setinputText(inp.target.value);
                    }}></input>
                    <button className="search-btn" onClick={()=>{
                        // setlistofRest(restList);
                        const filteredlist=listofRest.filter((res)=>res.info.name.toLowerCase().includes(inputText.toLowerCase()));
                        setfilteredRestlist(filteredlist);
                    }}>Search</button>
                </div>


                <button className="Filter-btn" onClick={()=>{
                    const filteredlist=filteredRestlist.filter(
                        (resto)=> resto.info.avgRating >=4 );
                    setfilteredRestlist(filteredlist);
                }}>Top rated restaurants</button>
            </div>

            <div className="res-container">
                {
                    filteredRestlist.map((resto)=>(<Link to={"/restaurant/" + resto.info.id} key={resto.info.id}> <Rescard  resData={resto.info}/></Link>
                        
                        ))}
                {/* <div className="Showmore-btn">
                <button>Show More</button>
            </div> */}
            </div>
        </div>
    )
}

export default Body