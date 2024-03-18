import React, { useState, useEffect } from "react";

export const Like = () => {
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const storedLikedItems =
      JSON.parse(localStorage.getItem("likedItems")) || [];
    setLikedItems(storedLikedItems);
  }, []);

  return (
    <div>
      <h2>Liked Items</h2>
      <ul>
        {likedItems.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.location}</p>
            {/* Add any other information you want to display */}
          </li>
        ))}
      </ul>
    </div>
  );
};
