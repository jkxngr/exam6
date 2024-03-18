import React from "react";
import { Link } from "react-router-dom";

export const Search = ({ title, img, id, datakey }) => {
  return (
    <Link to={`/${datakey}/${id}`}>
      <div
        key={id}
        className="flex relative items-center px-4 gap-8 py-2 bg-white pb-3 w-[957px] rounded-lg border-cascadingWhite border-2"
      >
        <img src={img} alt="" className="w-10 h-10" />
        <h1>{title}</h1>
      </div>
    </Link>
  );
};
