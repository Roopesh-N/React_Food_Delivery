import { useEffect, useState } from "react"
import { REST_URL } from "./constants";

const useRestMenu=(resId)=>{
    const [restInfo,setRestInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    })
    const fetchMenu=async ()=>{
        const api= await fetch(REST_URL+resId)
        const json=await api.json();
        setRestInfo(json.data);

    }
    return restInfo
}

export default useRestMenu