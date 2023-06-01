import React from "react";
import Image from "next/image";
import Footer from "../footer/footer";
function Gallery() {
  const ImagePosition = ({ right, bigImage, smallImage }) => {
    return (
      <div
        className={`grid ${
          right
            ? "min-[800px]:grid-cols-[1fr_2fr]"
            : "min-[800px]:grid-cols-[2fr_1fr]"
        }  h-[325px] max-[800px]:h-full max-[800px]:mx-[20px] gap-[24px]`}
      >
        <div className="relative w-full h-[325px]">
          <Image
            alt="yummy"
            src={`/gallery/${bigImage}`}
            fill={true}
            className="object-cover  rounded-[20px]"
          />
        </div>
        <div
          className={`relative w-full h-[325px] ${right ? "order-1" : null}`}
        >
          <Image
            alt="yummy"
            fill={true}
            src={`/gallery/${smallImage}`}
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    );
  };
  return (
    <main className="">
      <section className="h-[480px] max-[800px]:h-[300px] relative w-full">
        <Image
          alt="yummy"
          fill={true}
          src="/gallery/yummy.svg"
          className="object-cover rounded-[0px_0px_80px_80px] "
        />
      </section>
      <div>
        <div className="left-1/2 top-[660px] transform -translate-x-1/2 absolute max-[800px]:top-[400px] ">
          <h2 className=" text-[56px]  z-10  text-black w-[700px]  max-[800px]:text-[36px]   max-[800px]:w-[400px] text-center">
            Our Mouthwatering Gallery
          </h2>
          <Image
            alt="smallWind"
            width={260}
            height={90}
            src="/home/smallWind.png"
            className="absolute top-0 z-0 opacity-[30%] windGalleryAnimation max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2   max-[800px]:w-[150px]"
          />
        </div>
      </div>
      <section className="mt-[400px] max-[800px]:mt-[300px]  max-[1240px]:w-full  h-full m-auto w-[1240px] grid gap-[26px] mb-[100px]">
        <ImagePosition
          right={false}
          bigImage="crepe.svg"
          smallImage="sweetcrepe.svg"
        />
        <ImagePosition
          right={true}
          bigImage="pancake.png"
          smallImage="burger.svg"
        />
        <ImagePosition
          right={false}
          bigImage="BigSweetCrepe.svg"
          smallImage="place.png"
        />
        <ImagePosition
          right={true}
          bigImage="omelete.svg"
          smallImage="crepe.svg"
        />{" "}
        <ImagePosition
          right={false}
          bigImage="place.png"
          smallImage="sandwiches.svg"
        />
        <ImagePosition
          right={true}
          bigImage="iceCream.svg"
          smallImage="bigPancake.svg"
        />
      </section>
      <Footer map={false} />
    </main>
  );
}

export default Gallery;
