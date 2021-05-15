import {Link} from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    path: "/",
    className: "",
  },
  {
    title: "Animals",
    path: "/tiere",
    className: "",
  },
];

const Navigation = () => {
  return (
    <div className="bg-yellow-200">
      <div>
        <div>Logo</div>
        <h1>Erlebniswelt Bauernhof</h1>
      </div>
      <div>
        <nav>
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
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
