"use client";
import React from "react";
import Image from "next/image";
import useWindowSize from "@/UI/Window";
function Footer({ map }) {
  const { height, width } = useWindowSize();
  return (
    <main className="w-full m-auto max-w-[1440px]   font-sans ">
      {map ? (
        <div className="w-full h-[390px] max-[800px]:h-[160px] z-10  relative ">
          <Image fill={true} src="/home/map.png" alt="map" />
        </div>
      ) : null}

      <section
        className={`w-full h-[520px] relative mt-[${
          map ? "-120px" : "100px"
        }] max-[800px]:mt-0`}
      >
        <div className=" w-full h-full absolute opacity-20 max-[800px]:hidden">
          <Image fill={true} src="/home/footerBg.png" alt="footerBg" />
        </div>
        <div className=" w-full h-full absolute opacity-100 min-[800px]:hidden">
          <Image
            fill={true}
            src="/footer/footerMobileBg.png"
            className="object-cover"
            alt="footerMobile"
          />
        </div>
        <div className="w-[1240px] max-[800px]:mt-[50px] h-full grid grid-cols-3 m-auto max-[800px]:flex max-[800px]:flex-col max-[1200px]:w-[90%]  items-center  text-black">
          <div className="flex flex-col gap-4 mb-16">
            Let us know your opinion
            <div className="flex gap-6 items-center max-[800px]:m-auto">
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
          <Image
            alt="logo"
            src="/header/Logo.png"
            width={width > 900 ? 360 : 150}
            height={width > 900 ? 170 : 80}
          />
          <div className="justify-self-end flex flex-col gap-4 max-[800px]:text-[22px] max-[800px]:mt-[36px]">
            Useful Links
            <div className="text-end max-[800px]:text-center">
              <p>Menu</p>
              <p>Gallery</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="w-full font-sans h-[58px] rounded-[20px_20px_0px_0px] bg-[#00A1AD] absolute bottom-0 flex text-white justify-center items-center  max-[800px]:flex-col ">
          <div> © 2023 by YUMMY MYKONOS. </div>{" "}
          <div className="flex">
            Powered by&nbsp;<div className="text-[#CEB893]">Digimust</div>. Our
            &nbsp;
            <div className="text-[#CEB893]">Privacy Policy</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Footer;
