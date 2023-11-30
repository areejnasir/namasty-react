import image from "../../public/Gofood-logo.png";
import { Link, NavLink } from "react-router-dom";

export default Header = () => {
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
  ];
  return (
    <div className='flex justify-center items-center bg-goldenrod'>
      <div className='container flex-wrap flex justify-between items-center'>
        <div className='h-16'>
          <img
            className='w-full h-full object-contain'
            src={image}
          />
        </div>
        <div className='nav-items'>
          <ul className='nav-ul'>
            {nav_list.map((val) => (
              <li key={val.id} className="float-left p-4 text-white">
                <NavLink to={val.url}>{val.name}</NavLink>
                {/* <Link to={val.url}>{val.name}</Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
