import { useQuery } from "@tanstack/react-query";
import {
  GetAttributeById,
  GetAttributes,
  GetAttributesTerms,
  GetDocumentTerms,
  GetElevatorTerms,
  GetFloorTerms,
  GetNeighborhoodTerms,
  GetNumFloorTerms,
  GetNumUnitTerms,
  GetOtherFeaturesTerms,
  GetParkingTerms,
  GetRoomTerms,
  GetTotalAreaTerms,
  GetYearTerms,
} from "src/services/AttributesService";
export const useGetAttributes = () =>
  useQuery({
    queryKey: ["getAttributes"],
    queryFn: GetAttributes,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetAttributeTerms = (id: number) =>
  useQuery({
    queryKey: ["getAttributeTerms"],
    queryFn: () => GetAttributesTerms(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetDocumentTerms = () =>
  useQuery({
    queryKey: ["getDocumentTerms"],
    queryFn: GetDocumentTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetElevatorTerms = () =>
  useQuery({
    queryKey: ["getElevatorTerms"],
    queryFn: GetElevatorTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetFloorTerms = () =>
  useQuery({
    queryKey: ["getFloorTerms"],
    queryFn: GetFloorTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetNeighborhoodTerms = () =>
  useQuery({
    queryKey: ["getNeighborhoodTerms"],
    queryFn: GetNeighborhoodTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetTotalAreaTerms = () =>
  useQuery({
    queryKey: ["getTotalAreaTerms"],
    queryFn: GetTotalAreaTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetNumFloorTerms = () =>
  useQuery({
    queryKey: ["getNumFloorTerms"],
    queryFn: GetNumFloorTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetNumUnitTerms = () =>
  useQuery({
    queryKey: ["getNumUnitTerms"],
    queryFn: GetNumUnitTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetRoomTerms = () =>
  useQuery({
    queryKey: ["getRoomTerms"],
    queryFn: GetRoomTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetYearTerms = () =>
  useQuery({
    queryKey: ["getYearTerms"],
    queryFn: GetYearTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetParkingTerms = () =>
  useQuery({
    queryKey: ["getParkingTerms"],
    queryFn: GetParkingTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetOtherFeaturesTerms = () =>
  useQuery({
    queryKey: ["getOtherFeaturesTerms"],
    queryFn: GetOtherFeaturesTerms,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetAttributeById = (id: number) =>
  useQuery({
    queryKey: ["getAttribute", id],
    queryFn: () => GetAttributeById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
