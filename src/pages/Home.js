import { cardsDataObj } from "../utils/mockData";
import { Cart, ShimmerUI, Btn } from "../components/index";
import { Link } from "react-router-dom";
import { useResCard } from "../utils/custom-hooks/index";
import { higherOrderComp } from "../components/Cart";

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

  const WithPromotedLabel = higherOrderComp(Cart);
  return (
    <div className="flex justify-center items-center py-5">
      <div className="container">
        <div className="flex justify-start items-center flex-wrap">
          <input
            type="text"
            placeholder="Search"
            className="w-[50%] py-3 px-5 border rounded-full ml-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Btn
            name="Search"
            style="w-[100px] p-3 rounded-full bg-black text-white border-none ml-5 md:ml-2"
            func={searchClick}
            disabled={search !== "" ? false : true}
          />
          <Btn
            name="Clear"
            style="w-[100px] p-3 rounded-full bg-black text-white border-none ml-5 md:ml-2 mt-3 md:mt-0 lg:mt-0"
            func={clearSearch}
            disabled={clear}
          />
          <Btn
            name={` Filter Top rated ${filterItems}`}
            style="w-[180px] p-3 rounded-full bg-black text-white border-none ml-5 md:ml-5 mt-3 lg:mt-0"
            func={filterClick}
          />
        </div>

        {searchList.length === 0 ? (
          <ShimmerUI />
        ) : (
          <div className="mt-10">
            <span className="px-5 py-3 rounded-full bg-black text-white ml-5">
              Total Items {totalItems}
            </span>
            <div className="my-10 flex justify-center flex-wrap">
              {searchList.map((data) => (
                <Link key={data.id} to={"/restaurent/" + data.id}>
                  {data.promoted ? (
                    <WithPromotedLabel datas={data} />
                  ) : (
                    <Cart datas={data} />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
