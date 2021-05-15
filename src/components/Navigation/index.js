import "./style.css";
import Logo from "../../media/images/Logo.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";



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
          {menuItems.map((item) => {
            return (
              <li>
                <Link className={item.className} to={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          ;
          <div className="hidden sozial-links">
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
      <div
        className="bg-red-300 md:hidden hamburger-toggle w-14"
        onClick={toggle}>
        <div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div>
          <p> Menu</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
