import { Metadata } from "next";
import React, { Suspense } from "react";
import { checkboxGroup, Spinner } from "@nextui-org/react";
import { GetEstates } from "src/services/EstatesServices";
import queryString from "query-string";
import { EstatesListType } from "src/types/estates";
import EstateCard from "src/common/Estates/EstateCard";
import TermsSidebar from "src/components/Home/TermsSidebar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "کافه و رستوران میم | Cafe Restaurant mim",
  description:
    "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم",
};

const HomePage = async ({ searchParams }: { searchParams: Record<string , any> }) => {
  let splitSearchParams: string = queryString.stringify(searchParams).replace('%26' ,'&' ).replace('%3D' , '=');
  const estatesPromise = GetEstates(splitSearchParams);
  const [estates] = await Promise.all([
    estatesPromise
  ]);

  return (
    <Suspense fallback={<Spinner size="md" color="primary" />}>
      <section className="container grid items-start grid-rows-1 grid-cols-4 gap-3.5 sm:gap-5 mt-9 sm:mt-25 my-16">
        <div className="hidden md:grid md:col-span-1 sticky top-0">
          <TermsSidebar />
        </div>
        <div className="col-span-4 md:col-span-3">
          sort
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
            {estates?.map((estate: EstatesListType) => {
              return (
                <React.Fragment key={estate.id}>
                  <EstateCard estate={estate} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default HomePage;
