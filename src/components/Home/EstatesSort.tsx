"use client";
import { Button, Divider, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi";
import Drawer from "src/common/Drawer";
import SortOptions from "src/constants/SortOprions";
import TermsSidebar from "./TermsSidebar";
import { BiFilterAlt } from "react-icons/bi";

const EstatesSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
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
    if (sortVale === "asc" || sortVale === "desc") {
      router.push(pathname + "?" + CreateQueryString("order", sortVale));
    } else {
      router.push(pathname + "?" + CreateQueryString("orderby", sortVale));
    }
  };
  const RemoveFilterSortHandler = () => {
    router.push(pathname);
    toast.success("فیلتر و مرتب سازی با موفقیت حذف گردید")
  };
  return (
    <section className="flex flex-col mb-14">
      <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-0">
        <div className="flex md:hidden mb-4 bg-primary-50 px-1 py-2.5 rounded-lg">
        <button
        className="flex-center gap-x-1"
        onClick={() => setDrawerOpen(true)}
      >
        <BiFilterAlt className="size-7 text-primary" />
        <span>فیلتر ملک</span>
      </button>
      <Drawer
        drawerOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      > 
      <TermsSidebar />
      </Drawer>
        </div>
        <Select
          items={SortOptions}
          label=" مرتب سازی"
          defaultSelectedKeys={["مرتب سازی: جدیدترین"]}
          className="w-full md:max-w-48 mb-4 md:mb-8"
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
