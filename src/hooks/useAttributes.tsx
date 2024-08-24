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
  });
export const useGetAttributeTerms = (id: number) =>
  useQuery({
    queryKey: ["getAttributeTerms"],
    queryFn: () => GetAttributesTerms(id),
  });
export const useGetDocumentTerms = () =>
  useQuery({
    queryKey: ["getDocumentTerms"],
    queryFn: GetDocumentTerms,
  });
export const useGetElevatorTerms = () =>
  useQuery({
    queryKey: ["getElevatorTerms"],
    queryFn: GetElevatorTerms,
  });
export const useGetFloorTerms = () =>
  useQuery({
    queryKey: ["getFloorTerms"],
    queryFn: GetFloorTerms,
  });
export const useGetNeighborhoodTerms = () =>
  useQuery({
    queryKey: ["getNeighborhoodTerms"],
    queryFn: GetNeighborhoodTerms,
  });
export const useGetTotalAreaTerms = () =>
  useQuery({
    queryKey: ["getTotalAreaTerms"],
    queryFn: GetTotalAreaTerms,
  });
export const useGetNumFloorTerms = () =>
  useQuery({
    queryKey: ["getNumFloorTerms"],
    queryFn: GetNumFloorTerms,
  });
export const useGetNumUnitTerms = () =>
  useQuery({
    queryKey: ["getNumUnitTerms"],
    queryFn: GetNumUnitTerms,
  });
export const useGetRoomTerms = () =>
  useQuery({
    queryKey: ["getRoomTerms"],
    queryFn: GetRoomTerms,
  });
export const useGetYearTerms = () =>
  useQuery({
    queryKey: ["getYearTerms"],
    queryFn: GetYearTerms,
  });
export const useGetParkingTerms = () =>
  useQuery({
    queryKey: ["getParkingTerms"],
    queryFn: GetParkingTerms,
  });
export const useGetOtherFeaturesTerms = () =>
  useQuery({
    queryKey: ["getOtherFeaturesTerms"],
    queryFn: GetOtherFeaturesTerms,
  });
export const useGetAttributeById = (id: number) =>
  useQuery({
    queryKey: ["getAttribute", id],
    queryFn: () => GetAttributeById(id),
  });
