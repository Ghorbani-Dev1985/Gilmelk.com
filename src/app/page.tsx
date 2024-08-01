import { Metadata } from "next";
import React, { Suspense } from "react";
import { checkboxGroup, Spinner } from "@nextui-org/react";
import { GetEstates, GetEstatesTerms } from "src/services/EstatesServices";
import queryString from "query-string";
import { GetCategories } from "src/services/CategoryService";
import { EstatesListType } from "src/types/estates";
import EstateCard from "src/common/Estates/EstateCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "کافه و رستوران میم | Cafe Restaurant mim",
  description:
    "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم",
};

const HomePage = async ({ searchParams } : {searchParams : string}) => {
  const estatesPromise = GetEstates("pa_neighborhood" , 851)
  const categoryPromise = GetCategories();
  const termsPromise = GetEstatesTerms(51);
  const [estates ,  categories , terms] = await Promise.all([
    estatesPromise,
    categoryPromise,
    termsPromise
  ]);
   console.log(terms && terms)
  return (
    <Suspense fallback={<Spinner size="md" color="primary" />}>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
     {
      estates?.map((estate : EstatesListType) => {
        return (
          <React.Fragment key={estate.id}>
               <EstateCard estate={estate}/>
          </React.Fragment>
        )
      })
     }
       </div>
    </Suspense>
  );
};

export default HomePage;
