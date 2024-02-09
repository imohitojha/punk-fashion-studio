/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Logo from "./../../../public/images/the punk logo png white.png";
import Shiva1 from "./../../../public/images/shiva-1.jpg";
import Shiva2 from "./../../../public/images/shiva-2.jpg";
import Shiva3 from "./../../../public/images/shiva-3.jpg";

export default function Realistic() {
  return (
    <>
      <NavBar />
      <div className="w-full text-white flex mt-60 p-10 py-20 items-center justify-center bg-black bg-opacity-70">
        <Image className="w-4/12 absolute opacity-30" src={Logo} alt="Logo" />
        <div className="relative">
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 mb-16 uppercase text-[#ff3d3e] font-bebas-neue text-left">
            Authentic Realism: <br />
          </span>
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 mb-16 uppercase text-[#ff3d3e] font-bebas-neue text-left">
            Transcending Skin with <br />
          </span>
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 mb-16 uppercase text-[#ff3d3e] font-bebas-neue text-left">
            Realistic Tattoos
          </span>
          <div className="flex justify-end lg:mt-4 md:mt-8 mt-4">
            <span className="lg:w-9/10 w-11/12 md:text-3xl text-md md:px-8 -mr-4 text-right font-extralight lg:leading-[4rem] md:leading-[3.25rem] leading-7">
              Experience the unparalleled artistry and lifelike precision of our
              Realistic Tattoos. These masterpieces transcend mere ink on skin,
              capturing intricate details and depth with stunning realism. Each
              tattoo is a testament to our dedication to the craft, meticulously
              crafted to bring your ideas to vivid, tangible life. From
              portraits to nature-inspired designs, our skilled artists
              specialize in breathing life into your vision, ensuring every line
              and shade resonates with authenticity. Discover the realm of
              hyper-realistic body art, where every stroke tells a story and
              every piece is a testament to artistic finesse and passion.
            </span>
          </div>
        </div>
      </div>
      <section
        id="realistic"
        className="h-auto py-6 sm:pt-20 sm:pb-28 flex justify-center text-black"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-fit">
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Shiva1} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Shiva2} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Shiva3} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Shiva1} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Shiva2} width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src={Shiva3} width={500} height={600} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
