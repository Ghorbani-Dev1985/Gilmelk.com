"use client";
import { Slider, SliderValue } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  useCallback,
  useState,
} from "react";

const PriceFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sliderValue, setSliderValue] = useState<SliderValue>(8000000000);
  const CreateQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const ChangeQueryStringHandler = () => {
    router.push(
      pathname + "?" + CreateQueryString("max_price", sliderValue.toString())
    );
  };
  console.log(sliderValue);
  return (
    <Slider
      label="فیلتر قیمت"
      step={1000000000}
      maxValue={10000000000}
      minValue={1000000000}
      defaultValue={[1000000000, 8000000000]}
      showSteps={true}
      showTooltip={true}
      showOutline={true}
      value={Number(sliderValue)}
      onChange={setSliderValue}
      onChangeEnd={ChangeQueryStringHandler}
      disableThumbScale={true}
      formatOptions={{ style: "decimal", currency: "IRR" }}
      tooltipValueFormatOptions={{
        style: "decimal",
        currency: "IRR",
        maximumFractionDigits: 0,
      }}
      classNames={{
        base: "max-w-md",
        filler: "bg-gradient-to-r from-primary-300 to-primary-600",
        labelWrapper: "mb-2",
        label: "font-medium text-medium",
        value: "font-medium text-small",
        thumb: [
          "transition-size",
          "bg-gradient-to-r from-primary-300 to-primary-600",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-gradient-to-r before:from-primary-400 before:to-primary-800",
          ],
          content: [
            "py-2 shadow-xl",
            "text-white bg-gradient-to-r from-primary-400 to-primary-800",
          ],
        },
      }}
    />
  );
};

export default PriceFilter;
