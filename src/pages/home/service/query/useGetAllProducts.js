import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
export const useGetAllProducts = (page = 1) => {
  return useQuery({
    queryKey: ["all", page],
    queryFn: () =>
      request
        .get("/all", { params: { _page: page, _limit: 5 } })
        .then((res) => {
          const pageSize = Number(res?.headers?.get("X-total-Count") / 5);
          return {
            data: res.data,
            pageSize: Math.ceil(pageSize),
          };
        }),
  });
};
