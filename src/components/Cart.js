import { useSelector } from "react-redux"
import ItemsList from "./ItemsList"
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();

    const clearcart=()=>{
        dispatch(clearCart())
    }
    return (
        <div>
            <div className="font-bold text-center text-2xl">
                <h1>Cart</h1>
                <button className="p-2 m-2 bg-orange-300 rounded-md hover:bg-orange-400" onClick={clearcart}>Clear Cart</button>
            </div>
            <div className="mx-auto w-8/12">

                {cartItems.map((item)=><ItemsList data={item}/>)}
            </div>
        </div>
    )
}

export default Cart