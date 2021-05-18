import logobag from "../../media/images/logoBag.png";
import logolandfr from "../../media/images/logoLandfrauen.png";
import logodasberg from "../../media/images/logoDasBergische.png";

import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-web-blue-light pl-14 font-Atma">
      <div>
        <h3 className="text-3xl pt-14">Erleben</h3>
        <ul className="text-2xl leading-10 text-white">
          <li className="pt-4">
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
        <h3 className="text-3xl pt-11">Kontakt</h3>
        <ul className="text-2xl leading-10 text-white">
          <li className="pt-4">
            <Link to="#">Kontakt</Link>
          </li>
          <li>
            <Link to="#">Impressum</Link>
          </li>
        </ul>
        <div className="flex pt-9 footer-sozial">
          <a
            className="pr-8"
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

      <div className="w-64 h-80">
        <h3 className="text-3xl pt-11">Unsere Partner</h3>
        <div className="pt-7 ">
          <ul className="flex flex-wrap">
            <li className="pb-4 pr-4">
              <Link to="#">
                <img src={logolandfr} alt="logobag" />
              </Link>
            </li>
            <li className="pr-4">
              <Link to="#">
                <img src={logodasberg} alt="logobag" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={logobag} alt="logobag" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
