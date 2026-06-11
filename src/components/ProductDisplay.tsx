import { useDispatch } from "react-redux"
import { additem } from "../redux/actions"
import products from "../data/product"

export default function ProductDisplay() {
    const dispatch = useDispatch()
    return (
        <div className="display">
            <div>
                <img src={products[0].image} />
            </div>
            <div>
                <h1>{products[0].name}</h1>
                <h3>{products[0].price}</h3>
                <p>{products[0].desc}</p>
                <button onClick={() => dispatch(additem(products[0]))} className="addtocartbutton">
                    Add To Cart
                </button>
            </div>
        </div>
    )
}