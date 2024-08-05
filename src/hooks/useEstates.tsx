import { useQuery } from "@tanstack/react-query";
import { GetEstateByCategory, GetEstates, GetOneEstateById } from "src/services/EstatesServices";
export const useGetEstates = (queryString : string) =>
  useQuery({
    queryKey: ["getEstates"],
    queryFn: () => GetEstates(queryString),
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetEstatesByCategory = (id: number) =>
  useQuery({
    queryKey: ["getProductsByCategory", id],
    queryFn: () => GetEstateByCategory(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetEstateById = (id: number) =>
  useQuery({
    queryKey: ["getProductById", id],
    queryFn: () => GetOneEstateById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
