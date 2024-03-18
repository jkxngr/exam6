import React from "react";
import { useGetCategory } from "../../service/query/useGetCategory";
import { useGetAllProducts } from "./service/query/useGetAllProducts";
import { Card } from "../../components/card/card";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons/button";
import { SearchIcon } from "../../assets/icon/search-icon";
import { useGetSearch } from "../../service/query/useGetSearch";
import { useGetPages } from "./service/query/useGetPages";
import { Search } from "../../components/search/search";
import { useState } from "react";
import { Pagination } from "antd";
import useDebounce from "../../hook/useDebounce";
export const Home = () => {
  const [value, setValue] = React.useState("");
  const [page, setpage] = React.useState(1);
  const search = useDebounce(value);
  const { data: searchData } = useGetSearch(search);
  const { data: categoryData } = useGetCategory();
  const { data: allData } = useGetAllProducts(page);

  const buttons = Array(allData?.pageSize).fill(null);
  const changePage = (page) => {
    setpage(page);
  };
  return (
    <div>
      <div className="bg-cascadingWhite py-8">
        <div className="container flex items-center justify-between relative">
          <form action="" className="relative max-w-[957px] w-full">
            <div className="absolute  top-1/2 left-[30px] transform -translate-x-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
            <input
              type="search"
              placeholder="198 182 natija bo‘yicha "
              name=""
              className="max-w-[957px] py-[14px] pl-[48px] w-full border-harrisonGrey border-2 rounded-lg"
              id=""
              onChange={(e) => setValue(e.target.value)}
            />
            <Link to="./">
              <div className="absolute z-10 ">
                {value.length > 2 ? (
                  <>
                    {searchData?.slice(0, 8).map((item) => (
                      <Search key={item.id} {...item} datakey="all" />
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </form>
          <Button variant="search">Izlash</Button>
        </div>
      </div>
      <div className="container ">
        <h1 className="pt-[32px] text-[24px] font-bold mb-6">Kategoriyalar</h1>
        <div className="flex flex-wrap gap-9">
          {categoryData?.map((item) => (
            <Link to={`/${item.datakey}`} key={item.id}>
              <div className="w-[84px] text-center" key={item.id}>
                <img src={item.img} alt="" />
                <h1 className="mt-4">{item.title}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <h1 className="pt-[32px] text-[24px] font-bold mb-6">
            Siz uchun maxsus
          </h1>
          <div className="grid grid-cols-5 gap-[15px] pb-16">
            {allData?.data?.map((item) => (
              <Card key={item.id} {...item} datakey="all" />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mb-9 ">
          {buttons?.map((_, i) => (
            <button
              onClick={() => changePage(i + 1)}
              className={`bg-Secondary w-[50px] h-[50px] border rounded-lg ${
                page === i + 1 ? "active bg-blue-300" : ""
              }`}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {/* <div className="flex justify-center mb-9">
          <Pagination defaultCurrent={1} total={50} />
        </div> */}
      </div>
    </div>
  );
};
