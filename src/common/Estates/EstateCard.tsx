"use client";
import ToLocalStringNumber from "@/utils/toLocalStringNumber";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCheckCircle } from "react-icons/bi";
import { HiOutlineCreditCard, HiOutlineDocumentText } from "react-icons/hi";

import { EstatesListType } from "src/types/estates";

const EstateCard = ({ estate}: { estate: EstatesListType}) => {
  const { id, name, price, images, stock_quantity, categories } = estate;
  return (
    <>
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border shadow-md shadow-primary-200">
      <div className="relative mx-4 -mt-7 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        {stock_quantity === 0 && (
          <Chip
            startContent={<BiSolidCheckCircle className="size-4" />}
            variant="faded"
            color="success"
            className="absolute right-2 top-4 border-primary-100"
          >
            فروخته شد
          </Chip>
        )}
        <Link href={`/estate/${id}`}>
          <Image
            width={300}
            height={650}
            alt={images[0].alt}
            placeholder="blur"
            blurDataURL={images[0].src}
            src={images[0].src}
            className="object-fill max-w-full h-full rounded-xl"
            />
        </Link>
      </div>
      <div className="p-2">
        <Link href={`/estate/${id}`} className="block min-h-24 line-clamp-2">
          <h1 className="text-lg text-center mb-4 text-neutral-800">{name}</h1>
        </Link>
        <p className="flex-center gap-x-1 text-sky-500 font-bold mb-4">
          <HiOutlineDocumentText className="size-5" />
          {categories[1].name}
        </p>
        <p className="flex-center gap-x-1.5 bg-primary-100 font-extrabold rounded-lg text-primary border border-primary-700 border-dashed">
          <HiOutlineCreditCard className="size-4" />
          {ToLocalStringNumber(price)}
          <Image
            width={25}
            height={25}
            alt="ghorbani-dev.ir"
            src="/images/toman/toman.svg"
            className="size-4 lg:size-6"
            />
        </p>
      </div>
    </div>
   
            </>
  );
};

export default EstateCard;
