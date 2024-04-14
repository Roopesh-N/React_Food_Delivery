import Rescard from "./ResCard"
import { useState , useEffect} from "react";
import { Shimmer } from "./Shimmer.js";
import { SWIGGY_API } from "../utils/constants.js";

const Body=()=>{
    const [listofRest, setlistofRest]=useState([]);

    const [filteredRestlist, setfilteredRestlist]=useState([]);

    const [inputText,setinputText]=useState("");

    useEffect(()=>{
        fetchdata();
        
    },[]);

    const fetchdata=async ()=>{
        
        const api=await fetch({SWIGGY_API});
        const jsondata=await api.json()
        const apidata=(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); //path in api to get resta info
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
                        const filteredlist=listofRest.filter((res)=>res.name.toLowerCase().includes(inputText.toLowerCase()));
                        setfilteredRestlist(filteredlist);
                    }}>Search</button>
                </div>


                <button className="Filter-btn" onClick={()=>{
                    const filteredlist=filteredRestlist.filter(
                        (res)=> res.stars>=4
                    );
                    setfilteredRestlist(filteredlist);
                }}>Top rated restaurants</button>
            </div>

            <div className="res-container">
                {
                    filteredRestlist.map((resto)=><Rescard key={resto.info.id} resData={resto.info}/>)
                }
            </div>
        </div>
    )
}

export default Body