import { Link } from "react-router-dom";
import ButtonLeftHeader from "../ButtonLeftHeader";

const HeaderHome = () =>{
 return (
     <nav className="navHeader">
         <h1>Daniela's Store</h1>
         <Link to="/about" className="linkHeader">
            <ButtonLeftHeader text="About"/>
         </Link>
     </nav>
 );
};

export default HeaderHome;