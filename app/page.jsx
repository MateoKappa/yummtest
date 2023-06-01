"use client";
import Image from "next/image";
import Footer from "./footer/footer";
import ParallaxText from "@/UI/parallax_text/parallax";
import { useState, useEffect, useRef } from "react";
import useWindowSize from "@/UI/Window";
export default function Home() {
  const [state, setState] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [prevSlider, setPrevSlider] = useState(0);
  const { height, width } = useWindowSize();
  const ref = useRef();

  const sliderFunc = (right) => {
    if (right) {
      setSliderIndex(sliderIndex + 1);
      if (sliderIndex > 1) {
        setSliderIndex(0);
      }
    } else {
      setSliderIndex(sliderIndex - 1);
      if (sliderIndex == 0 && !right) {
        setSliderIndex(2);
      }
    }
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
    <main className="h-full w-full overflow-hidden ">
      {!state ? (
        <span>
          {/* animation from menu to home crepe + brunch images */}
          <div className="absolute top-[1000px] gap-[250px] flex left-1/2 z-30 opacity transform -translate-x-1/2 ">
            <Image
              alt="Omelete"
              width={290}
              height={170}
              src="/home/omelete.png"
              className="h-[170px] w-[290px] object-cover rounded-[20px]  "
            />
            <Image
              alt="Brunch"
              width={290}
              height={170}
              src="/menu/brunch.png"
              className="h-[170px] w-[290px] object-cover rounded-[20px]"
            />
          </div>
          {/* -- */}

          {/* text animation from menu to home  */}
          <div className="absolute w-full h-[600px]">
            <div className="absolute opacity  z-10 text-[56px] top-[-40px] leading-[69px] text-[#0B191A] font-salsa w-full h-full grid place-items-center">
              <div className="relative grid ">
                {" "}
                <p className="relative z-20 ">Our Delicious Menu</p>
              </div>
            </div>
          </div>
          {/* -- */}
        </span>
      ) : null}
      {/* clipImage */}
      <div className="absolute top-[40px] max-[460px]:top-[140px] z-10 right-0 HomeClipImageAnimation ">
        <Image
          alt="clipImage"
          width={905}
          height={601}
          src="/home/clipImage.png"
          className=" z-20 relative"
        />
      </div>

      {/* text */}
      <div className="grid text-black grid-cols-2  max-[780px]:grid-cols-1 absolute z-20">
        <div className="mt-[190px] max-[780px]:w-[230px]  max-[780px]:ml-[20px] ml-[95px] ">
          <h1 className="not-italic text-[56px] leading-[69px] max-[780px]:leading-10 max-[780px]:text-[32px]">
            Welcome to the most{" "}
            <span className="text-[#00A1AD]">delicious spot </span>
            in Mykonos
          </h1>
        </div>
      </div>
      {/* parallaxtext  */}
      <div className="top-[790px] max-[600px]:top-[500px] text-black text-8xl  absolute z-20 w-full overflow-hidden ">
        <ParallaxText baseVelocity={-4}>
          <p className="shadow  max-[600px]:text-[42px]">
            BRUNCH • CREPES • SWEET FLAVOURS • BURGERS • SMOOTHIES •{" "}
          </p>
        </ParallaxText>
      </div>
      <section className="text-black  bg-[#E9E9E9] rounded-b-[50px] h-[950px] max-[600px]:h-[700px] relative HomeBg">
        <div className="absolute  top-[140px]  w-[720px] h-[250px] windHomePosition leftToRightHome">
          <Image alt="wind" fill={true} src="/menu/wind.png" />
        </div>
        <Image
          alt="wind"
          width={720}
          height={250}
          src="/home/wind.png"
          className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 z-0 "
        />
      </section>
      <button
        className="justify-center absolute HomebuttonAnimation text-xl
       text-white items-center gap-2 w-[149px]
        h-[43px] bg-[#00A1AD] rounded-[20px] mt-[34px] max-[780px]:left-[16px]  max-[780px]:top-[330px] max-[780px]:w-[120px]  max-[780px]:text-[16px]"
      >
        OUR MENU
      </button>
      <div
        className="flex xl:gap-[130px]
       lg:justify-between xl:w-[1240px] min-[0px]:w-full
        m-auto z-10 left-1/2 transform -translate-x-1/2 top-[800px]
        absolute mt-[145px] justify-center max-[1000px]:gap-[20px] max-[600px]:top-[510px]  max-[1000px]:top-[730px]"
      >
        <Image
          alt="omelete"
          width={290}
          height={240}
          src="/home/omelete.png"
          className=" max-[1000px]:w-[150px]  max-[600px]:w-[100px]"
        />
        <Image
          alt="crepe"
          width={400}
          height={240}
          src="/home/crepe.png"
          className=" max-[1000px]:w-[150px]   max-[600px]:w-[100px] "
        />
        <Image
          alt="burger"
          width={290}
          height={240}
          src="/home/burger.png"
          className=" max-[1000px]:w-[150px]   max-[600px]:w-[100px] "
        />
      </div>
      <section
        exit={{ opacity: 0 }}
        className="w-full  text-black relative mt-[330px]  max-[600px]:mt-[100px] max-[850px]:mb-[300px] "
      >
        <div className="mt-[190px] grid grid-cols-2 max-[850px]:flex-col max-[850px]:flex relative  xl:w-[1240px] lg:w-full m-auto h-full">
          <div>
            <div className="max-[6850px]:mb-[50px]  max-[850px]:ml-[20px]">
              <h2 className="text-7xl z-10 relative max-[600px]:text-[42px] ">
                ABOUT US
              </h2>

              <Image
                alt="smallWind"
                width={260}
                height={90}
                src="/home/smallWind.png"
                className="absolute top-0 z-0 opacity-[30%] max-[600px]:w-[150px]  "
              />
            </div>
            {width < 850 ? (
              <div className="mt-1 relative ">
                <div>
                  <Image
                    alt="yummyMykonos"
                    src="/home/yummyMykonos.png"
                    width={610}
                    height={280}
                    className="px-[24px] m-auto"
                  />
                  <Image
                    alt="restaurant"
                    src="/home/restaurant.png"
                    width={470}
                    height={320}
                    className="px-[64px] m-auto mt-[-50px]"
                  />
                </div>
              </div>
            ) : null}
            <p className="mt-[62px] text-xl w-[500px] max-[850px]:p-[20px] max-[850px]:m-auto max-[850px]:text-center max-[850px]:w-full font-sans">
              Prepare to have your taste buds transported to a world of pure
              culinary bliss at Yummy, a local establishment nestled in the
              vibrant square of Lakka, where the heart of Mykonos Chora beats
              24/7. Our experienced chefs pour their hearts and souls into every
              dish, using only the freshest and highest quality ingredients to
              create an array of mouthwatering brunch delicacies. Our 10 years
              of expertise mean that every bite is guaranteed to delight your
              senses and leave you craving for more. Our menu boasts a
              tantalizing selection of expertly crafted waffles, crepes, ice
              creams, and pancakes, all adorned with a variety of delectable
              toppings that will leave you speechless. And for those who crave
              savory flavors, we&apos;ve got you covered with an extensive
              selection of pancakes, omelets, sandwiches, burgers, and many
              more. Each dish is bursting with flavor, making your taste buds
              dance with excitement. So why wait? Come and discover the ultimate
              brunch experience at Yummy!
            </p>
          </div>
          {width > 850 ? (
            <div className="mt-1 relative h-full">
              <div>
                <Image
                  alt="yummyMykonos"
                  className="absolute top-0 right-0 bottom-[-65px]"
                  src="/home/yummyMykonos.png"
                  width={610}
                  height={280}
                />
                <Image
                  alt="restaurant"
                  className="absolute right-0 top-[190px]"
                  src="/home/restaurant.png"
                  width={470}
                  height={320}
                />
              </div>

              <div className="relative w-[400px] ml-auto ">
                <h2 className="text-right text-7xl mt-[800px] relative mb-[46px]">
                  OUR PLACE
                </h2>
                <Image
                  alt="smallWind"
                  width={260}
                  height={90}
                  src="/home/smallWind.png"
                  className="absolute top-0 right-0 z-0 opacity-[30%] -scale-x-100"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* OUR PLACE  */}
      <section className=" w-full h-[540px] max-[800px]:h-[1300px] ">
        <div className="xl:w-[1440px] h-full bg-[#CEB893] relative m-auto">
          <Image
            alt="cozy"
            src={`/home/${
              width > 800 ? "ourPlaceBg.png" : "ourPlaceMobile.png"
            }`}
            fill={true}
            className=" absolute z-0 "
          />
          <div className="max-[1240px]:w-full grid grid-cols-2  w-[1240px]  m-auto  max-[800px]:w-[90%] max-[800px]:flex max-[800px]:flex-col">
            <div className="grid grid-cols-2 gap-[22px] z-10  max-[800px]:mt-[60px]">
              <div className="flex flex-col w-full place-items-center  ">
                <Image
                  alt="cozy"
                  src="/home/cozy.png"
                  width={295}
                  height={475}
                  className="mt-[-120px]"
                />
                <h2 className="text-[56px] leading-[69px] mt-[40px] max-[800px]:text-[36px]">
                  COZY
                </h2>
              </div>
              <div className="flex flex-col w-full place-items-center ">
                <h2 className="text-[56px] leading-[69px] mt-[91px] mb-[37px] max-[800px]:text-[36px]">
                  COMFORT
                </h2>
                <Image
                  alt="comfort"
                  src="/home/comfort.png"
                  width={295}
                  height={475}
                  className=""
                />
              </div>
            </div>
            <div className="ml-auto text-right text-xl mt-[59px] w-[506px] font-sans z-10 max-[800px]:w-[90%] max-[800px]:mt-[80px] max-[800px]:text-center  max-[800px]:m-auto">
              <p>
                Yummy is located in the heart of Mykonos, in Lakka square. A
                quick glance reveals the cosmopolitan air of the location, while
                the style displays Cycladic influences and modern touches. It is
                considered a quiet and comfortable place to host families, but
                also groups, from morning to night every day. Yummy in these 10
                years of operation is constantly evolving in response to the
                needs of customers and catering specifications, ensuring the
                best environment, excellent service, and respect for the
                Cycladic aesthetics.
              </p>
              <button className="justify-center text-xl items-center w-[149px] h-[43px] bg-[#00A1AD] rounded-[20px] mt-[34px]">
                GALLERY
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="  text-black relative  max-[800px]:h-full h-[510px] mt-[330px]">
        <div className=" grid grid-cols-2  relative xl:w-[1240px] lg:w-full m-auto max-[800px]:flex max-[800px]:flex-col-reverse ">
          <div>
            <div className="relative  max-[800px]:w-[90%] m-auto max-[800px]:my-[40px] ">
              <h2 className=" text-7xl z-10 relative max-[800px]:text-[42px]   max-[800px]:mt-[75px]">
                OUR MENU
              </h2>
              <Image
                alt="smallWind"
                width={150}
                height={50}
                src="/home/smallWind.png"
                className="absolute top-[-5px] left-[10px] z-0 opacity-[30%]"
              />
            </div>
            <p className="mt-[30px] text-xl w-[500px] max-[800px]:w-[90%] max-[800px]:text-center max-[800px]:m-auto font-sans">
              Indulge in a scrumptious menu of sweet and savory delights at
              Yummy! Our expertly crafted selection includes waffles, crepes,
              ice creams, sandwiches, burgers, omelets, salads, and healthy
              yogurt bowls featuring seasonal fruits and oats. With every dish
              carefully prepared using only the freshest and finest ingredients,
              you&apos;re in for an unforgettable culinary journey. Join us at
              Yummy for the ultimate brunch experience and let every bite
              transport you to pure bliss!
            </p>
            <button className="justify-center  :text-[16px] max-[800px]:mt-[40px] flex max-[800px]:m-auto text-white items-center gap-2 w-[170px] h-[43px] bg-[#00A1AD] rounded-[20px] mt-[34px]">
              VIEW OUR MENU
            </button>
          </div>
          <div className="mt-1 relative  max-[800px]:h-[260px] w-[710px] max-[800px]:w-[340px] max-[800px]:m-auto ">
            <Image
              alt="menuBrunch"
              src="/home/menuBrunch.png"
              fill={true}
              className="rounded-[20px]"
            />
            <Image
              alt="menuCircle"
              src="/home/menuCircle.png"
              width={150}
              height={150}
              className=" z-10 absolute left-1/2 transform -translate-x-1/2 top-[-75px] "
            />
          </div>
        </div>
      </section>
      {/* Slider  */}
      <section className="h-[680px]  mt-[190px] xl:w-[1240px] lg:w-full m-auto relative  ">
        {/* // images // */}
        <div
          className={`grid grid-cols-3 h-[620px] max-[500px]:h-[520px] absolute  max-[800px]:grid-cols-1  max-[800px]:w-full m-auto gap-[40px]  place-items-center ${
            sliderIndex !== 0 ? "slider z-30" : null
          }`}
        >
          <div className="h-[525px] w-[375px] relative max-[800px]:absolute max-[500px]:w-[300px] max-[500px]:h-[400px] max-[500px]:left-[-280px] max-[800px]:left-[-350px]   ">
            <Image alt="brunch" fill={true} src="/home/slider/brunch.png" />
            <div className="w-full h-[97px] bg-[#00A1AD]  relative rounded-[21px]  text-[54px] pl-[29px] pt-[4px]">
              Brunch
            </div>
          </div>
          <div className="h-[605px] w-[415px]  max-[500px]:w-[300px] max-[500px]:h-[460px] relative">
            <Image
              alt="Pancakes"
              fill={true}
              src="/home/slider/pancakes.png"
              className="z-0 "
            />
            <div className="w-full h-[108px] bg-[#00A1AD] top-0 z-10 absolute rounded-[21px] text-[60px] pl-[29px] pt-[4px]">
              Pancakes
            </div>
          </div>
          <div className="h-[525px] w-[375px] relative   max-[800px]:absolute max-[800px]:right-[-350px] max-[500px]:h-[400px] ">
            <Image alt="brunch" fill={true} src="/home/slider/waffle.png" />
            <div className="w-full h-[97px] bg-[#00A1AD]  relative rounded-[21px]    text-[54px] pl-[29px] pt-[4px]">
              waffles
            </div>
          </div>
        </div>
        {/* ---- */}
        <div
          className={`grid grid-cols-3 h-[620px] absolute max-[500px]:h-[520px]  max-[800px]:grid-cols-1 z-20  max-[800px]:w-full m-auto gap-[40px]   place-items-center ${
            sliderIndex !== 1 ? "slider" : null
          }`}
        >
          <div className="h-[525px] w-[375px] relative max-[800px]:absolute max-[500px]:w-[300px] max-[500px]:h-[400px] max-[500px]:left-[-280px] max-[800px]:left-[-350px]">
            <Image alt="Pancakes" fill={true} src="/home/slider/pancakes.png" />
            <div className="w-full h-[97px] bg-[#00A1AD]  relative rounded-[21px]  text-[54px] pl-[29px] pt-[4px]">
              Pancakes
            </div>
          </div>
          <div className="h-[605px] w-[415px]  max-[500px]:w-[300px] max-[500px]:h-[460px] relative">
            <Image
              alt="Waffles"
              fill={true}
              src="/home/slider/waffle.png"
              className="z-0 "
            />
            <div className="w-full h-[108px] bg-[#00A1AD] top-0 z-10 absolute rounded-[21px] text-[60px] pl-[29px] pt-[4px]">
              Waffles
            </div>
          </div>
          <div className="h-[525px] w-[375px] relative   max-[800px]:absolute max-[800px]:right-[-350px] max-[500px]:h-[400px] ">
            <Image alt="Clubs" fill={true} src="/home/slider/clubs.png" />
            <div className="w-full h-[97px] bg-[#00A1AD]  relative rounded-[21px]  text-[54px] pl-[29px] pt-[4px]">
              Clubs
            </div>
          </div>
        </div>
        {/* ---- */}
        <div
          className={`grid grid-cols-3 h-[520px] absolute max-[500px]:h-[520px]  max-[800px]:grid-cols-1  max-[800px]:w-full m-auto gap-[40px]  z-0 place-items-center ${
            sliderIndex !== 2 ? "slider" : null
          }`}
        >
          <div className="h-[525px] w-[375px] relative max-[800px]:absolute max-[500px]:w-[300px] max-[500px]:h-[400px] max-[500px]:left-[-280px] max-[800px]:left-[-350px]">
            <Image alt="Waffles" fill={true} src="/home/slider/waffle.png" />
            <div className="w-full h-[97px] bg-[#00A1AD]  relative rounded-[21px]  text-[54px] pl-[29px] pt-[4px]">
              Waffles
            </div>
          </div>
          <div className="h-[605px] w-[415px]  max-[500px]:w-[300px] max-[500px]:h-[460px] relative">
            <Image
              alt="Clubs"
              fill={true}
              src="/home/slider/clubs.png"
              className="z-0 "
            />
            <div className="w-full h-[108px] bg-[#00A1AD] z-10 relative rounded-[21px] text-[60px] pl-[29px] pt-[4px]">
              Clubs
            </div>
          </div>
          <div className="h-[525px] w-[375px] relative   max-[800px]:absolute max-[800px]:right-[-350px] max-[500px]:h-[400px] ">
            <Image alt="Salads" fill={true} src="/home/slider/salads.png" />
            <div className="w-full h-[97px] bg-[#00A1AD]  relative rounded-[21px]  text-[54px] pl-[29px] pt-[4px]">
              Salads
            </div>
          </div>
        </div>
        {/* -- buttons -- */}
        <div className="w-[380px] m-auto gap-[17px] flex justify-center pt-[670px] max-[500px]:pt-[600px]">
          <Image
            alt="arrow"
            width={16}
            height={24}
            src="/home/arrow.png"
            onClick={() => sliderFunc(false)}
          />
          <div className="gap-[17px] flex justify-center items-center">
            <div className="w-[21px] h-[21px]   rounded-full bg-[#D9D9D9]"></div>
            <div className="w-[21px] h-[21px]  rounded-full bg-[#D9D9D9]"></div>
            <div
              className={`w-[42px] h-[21px]  rounded-[21px]  box bg-[#00A1AD] ${
                sliderIndex == 1
                  ? "BlueOne"
                  : sliderIndex == 2
                  ? "Bluetwo"
                  : null
              }`}
            ></div>
            <div
              className={`w-[21px] h-[21px] rounded-full box bg-[#D9D9D9] ${
                sliderIndex !== 0 ? "CircleOne" : null
              }`}
            ></div>
            <div
              className={`w-[21px] h-[21px] rounded-full box bg-[#D9D9D9] ${
                sliderIndex == 2 ? " CircleTwo" : null
              }`}
            ></div>
          </div>
          <Image
            alt="arrow"
            width={16}
            height={24}
            className="-scale-x-100"
            src="/home/arrow.png"
            onClick={() => sliderFunc(true)}
          />
        </div>
      </section>
      <section className="w-full h-[720px] mt-[135px]  max-[800px]:h-[550px]   max-[800px]:mt-[300px] relative  text-[#0B191A]">
        <div className="w-[50%] max-[800px]:w-[65%]   h-full rounded-[0px_20px_20px_0px] bg-[#e9e9e9] z-0 absolute "></div>
        <div className="xl:w-[1240px] lg:w-full h-full grid  m-auto z-10 relative max-[800px]:w-[90%]">
          <Image
            alt="IdealPlace"
            width={width > 800 ? 300 : 160}
            height={width > 800 ? 435 : 230}
            src="/home/idealPlace.png"
            className="mt-[61px]  max-[800px]:mt-[-100px] "
          />
          <Image
            alt="IdealPlace"
            width={width > 800 ? 300 : 160}
            height={width > 800 ? 435 : 230}
            src="/home/iceCream.png"
            className="absolute bottom-[-20px] right-0 max-[800px]:bottom-[-60px]"
          />
          <h2 className="absolute text-[80px] leading-[98px]  xl:w-[700px] lg:w[350px] top-[140px] left-[340px]  max-[800px]:top-[120px]  max-[800px]:w-[350px] max-[800px]:left-[10px]  max-[800px]:text-[42px] ">
            Ideal place to relax
          </h2>
          <h2 className="absolute text-[80px] leading-[98px] top-[380px] left-[48%]   max-[800px]:top-[300px] max-[800px]:left-[50px] max-[800px]:text-[42px]">
            &
          </h2>
          <h2 className="absolute text-[80px] leading-[98px] top-[540px] left-[40px] max-[800px]:left-[10px] max-[800px]:top-[400px]  max-[800px]:w-[250px] max-[800px]:text-[42px] ">
            Enjoy a sweet tempation
          </h2>
        </div>
      </section>
      <div className="relative mt-[170px] w-[1240px] m-auto  max-[800px]:w-[90%]">
        <div className=" text-7xl z-10 relative text-black max-[800px]:w-[330px]  max-[800px]:text-[42px]">
          Our Contact details
          <Image
            alt="smallWind"
            width={width > 900 ? 260 : 150}
            height={width > 900 ? 90 : 50}
            src="/home/smallWind.png"
            className="absolute top-0 z-0 opacity-[30%]"
          />{" "}
        </div>
      </div>
      <div className="font-sans w-[1240px] h-[120px] max-[800px]:my-[36px] max-[800px]:w-[90%] max-[800px]:gap-[16px] max-[800px]:h-full max-[800px]:grid m-auto text-black flex justify-between items-center ">
        <div className="flex  gap-[15px] ">
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
            alt="locationIcon"
            width={15}
            height={15}
            src="/home/locationIcon.png"
            className="object-contain"
          />{" "}
          <p> 2289028823</p>
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
      <Footer map={true} />
    </main>
  );
}
