import "./style.css";
import Logo from "../../media/images/Logo.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

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
const Navigation = ({ toggle }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="absolute flex justify-between w-screen h-16 pt-5">
      <div className="flex pl-5">
        <img src={Logo} alt="Logo" />
        <h1 className="pl-3 text-base font-medium text-web-blue">
          Erlebniswelt
          <br />
          Bauernhof
        </h1>
      </div>

      <div className="" >
        <ul  className="hidden text-2xl pr-28 md:flex font-Atma text-web-blue">
          {menuItems.map((id, index) => {
            return (
              <li 
                key={index}
                className="ml-12 border-b-4 border-transparent hover:border-blue-900"
              >
                <Link className={id.className} to={id.path}>
                  {id.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid justify-center md:hidden">
        <div className="grid justify-center w-20" onClick={toggle}>
          <div
            onClick={handleClick}
            className={`burger-item ${click ? "active" : ""}`}
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
        <p className="text-center text-web-blue">
          {click ? "schließen" : "Menü"}
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
