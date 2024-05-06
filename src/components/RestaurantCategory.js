import { useState } from "react";
import ItemsList from "./ItemsList";
import { Link } from "react-router-dom";
const RestaurantCategory=({data,popdown,setpopdowncategory})=>{
    // console.log(data);
    const {title,itemCards}= data;
    const NumberofItems= itemCards?.length;

    const Toggle=()=>{
            setpopdowncategory();
    }

    return (
        
        <div>
            <div className="mx-auto my-4 p-4 rounded-md w-8/12 bg-gray-100 hover:shadow-md">

                {/* // Accordian Header */}
                <div className="flex justify-between cursor-pointer" onClick={Toggle} >

                    <span className="font-bold">{title} ({NumberofItems})</span>
                    <span>🔽</span>

                </div>

                {/* // Accordian body */}
                {popdown ? <div className="">
                    {itemCards.map((item)=><ItemsList  key={item.card.info.id} data={item}/>)}
                </div>
                :""}

            </div>
        </div>

    );
};

export default RestaurantCategory;