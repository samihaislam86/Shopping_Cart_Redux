import { useSelector } from "react-redux"

export default function Addtocart(){
    const items = useSelector((state) => state.cart.items);
    return <>{items.length}</>
}