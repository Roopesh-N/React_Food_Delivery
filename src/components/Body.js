import Rescard from "./ResCard"
import restList from "../utils/mockData.js"

const Body=()=>{
    return (
        <div className="body">
            <div className="search">SearchBar</div>
            <div className="res-container">
                {
                    restList.map((resto)=><Rescard key={resto.name} resData={resto}/>)
                }

            </div>

        </div>
    )
}

export default Body