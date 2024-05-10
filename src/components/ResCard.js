import { CDN_URL } from "../utils/constants"

const Rescard=(props)=>{
    const {resData}=props
    console.log(resData)

    const { cloudinaryImageId, 
            name,
            cuisines,
            avgRating,
            sla
        }=resData


    return (
        <div data-testid="rescard" className="res-card m-5 w-60 h-[500] rounded-lg hover:shadow-md hover:h-[495] hover:w-[235]">
            <img className="rounded-md h-[50%] w-[100%] " src={CDN_URL + cloudinaryImageId} alt=""></img>
            <div className="ml-3">
            <h3 className="py-2 font-bold">{name}</h3>
            <h4 className="">{cuisines.join(', ')}</h4>

            <h5 className="px-2 bg-orange-400 rounded-md mr-[80%]">{avgRating}</h5>
            <h5 className="">{sla.deliveryTime} mins</h5>
            </div>
        </div>
    )
}

// write higher order func here giving res card as input
export const PromotedResCard=(Rescard)=>{
    return (props)=>{
        
        return (
            <div className="">
                <h5 className="absolute text-white bg-black rounded-md p-1 m-3">Promoted</h5>
                <Rescard {...props}/>
            </div>

        );
    };
};

export default Rescard