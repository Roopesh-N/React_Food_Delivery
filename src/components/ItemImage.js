import { CDN_URL } from "../utils/constants";
const ItemImage=({data})=>{
    return (
        // If ImageId is provided in API, then only display else None
        data.card.info.imageId ? 
        <div className="">
            <div className="absolute">
                <button className=" text-white bg-black rounded-md px-1 mx-6 my-12">Add ➕</button>
            </div>
            <img src={CDN_URL+ data.card.info.imageId} className="rounded-md w-28"/>
        
         </div>:
        ""
    )
}


export default ItemImage 