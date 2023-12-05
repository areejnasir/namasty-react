import heart from "../../public/heart.svg";
import plus from "../../public/plus.png";
import Btn from "./Btn";

export default Cart = (props) => {
  const get = props.datas;
  const { name, desc, price, picture, rating } = get;
  return (
    <div className="m-5 p-3 bg-gray-200 w-[250px] rounded">
      <div className="mb-5 w-full h-50">
        <img className="w-full h-full object-contain bg-white" src={picture} />
      </div>
      <h3 className="font-semibold">{name}</h3>
      <h6 className="line-clamp-3 my-3">{desc}</h6>
      <div className="flex justify-between items-center mb-2">
        <p className="text-d-red">{price}</p>
        <span className="text-rating">{rating}</span>
      </div>
      <div className="flex justify-between items-center">
        <Btn style="flex justify-center w-40 p-4 bg-goldenrod cursor-pointer items-center rounded-full">
          <img className="w-5 h-5" src={plus} />
        </Btn>
        <Btn style="flex justify-center w-30 p-4 bg-d-red cursor-pointer items-center rounded-full">
          <img className="w-5 h-5" src={heart} />
        </Btn>
      </div>
    </div>
  );
};

// higher order component
const higherOrderComp = (Cart) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-5 rounded-r-full bg-goldenrod text-sm px-3 py-2">Promoted</label>
        <Cart {...props} />
      </div>
    );
  };
};

export { higherOrderComp };
