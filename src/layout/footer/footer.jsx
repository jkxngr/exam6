import React from "react";
import { LogoWhite } from "../../assets/icon/logo-white";
import { Appleicon } from "../../assets/icon/apple-icon";
import { PlayMarketIcon } from "../../assets/icon/play-market-icon";

export const Footer = () => {
  return (
    <div className="bg-aswadBlack pt-9">
      <div className="container flex justify-between ">
        <LogoWhite />
        <ul className="flex flex-col gap-2 pb-6">
          <li>
            <a href="#" className="text-white  font-medium text-[14px]">
              Mobil ilovalar
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Yordam
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Pullik xizmatlar
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              OXO da biznes
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Saytda reklama
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Foydalanish shartlari
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Maxfiylik siyosati
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Foydalanish shartlari
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Qanday qilib sotish va sotib olish kerak?
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Xavfsizlik qoidalari
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Sayt xaritasi
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Mintaqalar xaritasi
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              OXO da karyera
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium text-[14px]">
              Qayta aloqa
            </a>
          </li>
        </ul>
        <div>
          <div className="flex items-center gap-2 bg-white rounded-lg py-3 px-6">
            <Appleicon />
            <div>
              <p className="text-[12px] font-light font-secondary">
                Available now
              </p>
              <p className="text-[18px] font-secondary ">App Store</p>
            </div>
          </div>
          <div className="flex mt-4 items-center gap-2 bg-white rounded-lg py-3 px-6">
            <PlayMarketIcon />
            <div>
              <p className="text-[12px] font-light font-secondary">
                Available now
              </p>
              <p className="text-[18px] font-secondary ">App Store</p>
            </div>
          </div>
        </div>
      </div>
      <p className="container text-[14px] border-t-deepSpace text-white border-t py-[32px]">
        © 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan
        foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz
        mumkin.
      </p>
    </div>
  );
};
