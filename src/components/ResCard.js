import { CDN_URL } from "../utils/constants"

const Rescard=(props)=>{
    const {resData}=props

    const { cloudinaryImageId, 
            name,
            cuisines,
            avgRating,
            sla
        }=resData


    return (
        <div className="res-card">
            <img className="res-image" src={CDN_URL + cloudinaryImageId} alt=""></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{avgRating}</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    )
}

export default Rescard