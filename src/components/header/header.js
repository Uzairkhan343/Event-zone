
import "./style.css";
import Image2 from "../../assets/images/bglogo.jpg";
import { Link } from "react-router-dom";

const Header=()=>{
  return (
    <div className={"main-header"}>
      {/* header strts from here */}
      <div className={"image-width"}>
        <img src={Image2} alt=""></img>
      </div>
      {/* navigations */}
      <div className={"ul-flex"}>
        <ul>
          <Link to="Home">
            <li className={"hover-bottom-active"}>
              <p >Home</p>
            </li>
          </Link>
          <Link to="Next">
            <li className={"hover-bottom"}>About</li>
          </Link>
          <Link to="Contact">
            <li className={"hover-bottom"}>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

 
export default Header;
