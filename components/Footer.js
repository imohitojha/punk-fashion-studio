import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative top-28">
    <hr className="m-auto h-1 bg-gray-50 border-0 w-11/12" />
      <footer className="h-32 flex justify-center items-start m-20 font-oswald mb-72 lg:mx-20 mx-10">
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-start">
            <p className="md:text-6xl text-3xl font-bold mb-16 uppercase text-[#ff3d3e] font-bebas-neue">
              The Punk Fashion Studio
            </p>
            <div className="flex justify-start items-center md:flex-row flex-col gap-y-4 gap-x-8">
              <Icon
                className="text-[#ff3d3e] md:text-5xl text-4xl"
                icon="akar-icons:instagram-fill"
              />
              <Icon
                className="text-[#ff3d3e] md:text-5xl text-4xl"
                icon="akar-icons:facebook-fill"
              />
              <Icon
                className="text-[#ff3d3e] md:text-5xl text-4xl"
                icon="akar-icons:twitter-fill"
              />
              <Icon
                className="text-[#ff3d3e] md:text-5xl text-4xl"
                icon="akar-icons:youtube-fill"
              />
              <Icon
                className="text-[#ff3d3e] md:text-5xl text-4xl"
                icon="akar-icons:pinterest-fill"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div
            id="contact-us"
            className="flex flex-col justify-center items-start md:pl-12 pl-2 md:mt-0 mt-9"
          >
            <p className="md:text-4xl text-2xl lg:mb-16 md:mb-8 mb-4 uppercase">Contact Us</p>
            <div className="font-jost">
              <div className="flex tracking-widest mb-4">
                <Icon
                  className="text-[#ff3d3e] md:text-6xl text-9xl md:ml-0 -ml-10 lg:mr-8 mr-4"
                  icon="mdi:address-marker"
                />
                <div className="lg:text-xl md:text-lg text-sm md:break-normal break-all">
                  <span>
                    118/164 (7), Gumti No.5, Kaushalpuri, Darshan Purwa, Kanpur,
                    Uttar Pradesh 208012
                  </span>
                  <Link href="https://goo.gl/maps/cvMJpn2NRzND3r6G7" target="_blank">
                    <br />
                    <span className="underline cursor-pointer">
                      (Click here to reach our location)
                    </span>
                  </Link>
                </div>
              </div>
              <p className="flex tracking-widest mb-4">
                <Icon
                  className="text-[#ff3d3e] md:text-4xl text-3xl md:ml-0 -ml-10 lg:mr-8 mr-4"
                  icon="mdi:phone"
                />
                <span className="lg:text-xl md:text-lg text-sm">+91 8858559101,<br />+91 8177006806</span>
              </p>
              <p className="flex tracking-widest mb-4">
                <Icon
                  className="text-[#ff3d3e] md:text-4xl text-5xl md:ml-0 -ml-10 lg:mr-8 mr-4"
                  icon="mdi:email"
                />
                <span className="lg:text-xl md:text-lg text-sm md:break-normal break-all">thepunkfashionstudio@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="pb-8">
        <p className="md:text-2xl text-lg text-center font-jost">
          &copy; {new Date().getFullYear()} The Punk Fashion Studio
        </p>
      </div>
    </div>
  );
}
