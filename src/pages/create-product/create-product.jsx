import React from "react";
import { useGetCategory } from "../../service/query/useGetCategory";
// import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
// import { Button, Form, Input, Space } from "antd";
import { Button as Btn } from "../../components/buttons/button";
import { loadState } from "../../lib/storage";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostProduct } from "./service/mutation/usePostProduct";
import { useState } from "react";
export const CreateProduct = () => {
  const user = loadState("user");
  if (!user) return <Navigate to={"/"} replace />;
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const { data } = useGetCategory();
  const { mutate } = usePostProduct(state);
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        reset();
        navigate("/");
        // console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
    console.log(data);
    reset();
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const changeCategory = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="bg-cascadingWhite pb-9">
      <div className="container">
        <h2 className="pt-12 pb-4 text-2xl font-bold">E’lon berish</h2>
        <form
          action=""
          onSubmit={handleSubmit(submit)}
          className="max-w-[850px] w-full"
        >
          <div className="px-8 py-8 bg-white">
            <h3 className="text-xl font-medium mb-7">
              Bizga e’loningiz haqida gapirib bering
            </h3>
            <label htmlFor="" className="text-harrisonGrey mb-2">
              Sarlavha kiriting
            </label>
            <input
              type="text"
              {...register("text", { required: true })}
              placeholder="Masalan iphone 13 Pro Max"
              className="max-w-[794px] mb-6 w-full py-[14px] pl-4 bg-cascadingWhite border-2 border-placebo rounded-l"
            />
            <label htmlFor="" className="text-harrisonGrey mb-2">
              Rukn
            </label>

            <select
              {...register("datakey", { required: true })}
              onChange={changeCategory}
              className="max-w-[794px] w-full py-[14px] pl-4 bg-cascadingWhite border-2 border-placebo rounded-l"
            >
              {data?.map((item) => (
                <option key={item.id} value={item.datakey}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-6 bg-white px-8 py-8">
            <h2 className="text-[20px] font-medium mb-3">
              Bizga e’loningiz haqida gapirib bering
            </h2>
            <p className="text-harrisonGrey text-sm ">
              Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini
              ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz
              mumkin.
            </p>
            <input
              type="text"
              {...register("img", { required: true })}
              className="max-w-[794px]  w-full py-[14px] pl-4 bg-cascadingWhite border-2 border-placebo rounded-l"
            />
          </div>
          <div className="mt-6 bg-white px-8 py-8 rounded-lg">
            <p className="mb-2 text-sm">Tavsif</p>
            <div>
              <input
                type="text"
                className="bg-cascadingWhite pl-4 pt-4 pb-64 border-placebo border-2 outline-placebo w-[794px] "
                {...register("comment", { required: true })}
                placeholder="E’lon haqida batafsil"
              />
            </div>
            <p className="text-dugong text-base mt-6">
              Yana kamida 80 ta belgi yozing
            </p>
          </div>
          <div className="mt-6 bg-white px-8 py-8 rounded-lg ">
            <h2 className="text-[20px] font-medium mb-3">
              Siz bilan bog’lanish uchun
            </h2>
            <div className="max-w-[794px] w-full">
              <label htmlFor="" className="text-harrisonGrey mb-2">
                Joylashuv
              </label>
              <input
                type="text"
                {...register("userLocation", { required: true })}
                className="max-w-[794px] mb-6 w-full py-[14px] pl-4 bg-cascadingWhite border-2 border-placebo rounded-l"
              />
              <label htmlFor="" className="text-harrisonGrey mb-2">
                Ism
              </label>
              <input
                type="text"
                {...register("userName", { required: true })}
                className="max-w-[794px] mb-6 w-full py-[14px] pl-4 bg-cascadingWhite border-2 border-placebo rounded-l"
              />
              <label htmlFor="" className="text-harrisonGrey mb-2">
                Email-manzil
              </label>
              <input
                type="email"
                {...register("userEmail", { required: true })}
                className="max-w-[794px] mb-6 w-full py-[14px] pl-4 bg-cascadingWhite border-2 border-placebo rounded-l"
              />
              <label htmlFor="" className="text-harrisonGrey mb-2">
                Telefon raqami
              </label>
              <input
                type="tel"
                name=""
                id=""
                {...register("userPhone", { required: true })}
                className="max-w-[794px] mb-6 w-full py-[14px] pl-4 bg-cascadingWhite border-2 border-placebo rounded-l"
              />
              <button type="submit">E’lon joylash</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
