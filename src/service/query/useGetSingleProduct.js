import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const useGetSingleProduct = ({ datakey, id }) => {
  return useQuery({
    queryKey: ["all-products", datakey],
    queryFn: () =>
      request.get(`/${datakey}/${id}`).then((res) => res.data),
  });
};
