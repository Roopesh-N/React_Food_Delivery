const Contact=()=>{
    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-center">Contact us page </h1>
            <form>
            <label id="name"></label>
            <input  type="text" placeholder="Enter Name" className="p-2 m-2 border border-black"></input>
            <br></br>
            <input type="text" placeholder="Enter Message" className="p-2 m-2 border border-black"></input>
            <br>
            </br>
            <button className="border border-black bg-lime-400 rounded-md p-2 m-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact