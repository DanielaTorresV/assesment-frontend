import { Link } from "react-router-dom";
import ButtonLeftHeader from "../ButtonLeftHeader";
import ButtonRightHeader from "../ButtonRightHeader";

const HeaderHome = () =>{
 return (
     <nav className="navHeader">
         <h1>Daniela's Store</h1>
         <Link to="/about" className="linkHeader">
            <ButtonLeftHeader text="About"/>
         </Link>
         <Link to="/detail" className="linkHeader">
            <ButtonRightHeader text="ProductDetail"/>
         </Link>
     </nav>
 );
};

export default HeaderHome;