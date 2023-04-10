function Popup({data, setPopupIsVisible, popupIsVisible}) {
    return ( 
        <div className="popup-container">
            <div class="popup-inner">
                <div className="button-container">
                    <button className="toggle" onClick={(e)=>{e.stopPropagation(); e.preventDefault(); setPopupIsVisible(!popupIsVisible)}}>
                        <i class="fa-solid fa-rectangle-xmark"></i>
                    </button>
                </div>

                <div className="popup">
                    <div className="main">

                        <h2>{data.Mobile}</h2>
                        <div className="price">
                            <p>MRP &#8377;<del>{data.MRP}</del></p>
                            <p className="our-price">Our Price &#8377;{data.Price}</p>
                        </div>
                    </div>
                    <div className="meta">

                        <span className="interested">interested?</span>
                        <div className="contact">
                            <span>Phone : <a href="tel:+919522501527">+919522501527</a></span>
                            <br/>or visit our store: 
                            <div className="address">
                            Shop 3, Jyoti talkies
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Popup;