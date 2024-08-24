import { useQuery } from "@tanstack/react-query";
import { GetCategories, GetCategoryById } from "src/services/CategoryService";
export const useGetCategories = () =>
  useQuery({
    queryKey: ["getCategories"],
    queryFn: GetCategories,
  });
export const useGetCategoryById = (id : number) =>
  useQuery({
    queryKey: ["getCategory", id],
    queryFn: () => GetCategoryById(id),
  });
