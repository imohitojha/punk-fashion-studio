import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative top-28">
    <hr className="m-auto h-1 bg-gray-50 border-0 w-11/12" />
      <footer className="h-32 flex justify-center items-start m-20 font-oswald mb-72 mx-20">
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-start">
            <p className="text-6xl font-bold mb-16 uppercase text-[#ff3d3e] font-bebas-neue">
              The Punk Fashion Studio
            </p>
            <div className="flex justify-start items-center">
              <Icon
                className="text-[#ff3d3e] text-5xl"
                icon="akar-icons:instagram-fill"
              />
              <Icon
                className="text-[#ff3d3e] text-5xl ml-8"
                icon="akar-icons:facebook-fill"
              />
              <Icon
                className="text-[#ff3d3e] text-5xl ml-8"
                icon="akar-icons:twitter-fill"
              />
              <Icon
                className="text-[#ff3d3e] text-5xl ml-8"
                icon="akar-icons:youtube-fill"
              />
              <Icon
                className="text-[#ff3d3e] text-5xl ml-8"
                icon="akar-icons:pinterest-fill"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div
            id="contact-us"
            className="flex flex-col justify-center items-start pl-12"
          >
            <p className="text-4xl mb-16 uppercase">Contact Us</p>
            <div className="font-jost">
              <div className="text-xl flex tracking-widest mb-8">
                <Icon
                  className="text-[#ff3d3e] text-5xl mr-8"
                  icon="mdi:address-marker"
                />
                <div>
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
              <p className="text-xl flex tracking-widest mb-8">
                <Icon
                  className="text-[#ff3d3e] text-4xl mr-8"
                  icon="mdi:phone"
                />
                +91 885855910, +91 8177006806
              </p>
              <p className="text-xl flex tracking-widest mb-8">
                <Icon
                  className="text-[#ff3d3e] text-4xl mr-8"
                  icon="mdi:email"
                />
                thepunkfashionstudio@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="mb-8">
        <p className="text-2xl text-center font-jost">
          &copy; {new Date().getFullYear()} The Punk Fashion Studio
        </p>
      </div>
    </div>
  );
}
