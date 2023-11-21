import { cardsDataObj } from "../utils/mockData";
import { Cart, ShimmerUI } from "../components/index";
import { Link } from "react-router-dom";
import { useResCard } from "../utils/custom-hooks/index";

export default Home = () => {
  const {
    searchList,
    totalItems,
    filterItems,
    clear,
    search,
    setSearch,
    filterClick,
    searchClick,
    clearSearch,
  } = useResCard(cardsDataObj);
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
            onClick={clearSearch}
            disabled={clear}>
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
                <Link
                  key={data.id}
                  to={"/restaurent/" + data.id}>
                  <Cart datas={data} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
