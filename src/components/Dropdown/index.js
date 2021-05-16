
import { Link } from "react-router-dom";


const menuItems = [
    { 
      id: "1",
      title: "Home",
      path: "/",
      className: "text-web-blue",
    },
    {
      id: "2",
      title: "Über Uns",
      path: "/ueberuns",
      className: "text-web-yellow",
    },
    {
      id: "3",
      title: "Programm",
      path: "/programm",
      className: "text-web-red",
    },
    {
      id: "4",
      title: "Unsere Tiere",
      path: "/tiere",
      className: "text-web-green",
    },
    {
      id: "5",
      title: "Kontakt",
      path: "/kontakt",
      className: "text-web-orange",
    },
  ];

const Dropdown = ({ isOpen, toggle}) => {



  return (
    <div className={isOpen ? "flex justify-center bg-white" : "hidden"}
    onClick={toggle} >
      <ul className="w-full text-4xl text-center mt-28 font-Atma">
        {menuItems.map((id, index) => {
          return (
            <li key={index}
            className="pb-8">
              <Link className={id.className} to={id.path}>
                {id.title}
              </Link>
            </li>
          );
        })}
        <div className="flex justify-center pt-12 pb-12 ">
            <a className="pr-8"
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
      </ul>
    </div>
  );
};

export default Dropdown;
