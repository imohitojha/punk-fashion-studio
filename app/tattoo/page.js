/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ArmTattoo from "../../public/images/Untitled.png";
import Shiva from "../../public/images/shiva-1.JPG";
import Minimal from "../../public/images/minimal-sun-moon.JPG";
import Shoulder from "../../public/images/shoulder-rose.JPG";

export default function Tattoo() {
  return (
    <>
      <NavBar />
      <div className="w-full flex mt-44 items-center">
        <Image
          className="w-1/4"
          src={ArmTattoo}
          alt="arm-tattoo"
          width={1621}
          height={3579}
        />
        <div>
          <h2></h2>
          <p className="lg:text-3xl md:text-xl text-sm lg:px-24 md:px-16 px-4 text-right lg:font-thin font-extralight lg:leading-[4rem] md:leading-9 leading-6">
            <span className="xl:text-8xl lg:text-7xl md:text-5xl text-3xl">
              T
            </span>
            he design incorporates the intricate detailing of realistic tattoo
            artistry with the bold and visionary strokes of abstract art. It
            features an amalgamation of geometric shapes.
            <br />
            The face, a realistic portrait, is the central motif in the design,
            creating an immediate point of interest. It is characterized by its
            vivid detailing, accentuated by chiaroscuro shading that brings
            lifelike depth to the piece. Simultaneously, the abstract elements
            of the tattoo act as a narrative extension, fostering a layered
            interpretation of the piece.
          </p>
        </div>
      </div>
      <section id="gallery" className="relative md:mt-44 mt-20">
        <div className="flex justify-center items-center">
          <h1 className="md:text-5xl text-4xl font-bold tracking-widest font-oswald uppercase text-[#ff3d3e]">
            Tattoo Categories
          </h1>
        </div>
      </section>
      <section
        id="gallery"
        className="h-auto bg-darkslateblue py-6 sm:pt-20 sm:pb-20 md:pt-10 px-12 sm:px-2 lg:px-28 xl:px-36 2xl:px-30 3xl:px-96 flex justify-center text-black"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 w-fit">
          <Link href="/tattoo/shiva">
            <div className="relative w-fit shadow-custom-dark">
              <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-2xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
                <p>Lord Shiva Tattoos</p>
                <span className="text-left text-[1rem] text-coral flex items-center font-jost">
                  Explore full gallery
                  <Icon
                    className="rotate-[135deg] ml-4"
                    icon="teenyicons:arrow-solid"
                  />
                </span>
              </div>
              <Image src={Shiva} width={392} height={441} alt="" />
            </div>
          </Link>
          <div className="relative w-fit shadow-custom-dark">
            <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-2xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
              <p>Minimal Tattoos</p>
              <span className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore full gallery
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </span>
            </div>
            <Image src={Minimal} width={392} height={441} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-2xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
              <p>Shoulder Tattoos</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore course
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image src={Shoulder} width={392} height={441} alt="" />
          </div>
          <Link href="/tattoo/shiva">
            <div className="relative w-fit shadow-custom-dark">
              <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-2xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
                <p>Lord Shiva Tattoos</p>
                <span className="text-left text-[1rem] text-coral flex items-center font-jost">
                  Explore full gallery
                  <Icon
                    className="rotate-[135deg] ml-4"
                    icon="teenyicons:arrow-solid"
                  />
                </span>
              </div>
              <Image src={Shiva} width={392} height={441} alt="" />
            </div>
          </Link>
          <div className="relative w-fit shadow-custom-dark">
            <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-2xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
              <p>Minimal Tattoos</p>
              <span className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore full gallery
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </span>
            </div>
            <Image src={Minimal} width={392} height={441} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark">
            <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-2xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
              <p>Shoulder Tattoos</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore course
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image src={Shoulder} width={392} height={441} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
