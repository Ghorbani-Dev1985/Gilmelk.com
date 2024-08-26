"use client";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
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
import { Selection } from "@react-types/shared";
import { TermsListType } from "src/types/terms";
import PriceFilter from "./PriceFilter";

const TermsSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: documents } = useGetDocumentTerms();
  const { data: neighborhoods } = useGetNeighborhoodTerms();
  const { data: years } = useGetYearTerms();
  const { data: numFloors } = useGetNumFloorTerms();
  const { data: numUnits } = useGetNumUnitTerms();
  const { data: floors } = useGetFloorTerms();
  const { data: totalAreas } = useGetTotalAreaTerms();
  const { data: rooms } = useGetRoomTerms();
  const { data: elevators } = useGetElevatorTerms();
  const { data: parkings } = useGetParkingTerms();
  const { data: others, isPending } = useGetOtherFeaturesTerms();
  const TermsItems = [
    {
      id: 1,
      arrayItems: neighborhoods,
      label: "موقعیت مکانی",
      name: "pa_neighborhood",
    },
    {
      id: 2,
      arrayItems: documents,
      label: "نوع سند ملک",
      name: "pa_document",
    },
    {
      id: 3,
      arrayItems: years,
      label: "سال ساخت",
      name: "pa_year-of-construction",
    },
    {
      id: 4,
      arrayItems: numFloors,
      label: "تعداد طبقات ساختمان",
      name: "pa_total-number-of-floors",
    },
    {
      id: 5,
      arrayItems: numUnits,
      label: "تعداد کل واحد‌ها",
      name: "pa_total-number-of-units",
    },
    {
      id: 6,
      arrayItems: floors,
      label: "طبقه مورد نظر",
      name: "pa_floor-of-the-desired",
    },
    {
      id: 7,
      arrayItems: totalAreas,
      label: " متراژ کل ",
      name: "pa_the-total-area",
    },
    {
      id: 8,
      arrayItems: rooms,
      label: "  تعداد اتاق ",
      name: "pa_number-of-rooms",
    },
    {
      id: 9,
      arrayItems: elevators,
      label: " وضعیت آسانسور ",
      name: "pa_elevator",
    },
    {
      id: 10,
      arrayItems: parkings,
      label: " وضعیت پارکینگ ",
      name: "pa_parking",
    },
    {
      id: 11,
      arrayItems: others,
      label: " سایر ویژگی‌ها ",
      name: "pa_other-features",
    },
  ];
  const [selectedKey, setSelectedKey] = useState<Selection | string[]>(
    searchParams.get("attribute")?.split("=") || []
  );
  const CreateQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const ChangeQueryStringHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const termId = e.target.value;
    router.push(
      pathname +
        "?" +
        CreateQueryString("attribute", `${name}&attribute_term=${termId}`)
    );
  };
  if (isPending) return <Spinner size="md" color="primary" />;
  return (
    <aside className="flex flex-col gap-y-2 border border-gray-100 rounded-3xl p-2">
      {TermsItems.map(({ id, arrayItems, label, name }) => {
        return (
          <React.Fragment key={id}>
            {arrayItems && (
              <Select
                items={arrayItems}
                label={label}
                name={name}
                selectedKeys={selectedKey}
                onSelectionChange={setSelectedKey}
                classNames={{ base: "mb-1.5" }}
                onChange={ChangeQueryStringHandler}
                size="sm"
              >
                {(arrayItem: TermsListType) => (
                  <SelectItem key={arrayItem.id}>{arrayItem.name}</SelectItem>
                )}
              </Select>
            )}
          </React.Fragment>
        );
      })}
      <PriceFilter />
    </aside>
  );
};

export default TermsSidebar;
