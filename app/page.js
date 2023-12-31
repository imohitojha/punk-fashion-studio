/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import HeroImage from "../public/images/PUNK-hero.png";
import Banner from "../public/images/custom-banner.png";
import Tattoo from "../public/images/image_6483441 (2).JPG"
import Salon from "../public/images/IMG-9291.jpg"
import PunkSchool from "../public/images/image_6483441 (4).JPG"
import Pranjul from "../public/images/IMG_20220115_210534-1-1536x2048.jpg"
import Ajitesh from "../public/images/008731A1-1BC4-4ADA-BBCD-228C14A55F3B.JPG"
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative mt-4 container-fluid">
      <NavBar />
      <Image
        src={Banner}
        alt=""
        className="relative w-full 2xl:top-[4rem] xl:top-[4rem] lg:top-[4rem] md:top-[4rem] sm:top-[4rem] top-[7rem]"
      />
      <section id="third-section" className="2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-20">
        <div className="z-20 w-full bg-black bg-opacity-70" />
        <Image
          className="w-3/4 m-auto relative top-16"
          src={HeroImage}
          alt="Hero Image"
          width="100vh"
        />
        <div className="z-10 flex items-center justify-center relative 2xl:top-[-28rem] xl:top-[-22rem] lg:top-[-18rem] md:top-[-12rem] top-[-5rem]">
          <Link
            href="/form"
            className="bg-[#ff3d3e] flex items-center justify-center rounded-full w-2/5 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-sm 2xl:h-32 xl:h-28 lg:h-20 md:h-16 h-12 font-bold uppercase font-jost shadow-custom text-center"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
      <section id="about-us" className="relative">
        <div className="flex justify-center items-center">
          <h1 className="2xl:text-6xl lg:text-5xl text-3xl mt-8 lg:-mt-8 font-bold tracking-widest font-comforter text-[#ff3d3e]">
            About Us
          </h1>
        </div>
      </section>
      <section className="bg-whitesmoke lg:mb-24 mb-16 lg:px-16 px-8">
        <p className="text-justify font-jost lg:text-2xl md:text-xl text-md font-light lg:mt-16 mt-4">
          Welcome to The Punk Fashion Studio, the ultimate sanctuary for
          rebellious souls seeking authenticity. Born out of a dream to redefine
          punk culture, we've built a haven where edgy aesthetics and
          kind-hearted spirits blend seamlessly.
          <br />
          Here, style is an expression of defiance, but that doesn't mean you
          can't have a heart of gold. Our founder believed in the duality of the
          punk persona – edgy on the outside, gentle on the inside – and made it
          our guiding principle.
          <br />
          Step into our world, where you'll find a cornucopia of avant-garde
          clothing, audacious hairstyles, and intricate tattoos. As you explore,
          imagine yourself in a radical new look, embodying the raw punk energy
          while remaining true to your gentle spirit.
          <br />
          Excited? Take the leap. Join our punk revolution and let your style
          scream authenticity. The Punk Fashion Studio is not just a shop, hair
          salon, or tattoo studio. It's a lifestyle, a movement, a family. And
          we can't wait for you to become part of it.
        </p>
      </section>
      <section id="our-story" className="relative ">
        <div className="flex justify-center items-center">
          <h1 className="2xl:text-6xl lg:text-5xl text-3xl font-bold tracking-widest font-comforter text-[#ff3d3e]">
            Our Story
          </h1>
        </div>
      </section>
      <section className="bg-whitesmoke lg:mb-24 mb-16 lg:px-16 px-8">
        <p className="text-justify font-jost lg:text-2xl md:text-xl text-md font-light lg:mt-16 mt-4">
          Situated in a graffiti-adorned alleyway, nestled amid the city's
          pulsating heart, lies the unique hybrid of punk self-expression - The
          Punk Fashion Studio. This urban oasis, a harmonious fusion of a hair
          salon and a tattoo studio, is where punk aesthetics meet bold
          individualism. It's a modern sanctuary for the defiant and
          unconventional, a place where personal style isn't just flaunted, it's
          permanently etched in ink and transformed through striking hair
          designs.
          <br />
          <br />
          Upon entering, you are greeted by the scent of antiseptic mingled with
          refreshing notes of premium hair products. The space is a dynamic
          interplay of dark, atmospheric lighting and vibrant graffiti-style
          murals - an authentic reflection of the punk ethos and a testament to
          the studio's commitment to individualism.
          <br />
          <br />
          The Punk Fashion Studio is home to a team of highly skilled tattoo
          artists and avant-garde hairstylists, each a master in their craft.
          Specializing in a range of tattoo styles from traditional to
          neo-traditional, blackwork, and more, the artists skillfully translate
          personal stories into timeless inked designs. On the other side,
          visionary hairstylists work their magic, creating rebellious cuts and
          color transformations that challenge conventional beauty standards.
          <br />
          <br />
          Every client that steps through our doors is seen as a collaborator in
          creating a unique piece of self-expression. At the intersection of
          hair artistry and tattoo design, personal style becomes a piece of
          living, breathing artwork that embodies the client's individuality.
          <br />
          <br />
          Sterility and safety are our priority. Amid the studio's punk
          aesthetic, a pristine environment ensures every service, from tattoos
          to hair treatments, is provided in a professional, hygienic
          atmosphere.
          <br />
          <br />
          Choosing The Punk Fashion Studio is a decision to embark on a unique
          journey of self-expression. We urge you to delve into our world,
          explore our artists' portfolios, read our reviews, and then choose us
          confidently to reflect your authentic self through our edgy services.
          Step into The Punk Fashion Studio and become part of our vibrant,
          boundary-pushing community.
        </p>
      </section>
      <section id="services" className="relative">
        <div className="flex justify-center items-center">
          <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold tracking-widest font-comforter">
            Our Services
          </h1>
        </div>
      </section>
      <section
        id="services"
        className="h-auto bg-darkslateblue md:mb-0 mb-16 py-6 sm:pt-20 sm:pb-20 md:pt-10 px-12 sm:px-2 lg:px-28 xl:px-36 2xl:px-30 3xl:px-96 flex justify-center text-black"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 w-fit">
          <Link href="/tattoo">
            <div className="relative w-fit shadow-custom-dark">
              <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-3xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
                <p>Tattoo</p>
                <span className="text-left text-[1rem] text-coral flex items-center font-jost">
                  Get your Tattoo now
                </span>
              </div>
              <Image
                src={Tattoo}
                width={392}
                height={441}
                alt=""
              />
            </div>
          </Link>

          <Link href="/#services">
            <div className="relative w-fit shadow-custom-dark">
              <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-3xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
                <p>Salon</p>
                <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                  Go with the Trend
                </button>
              </div>
              <Image
                src={Salon}
                width={392}
                height={441}
                alt=""
              />
            </div>
          </Link>

          <Link href="/#services">
            <div className="relative w-fit shadow-custom-dark">
              <div className="absolute bottom-0 h-24 sm:h-20 lg:h-24 bg-[#ff3d3e] opacity-70 text-4xl sm:text-3xl lg:text-4xl font-oswald p-4 sm:py-2 lg:p-4 text-left w-full flex flex-col justify-between">
                <p>The Punk School</p>
                <button className="text-left text-[1rem] text-coral flex items-center font-jost">
                  Explore our exclusive courses
                </button>
              </div>
              <Image
                src={PunkSchool}
                width={392}
                height={441}
                alt=""
              />
            </div>
          </Link>
        </div>
      </section>
      <section id="our-specialists" className="relative mb-8">
        <div className="flex justify-center items-center">
          <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold tracking-widest font-comforter">
            Our Specialists
          </h1>
        </div>
      </section>
      <section className="bg-whitesmoke h-auto md:mb-0 mb-16 py-0 sm:pt-20 sm:pb-20 md:pt-10 px-12 sm:px-20 lg:px-28 xl:px-36 2xl:px-30 3xl:px-96 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-fit font-oswald">
          <div className="relative w-54 shadow-custom-dark">
            <Image
              src={Pranjul}
              width={396}
              height={397}
              alt="training-thumbnail"
            />
            <div className="sm:px-4 md:px-8 text-xl h-24 md:text-2xl flex flex-col justify-center  md:h-28">
              Pranjul Gaur{" "}
              <span className="text-lg text-left font-jost text-[#ff3d3e]">
                Hair Stylist
              </span>
            </div>
          </div>
          <div className="relative w-54 shadow-custom-dark">
            <Image
              src={Ajitesh}
              width={396}
              height={397}
              priority
              alt="training-thumbnail"
            />
            <div className="sm:px-4 md:px-8 text-xl h-24 md:text-2xl flex flex-col justify-center  md:h-28">
              Ajitesh Gaur{" "}
              <span className="text-lg text-left font-jost text-[#ff3d3e]">
                Tattoo Artist
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 px-8 font-bebas-neue">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 content-center">
          <div className="flex flex-col my-4 items-center">
            <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold mb-4">5+</h1>
            <p className="lg:text-5xl md:text-4xl text-3xl text-center font-bold uppercase text-[#ff3d3e]">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col my-4 items-center">
            <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold mb-4">7+</h1>
            <p className="lg:text-5xl md:text-4xl text-3xl text-center font-bold uppercase text-[#ff3d3e]">
              Clients from Cities
            </p>
          </div>
          <div className="flex flex-col my-4 items-center">
            <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold mb-4">1000+</h1>
            <p className="lg:text-5xl md:text-4xl text-3xl text-center font-bold uppercase text-[#ff3d3e]">
              Clients
            </p>
          </div>
        </div>
      </section>
      <section
        className="md:h-80 h-40 px-[8.75rem] bg-center bg-fixed bg-size-contain mb-20"
        style={{
          "backgroundImage": "url('/images/image_6487327.JPG')",
          "backgroundRepeat": "no-repeat",
        }}
      />
      <section id="special-offer" className="relative mb-16">
        <div className="flex justify-center items-center">
          <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold tracking-widest font-comforter mb-8 text-[#ff3d3e]">
            Special Offers
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-8xl md:text-6xl text-5xl text-center uppercase font-bold tracking-wide font-bebas-neue mb-8">
            20% Off on Tattoo
          </h1>
          <p className="lg:text-3xl md:text-2xl text-xl text-center md:tracking-widest tracking-wide font-jost">
            for minimum 5 square inches of tattoo size.
          </p>
        </div>
      </section>
      {/* <section
        id="testimonials"
        className="border-solid border-2 border-[#ff3d3e] flex flex-col rounded-lg p-12"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-5xl tracking-widest font-comforter mb-8 text-[#ff3d3e]">
            Testimonials
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl uppercase font-bold tracking-widest font-bebas-neue mb-12">
            What People Say About Us
          </h1>
          <div className="grid grid-cols-2 gap-4 content-center">
            <p>sfdgghbnm,</p>
            <p>sfdgghbnm,</p>
          </div>
        </div>
      </section> */}
      <Footer />
    </main>
  );
}
