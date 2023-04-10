import { useState } from "react";
import Popup from "./Popup";

function Product({data}) {
 
    let [popupIsVisible, setPopupIsVisible] = useState(false);
    
    return ( 
        <>
        <li className="product" onClick={()=> setPopupIsVisible(!popupIsVisible)}>

            <p>{data.Mobile}</p>
            <div className="price">
                <p>MRP &#8377;<del>{data.MRP}</del></p>
                <p className="our-price">Our Price &#8377;{data.Price}</p>
            </div>
        </li>
        {popupIsVisible && <Popup popupIsVisible={popupIsVisible} setPopupIsVisible={setPopupIsVisible} data={data}/>}
        </>
     );
}

export default Product;