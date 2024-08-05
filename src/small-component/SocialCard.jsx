import "../css/SocialCard.css";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FacebookIcon from '@mui/icons-material/Facebook';
const SocialCard = () => {
  return ( 

      <div className="SocialCard">
  <a className="socialContainer containerOne" href="#">
    <LocalMallIcon className="social"/>
  </a>
  <a className="socialContainer containerTwo" href="#">
    <img src="logo/lazada.png" className="social" />
  </a>
  <a className="socialContainer containerThree" href="#">
  <FacebookIcon className="social"/>
  </a>
</div>


   );
}
 
export default SocialCard;