/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Logo from "./../../../public/images/the punk logo png white.png";
import Shiva1 from "./../../../public/images/shiva-1.jpg";
import Shiva2 from "./../../../public/images/shiva-2.jpg";
import Shiva3 from "./../../../public/images/shiva-3.jpg";

export default function Shiva() {
  return (
    <>
      <NavBar />
      <div className="w-full text-white flex mt-60 p-10 py-20 items-center justify-center bg-black bg-opacity-70">
        <Image
          className="w-4/12 absolute opacity-30"
          src={Logo}
          alt="Logo"
        />
        <div>
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 text-left">
            Inspiring work on <br />
          </span>
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 text-left">
            conceptual Lord Shiva <br />
          </span>
          <span className="xl:text-8xl lg:text-7xl md:text-5xl text-2xl md:px-12 px-2 text-left">
            Tattoos
          </span>
          <div className="flex justify-end lg:mt-4 md:mt-8 mt-4">
            <span className="lg:w-9/10 w-11/12 md:text-3xl text-md md:px-8 -mr-4 text-right font-extralight lg:leading-[4rem] md:leading-[3.25rem] leading-7">
              Think about religious tattoos and Lord Shiva is perhaps the first
              thing that clicks. What else could rival his persona! Mahadev
              Tattoos have taken over the rage in the genre of religious
              tattoos. It's been ages since this trend is ongoing and 2022 is no
              different. Surprisingly, the flair for Lord Shiva tattoo doesn't
              just limit to Men. Women also find them pretty appealing and get
              their own versions of Shiva Tattoo.
            </span>
          </div>
        </div>
      </div>
      <section
        id="shiva"
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
