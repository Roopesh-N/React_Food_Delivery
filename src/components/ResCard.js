import { IMG_URL } from "../utils/constants"

export const Rescard=(props)=>{
    const {resData}=props
    return (
        <div className="res-card">
            <img className="res-image" src={IMG_URL} alt=""></img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisins.join(', ')}</h4>
            <h5>{resData.stars}</h5>
            <h5>{resData.time} mins</h5>
        </div>
    )
}

export default Rescard