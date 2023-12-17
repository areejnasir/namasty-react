import { useEffect, useState } from "react";
import image from "../../public/Gofood-logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default Header = () => {
  const [count, setCount] = useState(null);
  const counterValue = useSelector((state) => state.counter);
  
  useEffect(() => {
    setCount(counterValue);
  });

  const nav_list = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Grocery Store",
      url: "/grocery",
    },
    {
      id: 4,
      name: "Cart",
      url: "/cart",
      number: count,
    },
  ];
  return (
    <div className="flex justify-center items-center bg-goldenrod">
      <div className="container flex-wrap flex justify-between items-center">
        <div className="h-16">
          <img className="w-full h-full object-contain" src={image} />
        </div>
        <div className="nav-items">
          <ul className="nav-ul">
            {nav_list.map((val) => (
              <li key={val.id} className="float-left p-4 text-white">
                <NavLink to={val.url}>
                  {val.name} {val.number && val.number}
                </NavLink>
                {/* <Link to={val.url}>{val.name}</Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
