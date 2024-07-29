import { useQuery } from "@tanstack/react-query";
import { GetTagById, GetTags } from "src/services/TagService";
export const useGetAttributes = () =>
  useQuery({
    queryKey: ["getTags"],
    queryFn: GetTags,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetTagById = (id : number) =>
  useQuery({
    queryKey: ["getTag", id],
    queryFn: () => GetTagById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
