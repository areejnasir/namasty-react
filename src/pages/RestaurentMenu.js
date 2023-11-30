import { useParams } from "react-router-dom";
import { ShimmerUI } from "../components";
import { useResMenu } from "../utils/custom-hooks/index";

export default RestaurentMenu = () => {
  const { resId } = useParams();
  const items = useResMenu(resId)

  const { name, desc, rating, picture, id } = items;

  return (Object.keys(items).length === 0) ? <ShimmerUI /> : (
    <div className='flex justify-center items-center'>
      <div className='container'>
        <div className='res-img-container'>
          <img src={picture} />
        </div>
        <h1>{name}</h1>
        <p>{desc}</p>
        <h6>{rating}</h6>
        <p>{id}</p>
      </div>
    </div>
  );
};
