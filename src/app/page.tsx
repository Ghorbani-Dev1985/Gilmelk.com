import { Metadata } from "next";
import React, { Suspense } from "react";
import { checkboxGroup, Spinner } from "@nextui-org/react";
import { GetEstates } from "src/services/EstatesServices";

import { GetCategories } from "src/services/CategoryService";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "کافه و رستوران میم | Cafe Restaurant mim",
  description:
    "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم",
};

const HomePage = async () => {
  const estatesPromise = GetEstates()
  const categoryPromise = GetCategories();
  const [estates ,  categories ] = await Promise.all([
    estatesPromise,
    categoryPromise,
  ]);
  console.log(categories && categories)
  return (
    <Suspense fallback={<Spinner size="md" color="primary" />}>
     {
      estates?.map((estate) => {
        return (
          <React.Fragment key={estate.id}>
                <p>{estate.id}</p>  
          </React.Fragment>
        )
      })
     }
    </Suspense>
  );
};

export default HomePage;
