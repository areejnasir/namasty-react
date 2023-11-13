import heart from "../../public/heart.svg"
import plus from "../../public/plus.png"

export default Cart = (props) => {
  const get = props.datas;
  const { name, desc, price, picture, rating } = get;
  return (
    <div className='cart'>
      <div className='cart-img-container'>
        <img
          className='cart-img'
          src={picture}
        />
      </div>
      <h3>{name}</h3>
      <h6>{desc}</h6>
      <div className='price-rating-container'>
        <p className='price'>{price}</p>
        <span className='rating'>{rating}</span>
      </div>
      <div className="btn-container">
        <button className="add-to-cart"><img src={plus} /></button>
        <button className="add-to-favorite"><img src={heart}/></button>
      </div>
    </div>
  );
};
