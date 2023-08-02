/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Logo from "../../../public/images/the punk logo png white.png";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Shiva() {
  return (
    <>
      <NavBar />
      <div className="w-full text-white flex mt-60 p-10 py-20 items-center justify-center bg-black bg-opacity-70">
        <Image
          className="w-4/12 absolute mr-20 opacity-30"
          src={Logo}
          alt="Logo"
        />
        <div>
          <span className="text-8xl px-24 text-left">
            Inspiring work on <br />
          </span>
          <span className="text-8xl px-24 text-left">
            conceptual Lord Shiva <br />
          </span>
          <span className="text-8xl px-24 text-left">Tattoos</span>
          <span className="text-3xl px-8 text-right font-thin leading-[4rem]">
            Think about religious tattoos and Lord Shiva is perhaps the first{" "}
            <br />
          </span>
          <span className="text-3xl pl-80 pr-8 text-right font-thin leading-[4rem]">
            thing that clicks. What else could rival his persona! Mahadev
            Tattoos have taken <br />
          </span>
          <span className="text-3xl ml-60 pr-8 text-right font-thin leading-[4rem]">
            over the rage in the genre of religious tattoos. It's been ages
            since this trend is ongoing <br />
          </span>
          <span className="text-3xl pl-40 pr-8 text-right font-thin leading-[4rem]">
            and 2022 is no different. Surprisingly, the flair for Lord Shiva
            tattoo doesn't just limit to Men. <br />
          </span>
          <span className="text-3xl pl-40 pr-8 text-right font-thin leading-[4rem]">
            Women also find them pretty appealing and get their own versions of
            Shiva Tattoo. <br />
          </span>
        </div>
      </div>
      <section
        id="shiva"
        className="h-auto py-6 sm:pt-20 sm:pb-28 flex justify-center text-black"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-fit">
          <div className="relative w-fit shadow-custom-dark">
            <Image src="/images/shiva-1.JPG" width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src="/images/shiva-2.JPG" width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src="/images/shiva-3.JPG" width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src="/images/shiva-1.JPG" width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src="/images/shiva-2.JPG" width={500} height={600} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <Image src="/images/shiva-3.JPG" width={500} height={600} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
