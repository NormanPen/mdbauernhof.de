
import { Link } from "react-router-dom";



const Dropdown = ({ isOpen, toggle}) => {
    const menuItems = [
        {
          title: "Home",
          path: "/",
          className: "",
        },
        {
          title: "Über Uns",
          path: "/ueberuns",
          className: "",
        },
        {
          title: "Programm",
          path: "/programm",
          className: "",
        },
        {
          title: "Unsere Tiere",
          path: "/tiere",
          className: "",
        },
        {
          title: "Kontakt",
          path: "/kontakt",
          className: "",
        },
      ];


  return (
    <div className={isOpen ? "flex justify-center bg-white" : "hidden"}
    onClick={toggle} >
      <ul>
        {menuItems.map((item) => {
          return (
            <li>
              <Link className={item.className} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
};

export default Dropdown;
