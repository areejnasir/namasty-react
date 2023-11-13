import { cardsDataObj } from "../utils/mockData";
import Cart from "../components/Cart";
import ShimmerUI from "../components/ShimmerUI";
import { useEffect, useState } from "react";

export default Body = () => {
  const [filtered, setFiltered] = useState([]);
  const [totalItems, setTotalItems] = useState(cardsDataObj.length);
  const [filterItems, setFilterItems] = useState(0);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([])
  const [clear, setClear] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFiltered(cardsDataObj);
      setSearchList(cardsDataObj)
    }, 2000);
  }, []);

  const filterClick = () => {
    const filteredList = filtered.filter((data) => data.rating < 3.9);
    setFiltered(filteredList);
    setFilterItems(filteredList.length);
    setTotalItems(filteredList.length);
  };

  const searchClick = () => {
    const searchData = filtered.filter((value) => value.name.toLowerCase().includes(search.toLowerCase()));
    setSearchList(searchData);
    setTotalItems(searchData.length);
    setClear(false);
  };

  const clearSearch = () => {
    setSearchList(cardsDataObj);
    setTotalItems(cardsDataObj.length);
    setSearch("")
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

  // optional chaining
  // data?.data?.array

  // conditional randring
  return (
    <div className='body'>
      <div className='container'>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Search'
            className='search-input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
            <button
              className='search-btn'
              onClick={searchClick}
              disabled={search !== "" ? false : true}>
              Search
            </button>

            <button
              className='search-btn'
              onClick={clearSearch} disabled={clear}>
              Clear
            </button>

          <button
            className='filter-btn'
            onClick={filterClick}>
            Filter {filterItems}
          </button>
        </div>

        {searchList.length === 0 ? (
          <ShimmerUI />
        ) : (
          <div className='card-container-main'>
            <span className='total-items'>Total Items {totalItems}</span>
            <div className='card-container'>
              {searchList.map((data) => (
                <Cart
                  datas={data}
                  key={data.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
