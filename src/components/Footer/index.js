import logobag from "../../media/images/logoBag.png";
import logolandfr from "../../media/images/logoLandfrauen.png";
import logodasberg from "../../media/images/logoDasBergische.png";

import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-web-blue-light pl-14 font-Atma">
      <div>
        <h3 className="text-3xl">Erleben</h3>
        <ul className="text-white">
          <li>
            <Link to="#">Über Uns</Link>
          </li>
          <li>
            <Link to="#">Programm</Link>
          </li>
          <li>
            <Link to="#">Unsere Tiere</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-3xl">Kontakt</h3>
        <ul className="text-white">
          <li>
            <Link to="#">Kontakt</Link>
          </li>
          <li>
            <Link to="#">Impressum</Link>
          </li>
        </ul>
        <div className="footer-sozial">
        <a
          href={
            "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-media-icon social-media-icon-facebook"></div>
        </a>

        <a
          href={
            "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-media-icon social-media-icon-instagram"></div>
        </a>
      </div>
      </div>

      <div>
        <h3 className="text-3xl">Unsere Partner</h3>
        <div className="grid justify-start grid-cols-2 md:flex">
          <img src={logolandfr} alt="logobag" />
          <img src={logodasberg} alt="logobag" />
          <img src={logobag} alt="logobag" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
