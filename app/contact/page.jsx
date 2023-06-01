"use client";
import React from "react";
import Image from "next/image";
import Form from "./form";
import Footer from "../footer/footer";
function Contact() {
  return (
    <main className="w-full h-full text-black">
      <section className=" h-[390px] md:h-[480px] relative w-full">
        <Image
          alt="girls"
          fill={true}
          src="/menu/girls.svg"
          className="object-cover rounded-[0px_0px_80px_80px]"
        />
        <div className="relative z-10 text-[56px] leading-[69px] overflow-hidden text-[#0B191A] font-salsa w-full h-full grid place-items-center">
          <div className="relative grid ">
            <p className="relative z-20 max-[800px]:text-[32px]">Reach to us</p>
            <div className="absolute bottom-[-100px] left-[-50px] w-[720px] h-[250px] max-[800px]:hidden">
              <Image alt="wind" fill={true} src="/menu/wind.png" />
            </div>
            <div className="absolute top-[5px]   w-[180px] h-[60px] left-1/2 transform -translate-x-1/2   min-[800px]:hidden">
              <Image alt="wind" fill={true} src="/menu/wind.png" />
            </div>
          </div>
        </div>
      </section>
      <div>
        <p className="lg:w-[930px] w-[90%] m-auto font-sans text-center text-[20px] mt-[110px] mb-[85px] ">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Pradesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu mtempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>
      <section className=" h-full relative m-auto w-full xl:w-[1240px] flex flex-col md:grid md:grid-cols-2 gap-[90px]">
        <div className="h-[900px] w-full m-auto  flex flex-col">
          <div className="relative pl-[60px] text-[56px]">
            <h2 className="z-10 relative">Our Contact details</h2>
            <Image
              alt="smallWind"
              width={260}
              height={90}
              src="/home/smallWind.png"
              className="absolute left-[40px]  top-0 z-0 opacity-[30%]"
            />
          </div>
          <div className="w-full h-[750px] m-auto grid grid-rows-3  relative justify-center items-center bg-[#E9E9E9] rounded-[0px_20px_20px_0px]">
            <div className="gap-[25px] flex flex-col max-[1000px]:ml-[20px]">
              <div className="flex gap-[15px]">
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
                2289028823
              </div>
              <div className="flex gap-[15px]">
                <Image
                  alt="email"
                  width={15}
                  height={15}
                  src="/home/email.png"
                  className="object-contain "
                />
                yummy-creperie@hotmail.com
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
            <div className="relative max-[1000px]:ml-[20px]">
              <h2 className=" z-10 text-[56px] relative">
                Follow us on social
              </h2>
              <Image
                alt="smallWind"
                width={260}
                height={90}
                src="/home/smallWind.png"
                className="absolute left-[-20px] top-0 z-0 opacity-[30%]"
              />
            </div>
            <div className="gap-[25px] w-[210px] flex flex-col max-[1000px]:ml-[20px]">
              <div className=" w-full flex place-items-center gap-[20px]">
                <div className="w-[40px] grid place-items-center ">
                  <Image
                    alt="facebookLogo"
                    width={24}
                    height={44}
                    src="/home/facebookLogo.png"
                  />
                </div>
                Yummy Mykonos
              </div>
              <div className=" w-full flex place-items-center gap-[20px]">
                <div className="w-[40px] grid place-items-center ">
                  <Image
                    alt="instagramLogo"
                    width={38}
                    height={38}
                    src="/home/instagramLogo.png"
                  />
                </div>
                @yummymykonos
              </div>
              <div className=" w-full flex place-items-center gap-[20px]">
                <div className="w-[40px] grid place-items-center  ">
                  <Image
                    alt="owlLogo"
                    width={44}
                    height={26}
                    src="/home/owlLogo.png"
                  />
                </div>
                Yummy Mykonos
              </div>
            </div>
          </div>
        </div>
        <div className="h-[900px] md:w-full m-auto  flex flex-col w-[90%] ">
          <div className="relative pl-[60px] text-[56px]">
            <h2 className="z-10 relative">Send us a message</h2>
            <Image
              alt="smallWind"
              width={260}
              height={90}
              src="/home/smallWind.png"
              className="absolute left-[40px]  top-0 z-0 opacity-[30%]"
            />
          </div>
          <Form />
        </div>
      </section>

      <button className=" text-[16px] m-auto flex justify-center mb-[100px]  mt-[75px] text-white items-center w-[180px] h-[43px] bg-[#00A1AD] rounded-[20px] ">
        Direct Location
      </button>
      <Footer map={true} />
    </main>
  );
}

export default Contact;
