import { Link } from "react-router-dom";
import logo from "../../assets/images/logorivapark.png";
import NavBar from "./NavBar";

export default function Header() {
 
    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

            <NavBar>
            </NavBar>

        </header>
    );
}
