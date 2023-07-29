/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <NavBar />
      <div className="w-full flex mt-44 items-center">
        <Image
          className="w-1/4"
          src="/images/Untitled.png"
          alt="arm-tattoo"
          width={1621}
          height={3579}
        />
        <div>
          <h2></h2>
          <p className="text-3xl px-24 text-right font-thin leading-[4rem]">
            <span className="text-8xl">T</span>he design incorporates the
            intricate detailing of realistic tattoo artistry with the bold and
            visionary strokes of abstract art. It features an amalgamation of
            geometric shapes.
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
      <section id="gallery" className="relative mt-44">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-bold tracking-widest font-oswald uppercase text-[#ff3d3e]">
            Tattoo Categories
          </h1>
        </div>
      </section>
      <section
        id="gallery"
        className="h-auto py-6 sm:pt-20 sm:pb-28 px-4 xs:px-12 sm:px-20 lg:px-28 xl:px-36 2xl:px-80 3xl:px-96 flex justify-center text-black"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-fit">
          <div className="relative w-fit shadow-custom-dark mr-[1.5rem]">
            <div className="absolute bottom-0 h-24 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-4 text-left w-full flex flex-col justify-between">
              <p>Tattoo</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore full gallery
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image
              src="/images/image_6483441 (2).JPG"
              width={392}
              height={441}
              alt=""
            />
          </div>
          <div className="relative w-fit shadow-custom-dark mr-[1.5rem]">
            <div className="absolute bottom-0 h-24 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-4 text-left w-full flex flex-col justify-between">
              <p>Salon</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore full gallery
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image src="/images/IMG-9291.jpg" width={392} height={441} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark mr-[1.5rem]">
            <div className="absolute bottom-0 h-24 bg-[#ff3d3e] opacity-70 text-3xl font-oswald p-4 text-left w-full flex flex-col justify-between">
              <p>The Punk School</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore course
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image
              src="/images/image_6483441 (4).JPG"
              width={392}
              height={441}
              alt=""
            />
          </div>
          <div className="relative w-fit shadow-custom-dark mr-[1.5rem]">
            <div className="absolute bottom-0 h-24 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-4 text-left w-full flex flex-col justify-between">
              <p>Tattoo</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore full gallery
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image
              src="/images/image_6483441 (2).JPG"
              width={392}
              height={441}
              alt=""
            />
          </div>
          <div className="relative w-fit shadow-custom-dark mr-[1.5rem]">
            <div className="absolute bottom-0 h-24 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-4 text-left w-full flex flex-col justify-between">
              <p>Salon</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore full gallery
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image src="/images/IMG-9291.jpg" width={392} height={441} alt="" />
          </div>
          <div className="relative w-fit shadow-custom-dark mr-[1.5rem]">
            <div className="absolute bottom-0 h-24 bg-[#ff3d3e] opacity-70 text-3xl font-oswald p-4 text-left w-full flex flex-col justify-between">
              <p>The Punk School</p>
              <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                Explore course
                <Icon
                  className="rotate-[135deg] ml-4"
                  icon="teenyicons:arrow-solid"
                />
              </button>
            </div>
            <Image
              src="/images/image_6483441 (4).JPG"
              width={392}
              height={441}
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
