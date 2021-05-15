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
    <nav className="relative flex items-center justify-between h-16">
      <div className="flex">
        <img src={Logo} alt="Logo" />
        <h1>
          Erlebniswelt
          <br />
          Bauernhof
        </h1>
      </div>

      <div className="">
        <ul className="hidden md:flex">
          {menuItems.map((id, index) => {
            return (
              <li key={index}>
                <Link className={id.className} to={id.path}>
                  {id.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="bg-red-300 md:hidden hamburger-toggle w-14"
        onClick={toggle}
      >
        <div
          onClick={handleClick}
          className={`burger-item ${click ? "active" : ""}`}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div>
          <p>{click ? "schließen" : "Menü"}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
