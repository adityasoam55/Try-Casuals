import React, { useEffect, useState } from "react";
import { getProductCategoryList } from "./api";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function CategoryList() {
  const [categorylist, setCategorylist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let list = getProductCategoryList();

    list.then((resp) => {
      setCategorylist(resp);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full text-black py-10 px-4 text-center">
      <p className="pb-6 font-bold text-2xl tracking-wide">
        ALL PRODUCT CATEGORIES
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 p-2">
        {categorylist.map((item) => (
          <Link to={"/category/" + item.name} key={item.name}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-all duration-300 py-6 flex justify-center items-center">
              <p className="font-medium text-lg">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
