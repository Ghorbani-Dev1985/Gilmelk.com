"use client";
import React from "react";
import { Input, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
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
