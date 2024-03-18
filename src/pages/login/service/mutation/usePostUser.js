import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostUser = () => {
  return useMutation({
    mutationKey: ["users"],
    mutationFn: (data) =>
      request.post("/register", data).then((res) => res.data),
  });
};
