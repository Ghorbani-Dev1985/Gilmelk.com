import { useQuery } from "@tanstack/react-query";
import { GetAttributeById, GetAttributes } from "src/services/AttributesService";
export const useGetAttributes = () =>
  useQuery({
    queryKey: ["getAttributes"],
    queryFn: GetAttributes,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetAttributeById = (id : number) =>
  useQuery({
    queryKey: ["getAttribute", id],
    queryFn: () => GetAttributeById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
