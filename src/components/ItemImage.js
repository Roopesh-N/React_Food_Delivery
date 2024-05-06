import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemImage=({data})=>{
    const dispatch=useDispatch();
    const handlecart=(data)=>{
        // dispatch an action
        dispatch(addItem(data))
    }
    return (
        // If ImageId is provided in API, then only display else None
        data.card.info.imageId ? 
        <div className="">
            <div className="absolute">
                <button className=" text-white bg-black rounded-md px-1 mx-6 my-12" onClick={()=>handlecart(data)}>Add ➕</button>
            </div>
            <img src={CDN_URL+ data.card.info.imageId} className="rounded-md w-28"/>
        
         </div>:
        <div className="">
            <button className=" text-white bg-black rounded-md px-1 mx-6 my-12" onClick={()=>handlecart(data)}>Add ➕</button>
        </div>
    )
}


export default ItemImage 