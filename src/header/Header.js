import Navbar from "./Navbar";
import Carousal from "./Carousal";
import '../styles/Header.css'

export default function Header(){
    return (
        <div className="header">
            <Navbar />
            <Carousal />
        </div>
    );
}