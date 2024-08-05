import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function toggleNav() {
    setIsActive(!isActive);
  }

  return ( 
    <div className="Navbar">
      <div className="bg-right"><img src="images/banner-bg-white.png" alt="" /></div>
      <div className="bg-left"><img src="images/bg-white.png" alt="" /></div>
      <nav>
      <div className="header">
      <img src="/logo/logo.png" alt=""/>
    </div>
    <div>
      <ul id="navbar" className={isActive ? "showNav" : 'hideNav'}>
        <li><Link>Home</Link></li>
        <li><Link>Products</Link></li>
        <li><Link>Shop Links</Link></li>
      </ul>
    </div>
    <div id="mobile">
    <div  className={`hamburger ${isActive ? 'active' : ''}`} 
          onClick={toggleNav}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3_h"></div>
      <div className="bar4"></div>
    </div>

    </div>
      </nav>

    </div>
   );
}
 
export default Navbar;