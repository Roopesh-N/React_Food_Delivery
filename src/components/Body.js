import Rescard from "./ResCard"
import restList from "../utils/mockData.js"
import { useState , useEffect} from "react";
import { Shimmer } from "./Shimmer.js";

const Body=()=>{
    const [listofRest, setlistofRest]=useState([]);

    useEffect(()=>{
        fetchdata();
        
    },[]);

    const fetchdata=async ()=>{
        setlistofRest(restList);
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
            <div className="btn-class">
                <button className="Filter-btn" onClick={()=>{
                    const filteredlist=listofRest.filter(
                        (res)=> res.stars>=4
                    );
                    setlistofRest(filteredlist);
                }}>Top rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    listofRest.map((resto)=><Rescard key={resto.name} resData={resto}/>)
                }
            </div>
        </div>
    )
}

export default Body