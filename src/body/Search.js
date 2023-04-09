import { useState } from "react";

function Search({datum, setDatum, persistentData}) {
    let [text, setText] = useState("");

    function handleChange(e){
        e.preventDefault();
        datum = e.target.value === "" ? persistentData: persistentData.filter(data => data.Mobile.toLowerCase().includes(e.target.value.toLowerCase()));
        setDatum(datum);
        setText(e.target.value);
    }
    return ( 
        <div className="search">
            <form>
                <input type="text" placeholder="search mobiles" value={text} onChange={handleChange}></input>
                <i class="fa-solid fa-magnifying-glass"></i>
            </form>
            
        </div>
     );
}

export default Search;