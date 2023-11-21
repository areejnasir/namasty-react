import { useEffect, useState } from "react";
import { cardsDataObj } from "../mockData";

export default useResMenu = (resId) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // resMenu();
    setTimeout(() => {
      setData(cardsDataObj[resId - 1]);
    }, 1000);
  }, []);

  // const resMenu = async () => {
  //     const fetchData = await fetch("api-url");
  //     const jsonData = await fetchData.json();
  //     setData(jsonData)
  // }

  return data;
};
