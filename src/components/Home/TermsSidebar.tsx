"use client";
import {
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
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
} from "src/hooks/useAttributes";
import {Selection} from "@react-types/shared";
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
  const [selectedKey , setSelectedKey] = useState<Selection | string[]>(searchParams.get("attribute")?.split("=") || []);
  const CreateQueryString = useCallback((name: string , value: string) => {
    const params = new URLSearchParams(searchParams.toString())  
        params.set(name , value)
      return params.toString()
    },
    [searchParams]
  )
  const ChangeQueryStringHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const termId = e.target.value;
     router.push(
       pathname +
         "?" +
         CreateQueryString('attribute', `${name}&attribute_term=${termId}`)
     );
  }
  if (isPending) return <Spinner size="md" color="primary" />;
  return (
    <aside className="flex flex-col gap-y-2 border border-gray-100 rounded-3xl p-2">
      {neighborhoods && (
        <Select
          items={neighborhoods}
          label="موقعیت مکانی"
          name="pa_neighborhood"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          classNames={{ base: "mb-1.5" }}
          onChange={ChangeQueryStringHandler}
          size="sm"
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
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
        >
          {(document: TermsListType) => (
            <SelectItem key={document.id}>{document.name}</SelectItem>
          )}
        </Select>
      )}
      {years && (
        <Select items={years} label="سال ساخت" name="pa_year-of-construction"
        selectedKeys={selectedKey}
        onSelectionChange={setSelectedKey}
        onChange={ChangeQueryStringHandler} classNames={{ base: "mb-1.5" }} size="sm">
          {(year: TermsListType) => (
            <SelectItem key={year.id}>{year.name}</SelectItem>
          )}
        </Select>
      )}
      {numFloors && (
        <Select
          items={numFloors}
          label="تعداد طبقات ساختمان"
          name="pa_total-number-of-floors"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
        onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
          name="pa_total-number-of-units"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
          name="pa_floor-of-the-desired"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
          name="pa_the-total-area"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
          name="pa_number-of-rooms" 
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
          name="pa_elevator"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
          name="pa_parking"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
          name="pa_other-features"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
          onChange={ChangeQueryStringHandler}
          classNames={{ base: "mb-1.5" }}
          size="sm"
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
