import {Link} from "react-router-dom";
const Navbar=()=>{
  return (
   <div class="nav-bar">
    <h1>ABESEC STORE APP</h1>
    
        {/* <li><a href="/aboutus">About Us</a></li>
        <li><a href="/contactus">Contact Us</a></li>
        <li>Grievence</li> */}
        <Link to="/aboutus">About us</Link>
        <Link to="/contactus">Contact us</Link>
    </div>
  );
};

export default Navbar;
