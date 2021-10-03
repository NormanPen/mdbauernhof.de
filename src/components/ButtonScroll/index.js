import { Link } from "react-scroll";

const ButtonScroll = (props) => {
  return (
    <Link
      to={props.to}
      spy={true}
      smooth={true}
      className="px-6 py-3 text-white rounded-full bg-web-blue-light"
    >
      {props.children}
    </Link>
  );
};

export default ButtonScroll;
