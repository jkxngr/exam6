import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostLogin = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
  });
};