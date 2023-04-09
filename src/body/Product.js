function Product({data}) {
    return ( 
        <li className="product">
            <p>{data.Mobile}</p>
            <div className="price">
                <p>MRP <del>{data.MRP}</del></p>
                <p>Our Price {data.Price}</p>
            </div>
        </li>
     );
}

export default Product;