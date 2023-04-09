import { useEffect } from "react";
import Product from "./Product";

function Products({datum}) {

    return ( 
        <ul className="products">
            {datum.map(data => {
                return (
                    <Product key={data.SNO} data={data}/>
                )
            })}
        </ul>
     );
}

export default Products;