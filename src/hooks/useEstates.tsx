import { useQuery } from "@tanstack/react-query";
import { GetEstateByCategory, GetEstates, GetOneEstateById, GetRelatedEstates } from "src/services/EstatesServices";
export const useGetEstates = (queryString : string) =>
  useQuery({
    queryKey: ["getEstates"],
    queryFn: () => GetEstates(queryString),
  });
export const useGetEstatesByCategory = (id: number) =>
  useQuery({
    queryKey: ["getProductsByCategory", id],
    queryFn: () => GetEstateByCategory(id),
  });
export const useGetEstateById = (id: number) =>
  useQuery({
    queryKey: ["getProductById", id],
    queryFn: () => GetOneEstateById(id),
  });
  export const useGetRelatedEstates = (ids: number[]) =>
    useQuery({
      queryKey: ["getProductById", ids],
      queryFn: () => GetRelatedEstates(ids),
    });