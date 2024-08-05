import "./css/RotatingCoins.css";
import RotatingAuth from "./small-component/RotatingAuth";
import RotatingUSA from "./small-component/RotatingUSA";

const RotatingCoins = () => {
  return ( 
    <div className="RotatingCoins">
      <RotatingAuth/>
      <div className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          <div className="text">1100</div>
          <div>Followers <br />on Shopee</div>
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
    </div>
    <RotatingUSA/>
    </div>
   );
}
 
export default RotatingCoins;