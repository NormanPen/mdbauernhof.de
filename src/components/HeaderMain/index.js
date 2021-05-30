//import { Link } from "react-router-dom";
import LinkButton from "../ButtonLink";

const HeaderMain = (props) => {
  return (
    <div className="pt-24 ">
      <div className="relative">
        <img
          className="absolute right-0 top-40 md:hidden -z-10"
          src={props.bgImgSrc}
          alt={props.bgImgAlt}
        />
        <img className="" src={props.imgSrc} alt={props.imgAlt} />
        <div className="px-4 pt-8">
          <h1 className="text-4xl font-medium font-Atma">{props.heading}</h1>
          <p className="pt-5 text-base font-Signika-Negative">
            {props.children}
          </p>
          <LinkButton to={props.btnPath}>{props.btnText}</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
