function Product({data}) {
    return ( 
        <li className="product">
            <p>{data.Mobile}</p>
            <div className="price">
                <p>MRP &#8377;<del>{data.MRP}</del></p>
                <p className="our-price">Our Price &#8377;{data.Price}</p>
            </div>
        </li>
     );
}

export default Product;