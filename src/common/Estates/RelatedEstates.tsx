'use client';
import { Card, CardBody, CardHeader, Chip, Spinner } from "@nextui-org/react";
import { BiSolidBuildingHouse, BiSolidCheckCircle } from "react-icons/bi";
import { useGetRelatedEstates } from "src/hooks/useEstates";
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineCreditCard, HiOutlineDocumentText } from "react-icons/hi";
import { EstatesListType } from "src/types/estates";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ToLocalStringNumber from "@/utils/toLocalStringNumber";

const RelatedEstates = ({related_ids}: {related_ids : number[]}) => {
    const {data: relatedEstates , isPending} = useGetRelatedEstates(related_ids);
    if(isPending) return <Spinner size="md" color="primary"/>;
    console.log(relatedEstates);
    return(
        <section className="flex flex-col gap-y-5">
          <h2 className="flex items-center font-extrabold text-2xl text-neutral-800 my-8"><BiSolidBuildingHouse className="size-7"/>ملک‌های پیشنهادی</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    {
      relatedEstates.slice(0,4).map(({id, name , price ,  images , stock_quantity , categories} : EstatesListType) => {
        return(
           <React.Fragment key={id}>
             <Card className="py-4" >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center gap-y-3">
      <Link href={`/estate/${id}`} className="hover:text-primary transition-colors"><h1 className="text-sm md:text-xl bg-primary-50 rounded-xl mb-4 text-center leading-9">{name}</h1></Link>
      <p className="flex-center gap-x-1 text-sky-500 font-bold"><HiOutlineDocumentText className="size-5"/>{categories[1].name}</p>
         <p className="flex-center gap-x-1.5 text-primary mb-4">
            <HiOutlineCreditCard className="size-5" />
            {ToLocalStringNumber(price)}
            <Image
              width={25}
              height={25}
              alt="ghorbani-dev.ir"
              src="/images/toman/toman.svg"
              className="!size-4 lg:!size-6"
            />
          </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <div className="relative h-full">
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
        <Link href={`/estate/${id}`}>
      <Image
           width={300}
           height={207}
           alt={images[0].alt}
          placeholder="blur"
         blurDataURL={images[0].src}
          src={images[0].src}
          className="rounded-xl"
        /></Link>
        </div>
      </CardBody>
    </Card>
           </React.Fragment> 
        )
      })
    }
            </div>
          
        </section>
    )
}

export default RelatedEstates;