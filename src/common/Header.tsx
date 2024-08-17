"use client";
import React, { useCallback, useState } from "react";
import { Input, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchInput , setSearchInput] = useState("")
  const CreateQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const SearchHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
     const SearchValue = e.target.value;
    console.log(pathname)
    if(pathname !== "/" && SearchValue.length >=2){
      router.push("/" + "?" + CreateQueryString("search", SearchValue));
    }else if(pathname === "/" && SearchValue.length >= 2){
      router.push(pathname + "?" + CreateQueryString("search", SearchValue));
    }
  }
  console.log(searchInput)
  return (
    <section className="container">
      <Navbar
        classNames={{
          base: "bg-primary-200 my-8 text-white rounded-lg p-4 border-none",
          wrapper: "lg:max-w-[1280px] flex-col md:flex-row px-0",
        }}
      >
        <NavbarBrand>
          <Link href="/">
            <Image
              width={200}
              height={55}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL="/images/logo/logo.png"
              src="/images/logo/logo.png"
              className="object-fill"
            />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Input
            classNames={{
              base: "max-w-full md:max-w-lg h-10 mt-2 md:mt-0",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 md:bg-white/60",
            }}
            onChange={SearchHandler}
            placeholder="جستجوی ملک ..."
            size="lg"
            endContent={<BiSearchAlt className="size-8" />}
            type="search"
          />
        </NavbarContent>
      </Navbar>
    </section>
  );
};

export default Header;
