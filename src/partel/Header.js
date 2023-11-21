import image from "../../public/Gofood-logo.png";
import { Link } from "react-router-dom";

export default Header = () => (
  <div className='header'>
    <div className='container'>
      <div className='logo-container'>
        <img
          className='app-logo'
          src={image}
        />
      </div>
      <div className='nav-items'>
        <ul className='nav-ul'>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/grocery">Grocery Store</Link></li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  </div>
);
