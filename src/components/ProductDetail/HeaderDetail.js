import { Link } from "react-router-dom";
import ButtonLeftHeader from "../ButtonLeftHeader";
import ButtonRightHeader from "../ButtonRightHeader";

const HeaderDetail = () =>{
 return (
     <nav className="navHeader">
         <h1>Daniela's Store</h1>
         <Link to="/" className="linkHeader">
            <ButtonLeftHeader text="Home"/>
         </Link>
         <Link to="/about" className="linkHeader">
            <ButtonRightHeader text="About"/>
         </Link>
     </nav>
 );
};

export default HeaderDetail;