import { useDispatch, useSelector } from "react-redux"
import { decreaseitem, increaseitem, removeitem } from "../redux/actions";

export default function CartPage() {
    const items = useSelector((state) => state.items)
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const dispatch=useDispatch();
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Your <i style={{ color: "#00563B" }}>Cart</i></h1>
            <div className="cartpage">
                {items.map((item, index) => (
                    <div key={index}>
                        <h2>Product: {item.name}</h2>

                        <h3>Price: {item.price}</h3>
                        <h3> Quantity:  
                            <button onClick={()=>dispatch(increaseitem(item.id))} className="quantitybutton"> 
                                +
                            </button>
                             {item.quantity}
                            <button onClick={()=>dispatch(decreaseitem(item.id))} className="quantitybutton">
                                -
                            </button>
                        </h3>
                        <button onClick={() => dispatch(removeitem(item.id))} className="removecartbutton">
                            Remove from Cart
                        </button>

                    </div>
                ))}
                <hr />
                <div>
                    <h3>Total: ${total}</h3>
                </div>
            </div>


        </div>
    )
}