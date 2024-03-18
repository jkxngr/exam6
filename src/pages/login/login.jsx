import React from "react";
import { useForm } from "react-hook-form";
import { loadState } from "../../lib/storage";
import { useNavigate } from "react-router-dom";
import { usePostLogin } from "./service/mutation/usePostLogin";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveState } from "../../lib/storage";
import { Button } from "../../components/buttons/button";
export const Login = () => {
  const { mutate, isPending } = usePostLogin();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        reset();
        saveState("user", data);
        navigate("/");
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="" className="text-harrisonGrey">
          Emailingiz
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`${
            errors.email
              ? "rounded-md border-red-500 border-2 py-3 w-[343px] my-4 pl-4"
              : "rounded-md border-cloudedVision border-2 py-3 w-[343px] my-4 pl-4"
          }`}
        />

        <label htmlFor="" className="text-harrisonGrey">
          Parolingiz
        </label>
        <input
          type="password"
          {...register("password")}
          className="rounded-md border-cloudedVision border-2 py-3 w-[343px] my-4 pl-4"
        />
        <Button variant="login" type="submit">
          Kirish
        </Button>
      </form>
    </div>
  );
};
