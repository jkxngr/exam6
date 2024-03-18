import React from "react";
import { useGetSingleProduct } from "../../service/query/useGetSingleProduct";
import { useParams } from "react-router-dom";
import { loadState } from "../../lib/storage";
import { RightArrow } from "../../assets/icon/right-arrow";
import { LocationIcon } from "../../assets/icon/location-icon";
export const ProductDetail = () => {
  const { datakey, id } = useParams();
  const { data, isError, isLoading } = useGetSingleProduct({ datakey, id });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error fetching data</p>;
  }
  const user = loadState("user");

  return (
    <div className="bg-cascadingWhite py-9">
      <div className="container flex gap-6">
        <div>
          <img src={data.img} alt="" className="w-[711px] mb-6" />
          <div className="bg-white w-[711px] px-8 pt-6 pb-8 rounded-lg">
            <div>
              <p className="text-[14px]">Joylashtirildi {data.time}</p>
              <p className="text-[28px] my-4">{data.title}</p>
              <div className="flex gap-5 items-center mb-4">
                <p className="text-[28px] font-bold text-vivaldiRed ">
                  {data.price}
                </p>
                <p className="text-argent text-[20px]">Kelishiladi</p>
              </div>
              <h3 className="mb-4 text-2xl font-medium">Tavsifi</h3>
              <p className="text-sm text-darkVoid">
                Assalomu Alaykum. <br /> Elonni Oxirigacha O'qing... <br />{" "}
                PlayStation 4 ga + 100% ORIGINAL Joystick. ( Yengi + B/u )
                lariyam Bor.Narxi Xar Xil. ORIGINAL. <br /> Qora Rangi.. 45$..
                dan. Svetnoy.. 55$.. dan. <br /> Xammasi IDEALni.. IDEAL..lari.
                KOREAdan Kegan. ORIGINAL 100% ORIGINAL. <br /> Bemalol Tekshirib
                Beriladi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="py-6 px-4 bg-white rounded-lg w-[375px] mb-[17px]">
            <p className="text-xl font-medium mb-8">Foydalanuvchi</p>
            <div className="flex gap-6">
              <img
                src={user.img}
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <div>
                <p className="text-darkVoid font-semibold text-base mb-[6px]">
                  {user.name}
                </p>
                <p className="text-darkVoid text-sm mb-2">
                  Ro’yxatdan o’tgan sanasi 2020
                </p>
                <p className="text-argent text-sm mb-2">Online</p>
                <div className="flex gap-2 items-center">
                  <p className="text-sm font-semibold text-darkVoid">
                    Barcha e’lonlar
                  </p>
                  <RightArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-4 bg-white rounded-lg w-[375px] mb-[17px]">
            <div className="flex items-center gap-6">
              <LocationIcon />
              <div>
                <p className="text-darkVoid text-xl font-medium ">Tashkent</p>
                <p className="text-darkVoid text-sm">Mirzo ulug’bek tumani</p>
                <p className="text-argent text-sm">Sizdan 9 km uzoqlikda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
