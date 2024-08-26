import React, { Suspense } from "react";
import { GetEstates } from "src/services/EstatesServices";
import queryString from "query-string";
import { EstatesListType } from "src/types/estates";
import EstateCard from "src/common/Estates/EstateCard";
import TermsSidebar from "src/components/Home/TermsSidebar";
import PaginationList from "src/common/PaginationList";
import EstatesSort from "src/components/Home/EstatesSort";
import Alert from "src/common/Alert";
import { Spinner } from "@nextui-org/react";
export const dynamic = "force-dynamic";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Record<string, any>;
}) => {
  let splitSearchParams: string = queryString
    .stringify(searchParams)
    .replace("%26", "&")
    .replace("%3D", "=");
  const estatesPromise = GetEstates(splitSearchParams);
  const [estates, headers] = await Promise.all([
    (await estatesPromise).data,
    (await estatesPromise).headers,
  ]);
  if (estates?.length === 0) return <Alert alertText="هیچ ملکی یافت نگردید." />;
  return (
      <section className="container grid items-start grid-rows-1 grid-cols-4 gap-3.5 sm:gap-5 mt-9 sm:mt-25 my-16">
        <div className="hidden md:grid md:col-span-1 sticky top-0">
          <TermsSidebar />
        </div>
        <div className="col-span-4 md:col-span-3">
          <EstatesSort />
          <div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mb-5">
            {estates?.map((estate: EstatesListType) => {
              return (
                <React.Fragment key={estate.id}>
                  <EstateCard estate={estate} />
                </React.Fragment>
              );
            })}
          </div>
          {headers["x-wp-totalpages"] > 1 && (
            <PaginationList
              totalPages={headers["x-wp-totalpages"]}
              page={searchParams.page}
            />
          )}
        </div>
      </section>
  );
};

export default HomePage;
