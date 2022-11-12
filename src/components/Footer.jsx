import React from "react";
import  Avatar from "../images/image-avatar.png"

function Footer() {

  return <div className="the-end">
            <div>
              <img className="avatar" src={Avatar} alt="avatar" />
            </div>
            <div className="end-content">
              <p className="one">Creation of</p>
              <p className="two">Jules Wyvern</p>
            </div>
          </div>
}

export default Footer;