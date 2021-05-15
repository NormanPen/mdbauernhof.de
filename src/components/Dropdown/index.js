
import { Link } from "react-router-dom";


const menuItems = [
    { 
      id: "1",
      title: "Home",
      path: "/",
      className: "",
    },
    {
      id: "2",
      title: "Über Uns",
      path: "/ueberuns",
      className: "",
    },
    {
      id: "3",
      title: "Programm",
      path: "/programm",
      className: "",
    },
    {
      id: "4",
      title: "Unsere Tiere",
      path: "/tiere",
      className: "",
    },
    {
      id: "5",
      title: "Kontakt",
      path: "/kontakt",
      className: "",
    },
  ];

const Dropdown = ({ isOpen, toggle}) => {



  return (
    <div className={isOpen ? "flex justify-center bg-white" : "hidden"}
    onClick={toggle} >
      <ul>
        {menuItems.map((id, index) => {
          return (
            <li key={index}>
              <Link className={id.className} to={id.path}>
                {id.title}
              </Link>
            </li>
          );
        })}
        <div className=" sozial-links">
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
      </ul>
    </div>
  );
};

export default Dropdown;
