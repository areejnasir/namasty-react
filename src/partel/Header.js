import image from "../../public/Gofood-logo.png";

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
          <li>Home</li>
          <li>Favorite</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  </div>
);
