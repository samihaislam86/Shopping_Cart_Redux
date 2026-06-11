import { useSelector } from "react-redux"

export default function Addtocart(){
    const items = useSelector((state) => state.items);
    return <>{items.length}</>
}