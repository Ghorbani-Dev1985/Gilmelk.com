import { Metadata } from "next";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "کافه و رستوران میم | Cafe Restaurant mim",
  description:
    "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم",
};

const HomePage = async () => {
  return (
    <Suspense fallback={<Spinner size="md" color="primary" />}>
     
    </Suspense>
  );
};

export default HomePage;
