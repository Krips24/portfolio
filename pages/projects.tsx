//@ts-nocheck

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import IconsPath from "./iconsPath";
import { Icons } from "./icons";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiCanva } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";




const icons = [
  {
    name: "next.js",
    icon: <TbBrandNextjs className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <RiReactjsLine className="text-8xl animate-pulse" />,
  },

  {
    name: "react.js",
    icon: <FaNodeJs className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <SiExpress className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <DiMongodb className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <SiTailwindcss className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <DiJavascript className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <FaHtml5 className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <IoLogoCss3 className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <FaGitAlt className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <BiLogoTypescript className="text-8xl animate-pulse" />,
  },
  {
    name: "react.js",
    icon: <SiCanva className="text-8xl animate-pulse" />,
  },
];

const Projects = () => {
  // Configuring fade-in animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="bg-image" style={fadeIn}>
      {/* <Navbar /> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Explore My Creations
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Embark on a journey through innovation as we unveil our
                groundbreaking project section, where creativity meets purpose.
                Explore the realms of cutting-edge solutions and transformative
                ideas that define the essence of our commitment to excellence.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <animated.div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={fadeIn}>
              <Link href="/organic">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-transform transform hover:scale-105"
                    src="/organic.jpg"
                  />
                </div>
              </Link>

              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Organic.in
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Pioneered an AI-driven health website offering personalized meal
                plans with detailed macros, fostering informed dietary choices.
                Empowering users to achieve goals with ease, whether at home or
                on the go.
              </p>
              <Link
                href="/organic"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </animated.div>

            <animated.div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={fadeIn}>
              <Link href={"/meditrack"}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-transform transform hover:scale-105"
                    src="/meditrack.jpg"
                  />
                </div>
              </Link>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                MediTrack Healthcare
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Innovated a secure medical data management app, ensuring users
                have instant access to their complete medical history,
                addressing the issue of lost or unavailable records in crucial
                situations.
              </p>
              <Link
                href="/meditrack"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </animated.div>
            <animated.div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={fadeIn}>
              <Link href={"/keeper"}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-transform transform hover:scale-105"
                    src="google.avif"
                  />
                </div>
              </Link>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Keeper-App
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Crafted a groundbreaking medical data app, providing secure
                storage and instant retrieval of comprehensive medical
                histories, mitigating challenges of lost records in critical
                moments.
              </p>
              <Link
                href="/keeper"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}

      {/* headline */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              My Skills
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Navigating the Digital Landscape: A Showcase of My Diverse and
              Honed Skill Set
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex justify-center items-center gap-20 flex-wrap max-w-lg mx-auto">
            {icons.map((item, index) => {
              return <>{item.icon}</>;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </animated.div>
  );
};

export default Projects;
