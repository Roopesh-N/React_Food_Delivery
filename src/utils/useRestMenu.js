import { useEffect, useState } from "react"
import { REST_URL } from "./constants";

const useRestMenu=(resId)=>{
    const [restInfo,setRestInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    //if i didn't use dependency here as soon as the data changes in the api it will re-render the component.
    const fetchMenu=async ()=>{
        const api= await fetch(REST_URL+resId)
        const json=await api.json();
        setRestInfo(json.data);
        
    }

    return restInfo
}

export default useRestMenu