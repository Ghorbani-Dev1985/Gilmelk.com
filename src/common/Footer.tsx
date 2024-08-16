import Image from "next/image";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <footer className="container relative">
      <div className="flex flex-col items-center gap-y-10 bg-primary-200 text-white my-5 rounded-lg p-4">
        <Image
          width={250}
          height={55}
          alt="ghorbani-dev.ir"
          src="/images/logo/logo.png"
          className="object-fill rounded-none mt-6"
        />
        <div className="max-w-xl text-primary-700 text-justify leading-8">
          در این اپلیکشین شما می توانید ملک‌های فروشی استان گیلان با مشخصات کامل
          مشاهده نمایید. توجه داشته باشید که کلیه اطلاعات به روز هستند و به
          روزرسانی می شوند و اطلاعات ملک‌های جدید منتشر می گردند.
        </div>
        <Divider className="border-primary-900" />
        <div className="w-full flex flex-col md:flex-row md:flex-between text-primary-900 font-normal text-sm">
          <p>کلیه حقوق مادی و معنوی برای گیل ملک محفوظ می باشد</p>
          <p className="dir-ltr">
            Developed with :heart: by
            <Link
              href="https://github.com/Ghorbani-Dev1985"
              target="_blank"
              className="font-bold text-amber-500 mx-1"
            >
              Ghorbani-Dev1985
            </Link>
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
