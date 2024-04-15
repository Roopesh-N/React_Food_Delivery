import { useState, useEffect } from "react"
import { Shimmer } from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { REST_URL } from "../utils/constants";

const Restaurant=()=>{

    const [RestInfo,setRestInfo]= useState(null);

    const { restId } = useParams();


    useEffect(()=>{
        fetchMenu();

    },[])

    const fetchMenu=async ()=>{
        const data= await fetch(REST_URL+restId);
        const json = await data.json();

        // const items=(jsondata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        // console.log(jsondata.data);
        setRestInfo(json.data);
        
    }

    if(RestInfo===null){
       return <Shimmer/>
    }

    // const {RestaurantName,cuisins,}
    const {name,cuisines,costForTwoMessage,avgRating}=RestInfo.cards[2].card.card.info;

    var {itemCards}= (RestInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    if(itemCards===undefined){

      var {itemCards}= (RestInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    }
    
    // (RestInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    console.log(itemCards);


    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{avgRating} Rating</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.name}> {item.card.info.name} -- ${item.card.info.defaultPrice/1000 || item.card.info.price/1000}</li>)}
            </ul>
        </div>
    )
}

export default Restaurant