import React, { useState } from "react";
import { usePostUser } from "./service/mutation/usePostUser";
import { client } from "../../config/query-client";
import { request } from "../../config/request";
import { Button } from "../../components/buttons/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveState } from "../../lib/storage";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  email: z.string(),
  password: z.string().min(4),
  name: z.string(),
  img: z.string(),
});
export const Register = () => {
  const navigate = useNavigate();
  const { mutate } = usePostUser();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        reset();
        client.invalidateQueries(["user"]);
        saveState("user", data);
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
    reset();
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const [showPassword, setShowpassword] = useState(false);
  const toggleShowPassword = () => {
    setShowpassword((prev) => !prev);
  };
  return (
    <div className="">
      <div className="">
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="" className="text-harrisonGrey">
            Emailingiz
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className={`${
              errors.email
                ? "rounded-md border-red-500 border-2 py-3 w-[343px] my-4 pl-4"
                : "rounded-md border-cloudedVision border-2 py-3 w-[343px] my-4 pl-4"
            }`}
          />
          {/* <label htmlFor="" className="text-harrisonGrey">
            Telefon raqam
          </label>
          <input
            type="number"
            className="rounded-md border-cloudedVision border-2 py-3 w-[343px] my-4 pl-4"
          /> */}
          <label htmlFor="" className="text-harrisonGrey">
            Isminigiz
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="rounded-md border-cloudedVision border-2 py-3 w-[343px] my-4 pl-4"
          />
          <label htmlFor="" className="text-harrisonGrey">
            Rasm
          </label>
          <input
            type="text"
            {...register("img", { required: true })}
            className="rounded-md border-cloudedVision border-2 py-3 w-[343px] my-4 pl-4"
          />
          <label htmlFor="" className="text-harrisonGrey">
            Parolingiz
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="rounded-md border-cloudedVision border-2 py-3 w-[343px] my-4 pl-4"
          />
          <Button variant="login" type="submit">
            Kirish
          </Button>
        </form>
      </div>
    </div>
  );
};
