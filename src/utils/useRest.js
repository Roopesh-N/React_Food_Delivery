import { SWIGGY_URL } from "./constants";
import { useState,useEffect } from "react";

const useRest=()=>{
    const [listofRest, setlistofRest]=useState([]);

    useEffect(()=>{
        fetchdata();
        
},[]);
    const fetchdata=async ()=>{
        //added proxy cors io to api
        const api=await fetch(SWIGGY_URL);
        const data=await api.json()
        const apidata=(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofRest(apidata);

    };
    return listofRest;
}

export default useRest