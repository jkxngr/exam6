import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCategory } from "../../service/query/useGetSingleCategory";
export const Product = () => {
  const { datakey } = useParams();
  const { data } = useGetSingleCategory(datakey);
  return (
    <div className="container grid mt-10 grid-cols-5 gap-y-10 pb-9">
      {data?.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <img
            src={item.img}
            alt=""
            className="object-contain w-[165px] h-[165px]"
          />
          <h1 className="text-center">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
