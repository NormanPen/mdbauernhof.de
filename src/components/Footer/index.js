

import logoLandfrauen from "../../media/images/logoLandfrauen.png";
import logoDasBergische from "../../media/images/logoDasBergische.png";
import logoBag from "../../media/images/logoBag.png";

import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-web-blue-light">
      <div>
        <h3>Erleben</h3>
        <ul>
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
        <h3>Kontakt</h3>
        <ul>
          <li>
            <Link to="#">Kontakt</Link>
          </li>
          <li>
            <Link to="#">Impressum</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>Unsere Partner</h3>
        <div className="flex">
          <img scr={logoLandfrauen} alt="Logo Landfrauen" />
          <img scr={logoDasBergische} alt="Logo Das Bergische" />
          <img scr={logoBag} alt="Logo Bundesarbeitsgemeinschaft" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
