"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@/UI/Window";
import { useState, useEffect } from "react";
function Header() {
  const [navbar, setNavbar] = useState(false);
  const [navbarAnim, setNavbarAnim] = useState(false);
  const { height, width } = useWindowSize();

  return (
    <div>
      <div className="h-[124px] bg-[#CEB893] hidden lg:grid grid-cols-2">
        <Image
          src="/header/blueDesign.png"
          width={54}
          height={160}
          className="absolute z-20"
          alt="blueDesign"
        />
        <span></span>
        <div className="absolute top-[33px] left-[97px] z-20 ">
          <Image src="/header/Logo.png" width={366} height={170} alt="Logo" />
        </div>
        <div className=" self-center lg:flex gap-2.5 w-full items-center relative z-20 ">
          <div className="relative">
            <Link
              className="hover:bg-[url('/header/headerWind.png')] bg-no-repeat bg-right transition-all hover:text-[#00A1AD]"
              href="/"
            >
              HOME
            </Link>
          </div>

          <Link
            href="/menu"
            className="hover:bg-[url('/header/headerWind.png')] bg-no-repeat bg-right transition-all hover:text-[#00A1AD] text-[#00A1AD] border-[#00A1AD] border-y-2 border-to"
          >
            MENU
          </Link>
          <Link
            href="/gallery"
            className="hover:bg-[url('/header/headerWind.png')] bg-no-repeat bg-right transition-all hover:text-[#00A1AD]"
          >
            GALLERY
          </Link>
          <Link
            href="contact"
            className="hover:bg-[url('/header/headerWind.png')] bg-no-repeat bg-right transition-all hover:text-[#00A1AD]"
          >
            CONTANCT
          </Link>
          <button className="ml-auto lg:mr-[71px] mad-[850px]:mr-[0px] w-[215px] h-[43px]  flex items-center gap-2 bg-[#00A1AD] justify-center rounded-[20px]">
            <Image width={15} height={15} src="/header/phone.png" alt="phone" />{" "}
            RESERVE TABLE
          </button>
        </div>

        <div
          onClick={() => {
            setNavbar(true), setNavbarAnim(true);
          }}
          className=" md:hidden absolute  w-[36px] top-[20px] right-[20px] grid h-[30px]"
        >
          <div className="w-full bg-white rounded-[20px] h-[4px]"> </div>
          <div className="w-[30px] absolute right-[0px] top-[8px] bg-white rounded-[20px] h-[4px]"></div>
          <div className="w-[23px] absolute right-[0px] top-[16px] bg-white rounded-[20px] h-[4px]"></div>
        </div>
      </div>
      <div className="w-full bg-[#CEB893] z-30 fixed top-0 h-[60px] lg:hidden">
        <div
          className={`  ${
            navbar ? "navbar" : navbarAnim ? "navbarOut" : "fixed left-[100%]"
          }`}
        >
          <Image
            onClick={() => {
              setNavbar(false);
            }}
            src="/header/X.png"
            width={14}
            height={14}
            alt="X"
            className="absolute right-[40px] top-[30px] "
          />
          <div className="grid mt-[100px]  w-full place-items-center">
            <Image
              src="/header/Logo.png"
              width={200}
              height={100}
              alt="Logo"
              className="z-50"
            />
            <div
              onClick={() => {
                setNavbar(false);
              }}
              className="grid text-[25px] text-[#00A1AD] text-center gap-[14px] mt-[60px]"
            >
              <Link className="hover:bg-[url('/home/smallWind.png')]" href="/">
                HOME
              </Link>
              <Link href="/menu">MENU</Link>
              <Link href="/gallery">GALLERY</Link>
              <Link href="contact">CONTANCT</Link>
            </div>
            <button className="w-[185px] h-[43px] mt-[54px] text-[16px]  flex items-center gap-2 bg-[#00A1AD] justify-center rounded-[40px]">
              <Image
                width={15}
                height={15}
                src="/header/phone.png"
                alt="phone"
              />{" "}
              RESERVE TABLE
            </button>
            <div className="flex gap-6 mt-[50px]  items-center">
              <Image
                alt="facebookLogo"
                width={15}
                height={15}
                src="/home/facebookLogo.png"
                className="object-contain "
              />
              <Image
                alt="instagramLogo"
                src="/home/instagramLogo.png"
                width={27}
                height={27}
              />
              <Image
                alt="owlLogo"
                src="/home/owlLogo.png"
                width={31}
                height={20}
              />
            </div>
          </div>
          <div className="gap-[25px] absolute top-[650px]  pb-[20px] font-sans left-[50px] text-black flex text-[25px] flex-col mt-[50px]  ">
            <div className="flex gap-[15px] ">
              <Image
                alt="locationIcon"
                width={15}
                height={15}
                src="/home/locationIcon.png"
                className="object-contain"
              />{" "}
              Lakka square, Mykonos
            </div>

            <div className="flex gap-[15px]">
              <Image
                alt="phone"
                width={15}
                height={15}
                src="/home/phone.png"
                className="object-contain "
              />
              <p>2289028823</p>
            </div>

            <div className="flex gap-[15px]">
              {" "}
              <Image
                alt="clock"
                width={15}
                height={15}
                src="/home/clock.png"
                className="object-contain"
              />
              Always open
            </div>
          </div>
        </div>
        <div className="absolute top-[25px] left-[25px] z-20 ">
          <Image src="/header/Logo.png" width={150} height={70} alt="Logo" />
        </div>
        <div
          onClick={() => {
            setNavbar(true), setNavbarAnim(true);
          }}
          className="absolute  w-[36px] top-[20px] right-[20px] grid h-[30px]"
        >
          <div className="w-full bg-white rounded-[20px] h-[4px]"> </div>
          <div className="w-[30px] absolute right-[0px] top-[8px] bg-white rounded-[20px] h-[4px]"></div>
          <div className="w-[23px] absolute right-[0px] top-[16px] bg-white rounded-[20px] h-[4px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
