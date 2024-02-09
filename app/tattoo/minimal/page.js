/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Logo from "./../../../public/images/the punk logo png white.png";
import Minimal1 from "./../../../public/images/minimal/01.jpg";
import Minimal2 from "./../../../public/images/minimal/02.jpg";
import Minimal3 from "./../../../public/images/minimal/03.jpg";
import Minimal4 from "./../../../public/images/minimal/04.jpg";
import Minimal5 from "./../../../public/images/minimal/05.jpg";
import Minimal6 from "./../../../public/images/minimal/06.jpg";
import Minimal7 from "./../../../public/images/minimal/07.jpg";
import Minimal8 from "./../../../public/images/minimal/08.jpg";
import Minimal9 from "./../../../public/images/minimal/09.jpg";
import Minimal10 from "./../../../public/images/minimal/10.jpg";
import Minimal11 from "./../../../public/images/minimal/11.jpg";

export default function Minimal() {
  return (
    <>
      <NavBar />
      <div className="w-full text-white flex mt-60 p-10 py-20 items-center justify-center bg-black bg-opacity-70">
        <Image className="w-4/12 absolute opacity-30" src={Logo} alt="Logo" />
        <div className="relative">
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 mb-16 uppercase text-[#ff3d3e] font-bebas-neue text-left">
            Minimalist Elegance: <br />
          </span>
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 mb-16 uppercase text-[#ff3d3e] font-bebas-neue text-left">
            Embracing Simplicity <br />
          </span>
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 mb-16 uppercase text-[#ff3d3e] font-bebas-neue text-left">
            in Tattoos
          </span>
          <div className="flex justify-end lg:mt-4 md:mt-8 mt-4">
            <span className="lg:w-9/10 w-11/12 md:text-3xl text-md md:px-8 -mr-4 text-right font-extralight lg:leading-[4rem] md:leading-[3.25rem] leading-7">
              Discover the enchanting world of minimalist tattoos, where
              simplicity meets timeless elegance. Our studio celebrates the
              beauty of understated designs that speak volumes with their
              subtlety. These minimalist tattoos are not just ink on skin; they
              are statements of refined taste and purposeful expression.
              Embracing the ethos of less-is-more, our skilled artists craft
              each tattoo with precision, focusing on clean lines, subtle
              shading, and minimalist details. Whether it's a delicate symbol or
              a minimalist illustration, these tattoos hold the power to convey
              profound meanings with effortless grace. Explore the allure of
              minimalist elegance and let your ink speak volumes in its
              simplicity.
            </span>
          </div>
        </div>
      </div>
      <section
        id="minimal"
        className="h-auto py-6 sm:pt-20 sm:pb-28 flex justify-center text-black"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-fit">
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal1} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal2} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal3} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal4} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal5} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal6} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal7} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal8} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal9} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal10} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Minimal11} width={500} height={600} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
