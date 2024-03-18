import React from "react";
import { useGetUser } from "./service/query/useGetUsers";
import { loadState } from "../../lib/storage";
import { Navigate } from "react-router-dom";
import img from "../../assets/img/profileBg.png";
import { TieIcon } from "../../assets/icon/tie-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";
import { YoutubeIcon } from "../../assets/icon/youtube-icon";
import { TiktokIcon } from "../../assets/icon/tiktok-icon";
import { TelegramIcon } from "../../assets/icon/telegram-icon";
import { InstagramIcon } from "../../assets/icon/instagram-icon";
import message from "../../assets/img/message.png";
export const Profile = () => {
  const user = loadState("user");
  if (!user) return <Navigate to={"/"} replace />;
  console.log(user);
  return (
    <div className="">
      <img src={img} alt="" />
      <div className="container">
        <div className="-top-[80px] items-center h-[160px] relative  flex gap-3 ">
          <img
            src={user.user.img}
            alt=""
            className="w-[160px] h-[160px] rounded-full"
          />
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl text-white font-bold">
                {user.user.name}
              </h1>
              <TieIcon />
            </div>
            <div className="flex mt-8 gap-6">
              <FacebookIcon />
              <YoutubeIcon />
              <TiktokIcon />
              <TelegramIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-blackOut text-2xl font-bold">Xabarlar</h2>
          <div className="w-[700px] mx-auto flex flex-col items-center">
            <img src={message} alt="" />
            <p className="text-base font-bold mt-[6px] mb-[16px]">
              Hali hech qanday xabar yo'q
            </p>
            <p>
              Barcha yuborilgan va qabul qilingan xabarlar shu yerda saqlanadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
