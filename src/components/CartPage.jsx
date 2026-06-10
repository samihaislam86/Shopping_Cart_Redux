import { useSelector } from "react-redux"

export default function CartPage(){
    const items = useSelector((state) => state.cart.items);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Your <i style={{color:"#00563B"}}>Cart</i></h1>
            <div className="cartpage">
                {items.map((item, index) => (
                <div key={index}>
                    <h2>Product: {item.name}</h2>

                    <h3>Price: {item.price}</h3>
                    <h3>Quantity: {item.quantity}</h3> 

                </div>
            ))}
            <hr/>
            <div>
                <h3>Total: ${total}</h3>
            </div>
            </div>
            
            
        </div>
    )
}