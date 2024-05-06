import { CDN_URL } from "../utils/constants"
import ItemImage from "./ItemImage"
const ItemsList=({data})=>{
    // console.log(data)
    return (
        <div className="border-gary-400 py-3 border-b-2">
            <div className="flex justify-between">
            <div className="text-left">
                <h3>{data.card.info.name}</h3>
                <h4 className="text-s">${data.card.info.price?
                        data.card.info.price/1000:
                        data.card.info.defaultPrice/1000}</h4>
                <h5 className="text-xs font-thin pr-10">{data.card.info.description}</h5>
                </div>
                <div>
                    <ItemImage data={data}/>
                </div>
            </div>

        </div>
    )
}
export default ItemsList