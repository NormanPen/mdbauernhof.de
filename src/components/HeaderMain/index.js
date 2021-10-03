//import { Link } from "react-router-dom";
import ButtonScroll from "../ButtonScroll";

const HeaderMain = (props) => {
  return (
    <div className="pt-24 ">
      <div className="relative">
        <img
          className="absolute left-0 w-full top-30 lg:hidden -z-10"
          src={props.bgImgSrc}
          alt={props.bgImgAlt}
        />
       
        <img className="object-cover object-center h-80 header-image" src={props.imgSrc} alt={props.imgAlt} />
       
      
        
        <div className="px-4 pt-8">
          <h1 className="text-4xl font-medium font-Atma">{props.heading}</h1>
          <p className="pt-5 pb-10 text-base font-Signika-Negative">
            {props.children}
          </p>

          <ButtonScroll to={props.btnPath}>{props.btnText}</ButtonScroll>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
