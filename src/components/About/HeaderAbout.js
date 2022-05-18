import { Link } from "react-router-dom";
import ButtonLeftHeader from "../ButtonLeftHeader";

const HeaderAbout = () =>{
 return (
        <nav className="navHeader">
            <h1>Daniela's Store</h1>
            <Link to="/" className="linkHeader">
                <ButtonLeftHeader text="Home"/>
            </Link>
        </nav>
 );
};

export default HeaderAbout;