"use client";
import ToLocalDateStringShort from "@/utils/toLocalDateStringShort";
import ToLocalStringNumber from "@/utils/toLocalStringNumber";
import { Chip, Divider, Spinner } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import {
  BiListUl,
  BiSolidCheckCircle,
  BiSolidCheckSquare,
} from "react-icons/bi";
import { HiOutlineCreditCard } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import { useGetEstateById } from "src/hooks/useEstates";
import { EstatesAttributesType, EstatesImagesType } from "src/types/estates";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "../../../public/styles/estateImagesSlider.css";
import RelatedEstates from "./RelatedEstates";

const EstateDetails = ({ id }: { id: number }) => {
  const { data, isPending } = useGetEstateById(id);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-y-5">
        <p>در حال دریافت اطلاعات ‌ملک‌‌</p>
        <Spinner size="md" color="primary" />
      </div>
    );
  }
  if (data) {
    const {
      name,
      price,
      attributes,
      date_created,
      stock_status,
      images,
      related_ids,
    } = data[0];

    return (
      <>
        {" "}
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-5 mt-16">
          <div className="flex md:flex-1 flex-col gap-y-4 h-full p-5 border rounded-xl">
            <h1 className="font-black">{name}</h1>
            <div className="flex-between flex-col md:flex-row">
              <p className="flex-center gap-x-1.5 text-primary">
                {price ? (
                  <>
                    <HiOutlineCreditCard className="size-5" />
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
            {attributes.map(({ id, name, options }: EstatesAttributesType) => {
              return (
                <React.Fragment key={id}>
                  <div className="flex-between bg-primary-50/60 text-sm md:text-base hover:bg-primary-100 px-2.5 py-1.5 rounded-lg border border-primary-700 border-dashed transition-colors">
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
          <div className="flex flex-1 flex-col w-full md:max-w-sm lg:max-w-xl">
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
              className="mySwiper2 md:!h-full"
            >
              <div className="block relative">
                {images.map(({ id, src, alt }: EstatesImagesType) => {
                  return (
                    <React.Fragment key={id}>
                      <SwiperSlide>
                        {stock_status === "outofstock" && (
                          <Chip
                            startContent={
                              <BiSolidCheckCircle className="size-4" />
                            }
                            variant="solid"
                            color="success"
                            className="absolute right-2 top-4 z-20 text-white font-extrabold"
                          >
                            فروخته شد
                          </Chip>
                        )}
                        <Image
                          fill
                          alt={alt}
                          placeholder="blur"
                          blurDataURL={src}
                          src={src}
                          className={`${
                            !price && "grayscale"
                          } object-cover object-center rounded-xl`}
                        />
                      </SwiperSlide>
                    </React.Fragment>
                  );
                })}
              </div>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper min-h-28"
            >
              <div className="block relative aspect-square">
                {images.map(({ id, src, alt }: EstatesImagesType) => {
                  return (
                    <React.Fragment key={id}>
                      <SwiperSlide>
                        <Image
                          fill
                          alt={alt}
                          placeholder="blur"
                          blurDataURL={src}
                          src={src}
                          className={`${
                            !price && "grayscale"
                          } object-cover object-center min-h-24 rounded-xl`}
                        />
                      </SwiperSlide>
                    </React.Fragment>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
        <Divider className="my-7" />
        <RelatedEstates related_ids={related_ids} />
      </>
    );
  }
};

export default EstateDetails;
