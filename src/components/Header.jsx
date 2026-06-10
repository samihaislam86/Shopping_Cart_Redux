import Addtocart from "./Cart";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();  
    return(
        <div className="header">
            <div>
                <img className="logo" src="./logo.png"/>
            </div>
            <div>
                <ul className="header-ul">
                    <li onClick={() => navigate('/')} style={{cursor:'pointer'}}>HOME</li>
                    <li onClick={() => navigate('/')} style={{cursor:'pointer'}}>PRODUCT</li>
                    <li onClick={() => navigate('/cart')} style={{cursor:'pointer'}}>
                        CART(<Addtocart/>)
                    </li>
                    <li>LOGIN</li>
                </ul>
            </div>
        </div>
    )
}