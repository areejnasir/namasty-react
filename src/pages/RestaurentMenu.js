import { useParams } from "react-router-dom";
import { ShimmerUI, Btn } from "../components";
import { useResMenu } from "../utils/custom-hooks/index";
import heart from "../../public/heart.svg";
import plus from "../../public/plus.png";
import { useDispatch } from "react-redux";
import { increment } from "../redux/reducer/index";

export default RestaurentMenu = () => {
  const { resId } = useParams();
  const items = useResMenu(resId);

  const { name, desc, rating, picture, id } = items;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return Object.keys(items).length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex justify-center items-center">
      <div className="container">
        <div className="res-img-container">
          <img src={picture} />
        </div>
        <h1>{name}</h1>
        <p>{desc}</p>
        <h6>{rating}</h6>
        <p>{id}</p>
        <div className="flex justify-between items-center">
          <Btn
            style="flex justify-center w-40 p-4 bg-goldenrod cursor-pointer items-center rounded-full"
            func={handleIncrement}
          >
            <img className="w-5 h-5" src={plus} />
          </Btn>
          <Btn style="flex justify-center w-30 p-4 bg-d-red cursor-pointer items-center rounded-full">
            <img className="w-5 h-5" src={heart} />
          </Btn>
        </div>
      </div>
    </div>
  );
};
