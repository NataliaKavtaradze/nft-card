import React from "react";
import IcinEthereum from "../images/icon-ethereum.svg";
import IconClock from "../images/icon-clock.svg";

function Main() {
  return  <div>
    <div className="nft-content">
          <h2 className="nft-title">Equilibrium #3429</h2>
          <p className="nft-text">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="icons">
            <div>
              <img
                className="ethereum"
                src={IcinEthereum}
                alt="ethereum icon"
              />
              <p className="ethereum-content">0.041 ETH</p>
            </div>
            <div>
              <img className="clock" src={IconClock} alt="nft-clock" />
              <p className="clock-content">3 days left</p>
            </div>
          </div>
          <div className="line"></div>
        </div>
  </div>
  
}

export default  Main;