import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';

import "./Footer.css"

const Footer = () => {
  return(
    <footer className="Footer">

      <div className="SocialNetworks">
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div className="Header-logo">
        FITNESS <span>club</span>
      </div>
      <div className="copyright">© 2022 - FITNESS club</div>
      <div>Made with ❤️ by Andrés David López</div>
      <a 
        href="https://github.com/AndresDavidLopez" 
        target="_blank" 
        rel="noreferrer">
        Mi Portafolio
      </a>
      
    </footer>
  );
}

export default Footer;