import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardLikeIcon } from "../../assets/icon/card-like-icon";

export const Card = ({ img, title, time, price, location, datakey, id }) => {
  const [isLiked, setIsLiked] = useState(
    JSON.parse(localStorage.getItem("likedItems") || "[]").some(
      (item) => item.id === id
    )
  );

  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    const found = likedItems.some((item) => item.id === id);
    setIsLiked(found);
  }, [id]);

  const handleLikeClick = () => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    const foundIndex = likedItems.findIndex((item) => item.id === id);

    if (foundIndex === -1) {
      likedItems.push({ id, title, img, time, price, location, datakey });
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
      setIsLiked(true);
    } else {
      likedItems.splice(foundIndex, 1);
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
      setIsLiked(false);
    }
  };

  return (
    <div>
      <div className="border-placebo border-2 rounded-lg ">
        <Link to={`/${datakey}/${id}`}>
          <img src={img} alt="" className="px-1 pt-1 " />
        </Link>
        <div className="px-[14px] py-3">
          <h1 className="my-3 text-darkVoid text-[14px]">{title}</h1>
          <p className="mb-2 text-vivaldiRed font-bold">{price}</p>
          <p className="mb-3 text-[14px] text-argent">{location}</p>
          <div className="flex justify-between">
            <p className="mb-2 text-[14px] text-argent">{time}</p>
            <button onClick={handleLikeClick}>
              <CardLikeIcon liked={isLiked} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
