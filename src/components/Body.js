import Rescard from "./ResCard"
import restList from "../utils/mockData.js"
import { useState , useEffect} from "react";
import { Shimmer } from "./Shimmer.js";

const Body=()=>{
    const [listofRest, setlistofRest]=useState([]);
    const [filteredRestlist, setfilteredRestlist]=useState([]);

    const [inputText,setinputText]=useState("");

    useEffect(()=>{
        fetchdata();
        
    },[]);

    const fetchdata=async ()=>{
        setlistofRest(restList);
        setfilteredRestlist(restList);
        // const api=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data=await api.json()
        // console.log(data)
    };
    if (listofRest.length===0){
        console.log("loading")
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
                    filteredRestlist.map((resto)=><Rescard key={resto.name} resData={resto}/>)
                }
            </div>
        </div>
    )
}

export default Body