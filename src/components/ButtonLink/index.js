import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  return (
    <Link
      to={props.to}
      className="px-6 py-3 mt-6 text-white rounded-full bg-web-blue-dark"
    >
      {props.children}
    </Link>
  );
};

export default ButtonLink;
