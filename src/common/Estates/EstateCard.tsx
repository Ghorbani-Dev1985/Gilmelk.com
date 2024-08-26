"use client";
import ToLocalStringNumber from "@/utils/toLocalStringNumber";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCheckCircle } from "react-icons/bi";
import { HiOutlineCreditCard, HiOutlineDocumentText } from "react-icons/hi";

import { EstatesListType } from "src/types/estates";

const EstateCard = ({ estate }: { estate: EstatesListType }) => {
  const { id, name, price, images, stock_status, categories } = estate;
  return (
    <>
      <div className="flex flex-col rounded-xl bg-white border border-slate-100 bg-clip-border shadow-md shadow-primary-200">
        <div className="relative mx-4 -mt-7 overflow-hidden rounded-xl bg-primary-100 bg-clip-border text-white shadow-lg shadow-primary-100">
          {stock_status === "outofstock" && (
            <Chip
              startContent={<BiSolidCheckCircle className="size-4" />}
              variant="solid"
              color="success"
              className="absolute right-2 top-4 z-20 text-white font-extrabold"
            >
              فروخته شد
            </Chip>
          )}
          <Link href={`/estate/${id}`}>
          <div className="block relative aspect-square">
            <Image
             fill
              alt={images[0].alt}
              placeholder="blur"
              blurDataURL={images[0].src}
              src={images[0].src}
              className={`${
                !price && "grayscale"
              } object-cover object-center max-w-full h-full rounded-xl`}
            />
          </div>
          </Link>
        </div>
        <div className="p-2">
          <Link
            href={`/estate/${id}`}
            className="block min-h-20 line-clamp-2 my-2"
          >
            <h1 className="text-lg font-extrabold text-center text-neutral-800">
              {name}
            </h1>
          </Link>
          <p className="flex-center gap-x-1 text-sky-500 font-bold mb-4">
            <HiOutlineDocumentText className="size-5" />
            {categories.length > 1 ? categories[1]?.name : categories[0]?.name}
          </p>
          <p
            className={`${
              price
                ? "bg-primary-100 text-primary border-primary-400"
                : "bg-amber-100 text-amber-500 border-amber-400"
            } flex-center gap-x-1.5 font-extrabold rounded-lg  border-2 border-dashed`}
          >
            {price ? (
              <>
                <HiOutlineCreditCard className="size-4" />
                {ToLocalStringNumber(price)}
                <Image
                  width={25}
                  height={25}
                  alt="ghorbani-dev.ir"
                  src="/images/toman/toman.svg"
                  className="size-4 lg:size-6"
                />
              </>
            ) : (
              <span>این ملک فروخته شد</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default EstateCard;
