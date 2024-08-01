import { useQuery } from "@tanstack/react-query";
import { GetEstateByCategory, GetEstates, GetEstatesTerms, GetOneEstateById } from "src/services/EstatesServices";
export const useGetEstates = (attrSlug? : string , attrTerm?: number) =>
  useQuery({
    queryKey: ["getEstates"],
    queryFn: () => GetEstates(attrSlug , attrTerm),
    retry: false,
    refetchOnWindowFocus: true,
  });
  export const useGetEstatesTerms = (id: number) =>
    useQuery({
      queryKey: ["getEstatesTerms"],
      queryFn: () => GetEstatesTerms(id),
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
