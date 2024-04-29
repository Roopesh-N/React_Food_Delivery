
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import { useEffect,useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const Restaurant=()=>{

    const { restId } = useParams();

    const RestInfo=useRestMenu(restId);

    if(RestInfo===null){
       return <Shimmer/>
    }

    const {name,cuisines,costForTwoMessage,avgRating}=RestInfo?.cards[2]?.card?.card?.info;

    const categories = RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold p-5 text-2xl">{name}</h1>
            <h3>{cuisines.join(', ')} -- {costForTwoMessage} </h3>

            {categories.map((category) => 
              <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
            )}

        </div>
    )
}

export default Restaurant