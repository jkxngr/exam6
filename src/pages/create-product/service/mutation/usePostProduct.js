import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostProduct = (datakey) => {
  return useMutation({
    mutationKey: ["category"],
    mutationFn: (data) =>
      request.post(`/${datakey}`, data).then((res) => res.data),
  });
};
