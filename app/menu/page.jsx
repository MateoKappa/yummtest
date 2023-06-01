"use client";
import Image from "next/image";
import Footer from "../footer/footer";
import { useState, useEffect } from "react";
import useWindowSize from "@/UI/Window";
function Menu() {
  const { height, width } = useWindowSize();
  const [state, setState] = useState(false);
  const MenuPage = ({
    heading,
    leftFood,
    rightFood,
    leftImage,
    rightImage,
    leaf,
  }) => {
    return (
      <section className="xl:w-[1240px] h-full m-auto mt-[90px] w-full">
        <div className="relative w-full grid justify-items-center ">
          <h2
            className={`text-[56px] max-[900px]:text-[32px] z-10 relative text-black text-center xl:w-[${
              heading == "CREPES" ? "220px" : "full"
            }] `}
          >
            {heading}
          </h2>
          <Image
            alt="smallWind"
            width={260}
            height={90}
            src="/home/smallWind.png"
            className="absolute top-0 z-0 opacity-[30%] max-[900px]:w-[150px]"
          />
        </div>
        <div className=" m-auto w-[840px] h-[170px] flex gap-[240px] justify-center mt-[90px] mb-[120px]  max-[900px]:w-full max-[900px]:gap-[30px]">
          <Image
            width={290}
            height={170}
            alt="food"
            src={`/menu/${leftFood}`}
            className="h-[170px] w-[290px] object-cover rounded-[20px]  max-[600px]:w-[150px]"
          />
          <Image
            width={290}
            height={170}
            alt="food"
            src={`/menu/${rightFood}`}
            className="h-[170px] w-[290px] object-cover rounded-[20px] max-[600px]:w-[150px]"
          />
        </div>
        <div className="w-full xl:h-[1160px] h-[1500px] max-w-[600px] m-auto xl:max-w-full bg-[#E9E9E9] grid place-items-center rounded-[20px]">
          <div className=" xl:pt-[32px] xl:w-[1220px] w-full xl:h-[1140px] m-auto xl:max-w-full max-w-[600px] h-[1500px] border-dashed rounded-[20px] border-2 border-[#90D1D6]  ">
            <div className="grid xl:grid-cols-2 xl:w-[1120px] xl:max-w-full m-auto max-w-[600px] w-full relative h-full place-items-center">
              <div
                className={`xl:w-[570px] xl:h-[1050px] relative w-[340px] h-[740px] `}
              >
                <Image
                  alt="menu"
                  src={`/menu/${leftImage}`}
                  fill={true}
                  className={`${
                    leaf[0] & (leaf[1] == "left" || "both") ? "ml-[15px]" : null
                  }`}
                />
              </div>
              <div className="xl:w-[570px] xl:h-[1050px] relative w-[340px] h-[740px] ">
                <Image
                  alt="menu"
                  src={`/menu/${rightImage}`}
                  fill={true}
                  className={`${
                    leaf[0] & (leaf[1] === "right" || "both")
                      ? "ml-[15px]"
                      : null
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const functionPage = () => {
    const timer = setTimeout(() => {
      setState(true);
    }, 600);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    functionPage();
  }, []);
  return (
    <main className="w-full h-full text-black">
      {!state ? (
        <div className="absolute  clipImageAnimation">
          <Image
            alt="clipImage"
            width={905}
            height={601}
            src="/Home/clipImage.png"
            className=" z-20 relative"
          />
        </div>
      ) : null}
      <div className="absolute w-full h-[600px] max-[800px]:h-[300px] ">
        <div
          className="absolute  z-10 text-[56px] top-[-40px] max-[800px]:top-[0px] 
        leading-[69px] text-[#0B191A] font-salsa w-full h-full grid place-items-center"
        >
          <div className="relative grid ">
            {" "}
            <p className="relative z-20  max-[800px]:text-[36px]">
              Our Delicious Menu
            </p>
            <div className="absolute top-[5px]  w-[180px] h-[60px] left-1/2 transform -translate-x-1/2    min-[800px]:hidden">
              <Image alt="wind" fill={true} src="/menu/wind.png" />
            </div>
          </div>
        </div>
      </div>
      <section className="h-[600px] max-[800px]:h-[300px] relative w-full overflow-hidden home_menu">
        <Image
          alt="ourDeliciousMenu"
          fill={true}
          src={"/menu/ourDeliciousMenu.png"}
          className=" max-[640px]:hidden"
        />
        <Image
          alt="ourDeliciousMenu"
          fill={true}
          src={"/menu/ourDeliciousMenuSmall.png"}
          className="sm:hidden"
        />
        <div className="h-[140px] w-full absolute bottom-0 max-[800px]:h-[50px]">
          <Image alt="menuTexture" fill={true} src="/menu/menuTexture.png" />
        </div>

        <div className="absolute  top-[140px]  w-[720px] h-[250px] smallwindGalleryMenu  max-[800px]:hidden">
          <Image alt="wind" fill={true} src="/menu/wind.png" />
        </div>
      </section>

      <button className="left-1/2 w-[380px] top-[710px]  max-[800px]:w-[310px] max-[800px]:top-[350px] max-[800px]:text-[16px]  text-white  transform -translate-x-1/2 absolute justify-center text-xl items-center  h-[43px] bg-[#00A1AD] rounded-[20px] mt-[34px]">
        VIEW CATALOG IN PRINTED VERSION
      </button>
      <div className="left-1/2 top-[860px] transform -translate-x-1/2 absolute max-[800px]:top-[460px] ">
        <h2 className=" text-[56px]  z-10 relative text-black w-[220px] font-thin">
          BRUNCH
        </h2>
        <Image
          alt="smallWind"
          width={260}
          height={90}
          src="/home/smallWind.png"
          className="absolute top-0 z-0 opacity-[30%] bottomToCurrentWind"
        />
        <p className="font-sans text-xl">* served till 15:00</p>
      </div>
      <div
        className="flex absolute gap-[130px] m-auto z-10 left-1/2 transform -translate-x-1/2 top-[1000px]
          justify-center max-[800px]:gap-[20px] max-[1240px]:w-full max-[800px]:px-[10px] w-[1240px] max-[800px]:top-[650px]"
      >
        <Image
          alt="omelete"
          width={290}
          height={170}
          src="/menu/omelete.png"
          className=" max-[800px]:w-[200px]"
        />
        <Image
          alt="crepe"
          width={290}
          height={170}
          src="/menu/brunch.png"
          className="  max-[800px]:w-[200px]"
        />
      </div>
      <div className="flex gap-[130px] xl:w-[1240px]  w-full m-auto z-10 left-1/2 transform -translate-x-1/2 top-[800px] absolute mt-[145px] opacity max-[1240px]:hidden ">
        <Image
          alt="omelete"
          width={290}
          height={240}
          src="/home/omelete.png"
          className="max-[1240px]:hidden"
        />
        <Image
          alt="crepe"
          width={400}
          height={240}
          src="/home/crepe.png"
          className="max-[1240px]:hidden"
        />
        <Image
          alt="burger"
          width={290}
          height={240}
          src="/home/burger.png"
          className="max-[1240px]:hidden"
        />
      </div>
      <section className="h-[540px] lg:w-[840px] m-auto   relative"></section>
      <section className="xl:w-[1240px]  w-full h-full m-auto lg:mt-[70px] font-sans  ">
        <div className="flex gap-[15px] align-center lg:w-[1100px] w-[90%] m-auto mb-[17px] max-w-[600px]  xl:max-w-full ">
          <Image alt="" width={15} height={20} src="/menu/leaf.png" />
          <p>vegetarion option</p>
        </div>
        <div className="w-full xl:h-[1160px] h-[1400px] max-w-[600px] m-auto xl:max-w-full bg-[#E9E9E9] grid place-items-center rounded-[20px]">
          <div className=" xl:pt-[32px] xl:w-[1220px] w-full xl:h-[1140px] m-auto xl:max-w-full max-w-[600px] h-[1400px] border-dashed rounded-[20px] border-2 border-[#90D1D6]  ">
            <div className="grid xl:grid-cols-2 xl:w-[1120px] xl:max-w-full m-auto max-w-[600px] w-full relative h-full place-items-center">
              <div
                className={`xl:w-[570px] xl:h-[1050px] relative w-[340px] h-[740px] `}
              >
                <Image
                  alt="eggs"
                  src="/menu/eggs.svg"
                  fill={true}
                  className="mt-[-20px]"
                />
              </div>
              <div className="xl:w-[570px] xl:h-[1050px] relative w-[340px] h-[740px]   ">
                <Image
                  alt="sweetpancakes"
                  src="/menu/sweetPancakes.svg"
                  fill={true}
                  className="max-lg:mt-[-90px] ml-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuPage
        heading="CREPES"
        leftFood="sweetCrepeImage.svg"
        rightFood="crepeImage.svg"
        leftImage="sweetCrepes.svg"
        rightImage="crepes.svg"
        leaf={[true, "left"]}
      />
      <MenuPage
        heading="BURGERS - BAQUETES"
        leftFood="burger.svg"
        rightFood="sandwich.svg"
        leftImage="burgerMenu.svg"
        rightImage="baguetteMenu.svg"
        leaf={[false, "left"]}
      />
      <MenuPage
        heading="SANDWITCHES - OTHER"
        leftFood="clubSandwich.svg"
        rightFood="pancake.svg"
        leftImage="sandwichMenu.svg"
        rightImage="hotDogMenu.svg"
        leaf={[true, "right"]}
      />
      <MenuPage
        heading="SMOOTHIES - DRINKS - ICE CREAM"
        leftFood="iceCream.svg"
        rightFood="girls.svg"
        leftImage="coffee.svg"
        rightImage="juices.svg"
        leaf={[true, "both"]}
      />
      <Footer map={false} />
    </main>
  );
}

export default Menu;
