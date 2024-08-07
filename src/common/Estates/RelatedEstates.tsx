"use client";
import { Spinner } from "@nextui-org/react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { useGetRelatedEstates } from "src/hooks/useEstates";
import { EstatesListType } from "src/types/estates";
import React from "react";
import EstateCard from "./EstateCard";

const RelatedEstates = ({ related_ids }: { related_ids: number[] }) => {
  const { data: relatedEstates, isPending } = useGetRelatedEstates(related_ids);
  if (isPending) return <Spinner size="md" color="primary" />;
  console.log(relatedEstates);
  return (
    <section className="flex flex-col gap-y-5">
      <h2 className="flex items-center font-extrabold text-2xl text-neutral-800 my-8">
        <BiSolidBuildingHouse className="size-7" />
        ملک‌های پیشنهادی
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {relatedEstates
          .slice(0, 4)
          .map(
            (estate: EstatesListType) => {
              return (
                <React.Fragment key={estate.id}>
                  <EstateCard estate={estate}/>
                </React.Fragment>
              );
            }
          )}
      </div>
    </section>
  );
};

export default RelatedEstates;
