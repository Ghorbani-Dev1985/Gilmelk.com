"use client";
import {
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import {
  useGetDocumentTerms,
  useGetElevatorTerms,
  useGetFloorTerms,
  useGetNeighborhoodTerms,
  useGetNumFloorTerms,
  useGetNumUnitTerms,
  useGetOtherFeaturesTerms,
  useGetParkingTerms,
  useGetRoomTerms,
  useGetTotalAreaTerms,
  useGetYearTerms,
} from "src/hooks/useAttributes";;
import { TermsListType } from "src/types/terms";

const TermsSidebar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { data: documents, isPending } = useGetDocumentTerms();
  const { data: neighborhoods } = useGetNeighborhoodTerms();
  const { data: years } = useGetYearTerms();
  const { data: numFloors } = useGetNumFloorTerms();
  const { data: numUnits } = useGetNumUnitTerms();
  const { data: floors } = useGetFloorTerms();
  const { data: totalAreas } = useGetTotalAreaTerms();
  const { data: rooms } = useGetRoomTerms();
  const { data: elevators } = useGetElevatorTerms();
  const { data: parkings } = useGetParkingTerms();
  const { data: others } = useGetOtherFeaturesTerms();
  const CreateQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  const ChangeQueryStringHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
   console.log(searchParams.size)
   if(searchParams.size >= 1){
    router.refresh()
   }else{
     router.push(
       pathname +
         "?" +
         CreateQueryString(`${name}`, value)
     );
   }
   
  }
  if (isPending) return <Spinner size="md" color="primary" />;
  return (
    <aside className="flex flex-col gap-y-2 border border-gray-100 rounded-3xl p-2">
      {neighborhoods && (
        <Select
          items={neighborhoods}
          label="موقعیت مکانی"
          name="pa_neighborhood"
          classNames={{ base: "mb-1.5" }}
          onChange={ChangeQueryStringHandler}
        >
          {(neighborhood: TermsListType) => (
            <SelectItem key={neighborhood.id}>{neighborhood.name}</SelectItem>
          )}
        </Select>
      )}
      {documents && (
        <Select
          items={documents}
          label="نوع سند ملک"
          name="pa_document"
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
        >
          {(document: TermsListType) => (
            <SelectItem key={document.id}>{document.name}</SelectItem>
          )}
        </Select>
      )}
      {years && (
        <Select items={years} label="سال ساخت" classNames={{ base: "mb-1.5" }}>
          {(year: TermsListType) => (
            <SelectItem key={year.id}>{year.name}</SelectItem>
          )}
        </Select>
      )}
      {numFloors && (
        <Select
          items={numFloors}
          label="تعداد طبقات ساختمان"
          classNames={{ base: "mb-1.5" }}
        >
          {(numFloor: TermsListType) => (
            <SelectItem key={numFloor.id}>{numFloor.name}</SelectItem>
          )}
        </Select>
      )}
      {numUnits && (
        <Select
          items={numUnits}
          label="تعداد کل واحد‌ها"
          classNames={{ base: "mb-1.5" }}
        >
          {(numUnit: TermsListType) => (
            <SelectItem key={numUnit.id}>{numUnit.name}</SelectItem>
          )}
        </Select>
      )}
      {floors && (
        <Select
          items={floors}
          label="طبقه مورد نظر"
          classNames={{ base: "mb-1.5" }}
        >
          {(floor: TermsListType) => (
            <SelectItem key={floor.id}>{floor.name}</SelectItem>
          )}
        </Select>
      )}
      {totalAreas && (
        <Select
          items={totalAreas}
          label=" متراژ کل "
          classNames={{ base: "mb-1.5" }}
        >
          {(totalArea: TermsListType) => (
            <SelectItem key={totalArea.id}>{totalArea.name}</SelectItem>
          )}
        </Select>
      )}
      {rooms && (
        <Select
          items={rooms}
          label="  تعداد اتاق "
          classNames={{ base: "mb-1.5" }}
        >
          {(room: TermsListType) => (
            <SelectItem key={room.id}>{room.name}</SelectItem>
          )}
        </Select>
      )}
      {elevators && (
        <Select
          items={elevators}
          label=" وضعیت آسانسور "
          classNames={{ base: "mb-1.5" }}
        >
          {(elevator: TermsListType) => (
            <SelectItem key={elevator.id}>{elevator.name}</SelectItem>
          )}
        </Select>
      )}
      {parkings && (
        <Select
          items={parkings}
          label=" وضعیت پارکینگ "
          classNames={{ base: "mb-1.5" }}
        >
          {(parking: TermsListType) => (
            <SelectItem key={parking.id}>{parking.name}</SelectItem>
          )}
        </Select>
      )}
      {others && (
        <Select
          items={others}
          label=" سایر ویژگی‌ها "
          classNames={{ base: "mb-1.5" }}
        >
          {(other: TermsListType) => (
            <SelectItem key={other.id}>{other.name}</SelectItem>
          )}
        </Select>
      )}
    </aside>
  );
};

export default TermsSidebar;
