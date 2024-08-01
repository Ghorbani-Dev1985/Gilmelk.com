import { Button, Card, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCreditCard } from "react-icons/hi";

import { EstatesListType } from "src/types/estates";

const EstateCard = ({ estate }: { estate: EstatesListType }) => {
  const { id, name , price ,  images , attributes} = estate;
  return (
    <Card isFooterBlurred className="w-full shadow-lg shadow-primary-100">
    <CardHeader className="absolute z-10 top-1 flex-col items-end">
      <Chip
        endContent={<HiOutlineCreditCard className="size-4"/>}
        variant="flat"
        color="success"
        radius="sm"
      >
        <span className="font-bold">{price}</span>
      </Chip>
    </CardHeader>
    <Image
          width={300}
          height={650}
          alt={images[0].alt}
          placeholder="blur"
          blurDataURL={images[0].src}
          src={images[0].src}
          className="object-fill rounded-xl"
        />
    <CardFooter className="flex flex-col gap-y-3 absolute bg-white/30 bottom-0 border-t-1 border-emerald-300/50 z-10 ">
        <p className="text-secondary text-base font-extrabold text-center min-h-14">{name}</p>
      <Button className="text-tiny" color="primary" radius="sm" size="md">
       مشاهده جزییات
      </Button>
    </CardFooter>
  </Card>
       

  );
};

export default EstateCard;
