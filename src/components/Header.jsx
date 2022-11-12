import React from "react";
import Equilibrium from "../images/image-equilibrium.jpg"; 
import IconWiew from "../images/icon-view.svg";


function Header() {
  return(
  <div className="equlibr-view">
          <img className="nft-img" src={Equilibrium} alt="equilibrium img" />
          <img className="icon-view" src={IconWiew} alt="icon-view" />
  </div>
  )
}

export default Header;