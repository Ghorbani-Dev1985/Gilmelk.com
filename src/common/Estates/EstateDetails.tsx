"use client";
import ToLocalDateStringShort from "@/utils/toLocalDateStringShort";
import ToLocalStringNumber from "@/utils/toLocalStringNumber";
import { Divider, Spinner } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { BiListUl, BiSolidCheckSquare } from "react-icons/bi";
import { HiOutlineCreditCard } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import { useGetEstateById, useGetRelatedEstates } from "src/hooks/useEstates";
import { EstatesListType } from "src/types/estates";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "../../../public/styles/estateImagesSlider.css";
import RelatedEstates from "./RelatedEstates";

const EstateDetails = ({ id }: { id: number }) => {
  const { data: estate, isPending } = useGetEstateById(id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (isPending) return <Spinner size="md" color="primary" />;
  const { name, price, attributes, date_created, images, related_ids } = estate[0];
 
  return (
    <>
    <div className="w-full flex flex-col md:flex-row md:justify-between gap-5">
      <div className="flex md:flex-1 flex-col gap-y-4 h-full p-5 border rounded-xl">
        <h1 className="font-black">{name}</h1>
        <div className="flex-between">
          <p className="flex-center gap-x-1.5 text-primary">
            <HiOutlineCreditCard className="size-5" />
            {ToLocalStringNumber(price)}
            <Image
              width={25}
              height={25}
              alt="ghorbani-dev.ir"
              src="/images/toman/toman.svg"
              className="size-4 lg:size-6"
            />
          </p>
          <p className="flex-center gap-x-1.5 font-normal">
            <HiCalendarDays className="size-5" />
            {ToLocalDateStringShort(date_created)}
          </p>
        </div>
        <Divider />
        <h2 className="flex items-center gap-x-1">
          <BiListUl className="size-5" />
          مشخصات ملک
        </h2>
        {attributes.map(({ id, name, options }: EstatesListType) => {
          return (
            <React.Fragment key={id}>
              <div className="flex-between bg-primary-50/60 hover:bg-primary-100 px-2.5 py-1.5 rounded-lg border border-primary-700 border-dashed transition-colors">
                <p className="flex items-center gap-x-1">
                  <BiSolidCheckSquare className="size-5 text-amber-500" />
                  {name}
                </p>
                <p className="flex gap-x-1">
                  {options.map((option: string) => {
                    return (
                      <span key={option} className="text-sky-600">
                        {option}
                      </span>
                    );
                  })}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex flex-1 flex-col max-w-xl">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {images.map(({ id, src, alt }: EstatesListType) => {
            return (
              <React.Fragment key={id}>
                <SwiperSlide>
                  <Image
                    width={570}
                    height={770}
                    alt={alt}
                    placeholder="blur"
                    blurDataURL={src}
                    src={src}
                    className="rounded-xl"
                  />
                </SwiperSlide>
              </React.Fragment>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map(({ id, src, alt }: EstatesListType) => {
            return (
              <React.Fragment key={id}>
                <SwiperSlide>
                  <Image
                    width={100}
                    height={100}
                    alt={alt}
                    placeholder="blur"
                    blurDataURL={src}
                    src={src}
                    className="rounded-xl"
                  />
                </SwiperSlide>
              </React.Fragment>
            );
          })}
        </Swiper>
      </div>
    </div>
    <Divider className="my-7"/>
    <RelatedEstates related_ids={related_ids}/>
    </>
  );
};

export default EstateDetails;
