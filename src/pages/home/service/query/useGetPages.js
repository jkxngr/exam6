import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
export const useGetPages = (page = 1) => {
  return useQuery({
    queryKey: ["all", page],
    queryFn: () =>
      request
        .get("/all", { params: { _page: page, _limit: 4 } })
        .then((res) => {
          const pageSize = Number(res?.headers?.get("X-total-Count"));
          return {
            data: res.data,
            pageSize : Math.ceil(pageSize)
          };
        }),
  });
};
