'use client';
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const PaginationList = ({ totalPages , page}: {totalPages: number , page: number}) => {
 const router = useRouter();
 const pathname = usePathname();
 const searchParams = useSearchParams();
 const [selectedPage , setSelectedPage] = useState(Number(searchParams.get("page")) || page)
  const PageHandler = (e: number) => {
    router.push( pathname + "?page=" + e)
  };
  return (
    totalPages > 1 && (
      <div className="flex-center my-4">
        <Pagination
          isCompact
          showControls
          total={totalPages}
          initialPage={selectedPage}
          onChange={PageHandler}
          classNames={{
            prev: "rotate-180",
            next: "rotate-180",
            forwardIcon: "rotate-180",
          }}
        />
      </div>
    )
  );
};

export default PaginationList;
