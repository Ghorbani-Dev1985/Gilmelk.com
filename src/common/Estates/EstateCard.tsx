'use client';
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCheckCircle } from "react-icons/bi";
import { HiOutlineCreditCard, HiOutlineDocumentText } from "react-icons/hi";

import { EstatesListType } from "src/types/estates";

const EstateCard = ({ estate }: { estate: EstatesListType }) => {
  const { id, name , price ,  images , stock_quantity , categories} = estate;
  return (
  <div className="flex-center">
  <div className="w-full ml-1 mr-1 flex-center flex-col border-gray-700 text-center">
      <div className="w-full rounded-tr-[5rem] rounded-tl-md p-8 bg-gradient-to-br from-primary-100 to-primary-300 pb-28 relative">
          <h1 className="text-xl mb-4">{name}</h1>
          <p className="flex-center gap-x-1 text-white font-bold"><HiOutlineDocumentText className="size-5"/>{categories[1].name}</p>
          <p className="flex-center gap-x-1 font-bold">{price}<HiOutlineCreditCard className="size-5"/></p>
      </div>
      <div className="text-center shadow-lg shadow-primary-100 min-h-[430px] rounded-bl-[5rem] rounded-br-md -mt-32 z-10 p-9 flex items-center flex-col">
        <div className="relative">
        {
          stock_quantity === 0 &&
          <Chip
          startContent={<BiSolidCheckCircle className="size-4"/>}
          variant="faded"
          color="success"
          className="absolute right-2 top-4 border-primary-100"
        >
          فروخته شد
        </Chip>
        }
      <Image
           width={300}
           height={650}
           alt={images[0].alt}
          placeholder="blur"
         blurDataURL={images[0].src}
          src={images[0].src}
          className="object-fill rounded-xl"
        />
        </div>
      </div>
  </div>
</div>   

  );
};

export default EstateCard;
