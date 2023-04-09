import Products from "./Products";
import Search from "./Search";
import { useEffect, useState } from "react";
import '../styles/Body.css';


export default function Body({persistentData}){

    let [datum, setDatum] = useState(persistentData);

    return (
        <div className="body">
            <Search datum={datum} setDatum={setDatum} persistentData={persistentData} />
            <Products datum={datum}/>
        </div>
    );
}