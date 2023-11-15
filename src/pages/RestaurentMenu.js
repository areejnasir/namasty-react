import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cardsDataObj } from "../utils/mockData";
import { ShimmerUI } from "../components";

export default RestaurentMenu = () => {
  const [items, setItems] = useState({});
  const { resId } = useParams();

  useEffect(() => {
    // resMenu();
    setTimeout(() => {
      setItems(cardsDataObj[resId - 1]);
    }, 1000);
  }, []);

  const { name, desc, rating, picture, id } = items;

  // const resMenu = async () => {
  //     const fetchData = await fetch("api-url");
  //     const jsonData = await fetchData.json();
  //     setItems(jsonData)
  // }
  return (Object.keys(items).length === 0) ? <ShimmerUI /> : (
    <div className='restaurent-menu-container'>
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
