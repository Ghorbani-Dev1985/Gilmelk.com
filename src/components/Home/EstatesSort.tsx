"use client";
import { Button, Divider, Select, SelectItem } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SortOptions from "src/constants/SortOprions";

const EstatesSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const CreateQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const SortProductHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortVale = e.target.value;
    console.log(sortVale);
    if (sortVale === "asc" || sortVale === "desc") {
      router.push(pathname + "?" + CreateQueryString("order", sortVale));
    } else {
      router.push(pathname + "?" + CreateQueryString("orderby", sortVale));
    }
  };
  const RemoveFilterSortHandler = () => {
    router.push(pathname);
  };
  return (
    <section className="flex flex-col mb-14">
      <div className="flex justify-between">
        <Select
          items={SortOptions}
          label=" مرتب سازی"
          defaultSelectedKeys={["مرتب سازی: جدیدترین"]}
          className="max-w-48 mb-8"
          onChange={SortProductHandler}
          size="sm"
        >
          {(SortOption) => (
            <SelectItem key={SortOption.value} value={SortOption.value}>
              {SortOption.label}
            </SelectItem>
          )}
        </Select>
        <Button
          color="danger"
          className="border-1 px-1"
          onPress={RemoveFilterSortHandler}
          variant="bordered"
          startContent={<HiOutlineTrash className="size-5" />}
        >
          حذف فیلتر و مرتب سازی
        </Button>
      </div>
      <Divider />
    </section>
  );
};

export default EstatesSort;
