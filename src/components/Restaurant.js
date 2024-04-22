
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";

const Restaurant=()=>{

    const { restId } = useParams();

    const RestInfo= useRestMenu(restId);

    if(RestInfo===null){
       return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage,avgRating}=RestInfo.cards[2].card.card.info;

    var {itemCards}= (RestInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    if(itemCards===undefined){
        //setting diff path for some restaurants
      var {itemCards}= (RestInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    }

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