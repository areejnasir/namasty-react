import { useEffect, useState } from "react";

export default useResCard = (cardsDataObj) => {
  const [filtered, setFiltered] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [totalItems, setTotalItems] = useState(cardsDataObj.length);
  const [filterItems, setFilterItems] = useState(0);
  const [search, setSearch] = useState("");
  const [clear, setClear] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFiltered(cardsDataObj); //for data search only
      setSearchList(cardsDataObj); //for store search data and render in ui
    }, 1000);
  }, []);

  const filterClick = () => {
    const filteredList = filtered.filter((data) => data.rating > 3.9);
    setFiltered(filteredList);
    setSearchList(filteredList);
    setFilterItems(filteredList.length);
    setTotalItems(filteredList.length);
  };

  const searchClick = () => {
    const searchData = filtered.filter((value) =>
      value.name.toLowerCase().includes(search.toLowerCase())
    ); //for data search only
    setSearchList(searchData); // for store search data and render ui
    setTotalItems(searchData.length);
    setClear(false);
  };

  const clearSearch = () => {
    setSearchList(cardsDataObj);
    setTotalItems(cardsDataObj.length);
    setSearch("");
    setClear(true);
  };

  // useEffect(() => {
  //   callApi();
  // }, []);

  // const callApi = async () => {
  //   const fetchData = await fetch(
  //     "https://www.foodpanda.pk/restaurant/k2ao/allah-wala-pakwan-and-sheermal-house?joker_id=2788035441"
  //   );
  //   const jsonData = await fetchData.json();
  //   console.log({ jsonData });
  // };

  return {
    filtered,
    searchList,
    totalItems,
    filterItems,
    clear,
    search,
    setSearch,
    filterClick,
    searchClick,
    clearSearch,
  };
};
