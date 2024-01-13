import React from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function Home() {
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
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ml-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Greetings! I&apos;m Krapansh,
              <br className="hidden lg:inline-block" />
              your go-to web developer.
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to my corner of the web, where creativity meets
              functionality.
              <br />
              I thrive on crafting seamless, user-friendly websites that not
              only look
              <br />
              good but also deliver a memorable online experience.
            </p>
          </div>
          <div className="">
            <img
              className="object-cover object-center rounded mr-5"
              alt="hero"
              src="/home2.png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Hello! I'm a passionate MERN developer, specializing in Next.js,
              Typescript, and Tailwind. Fueled by my enthusiasm for emerging
              technologies, I bring hands-on project experience to the table.
              Committed to staying ahead of industry trends, I thrive on
              translating innovative ideas into seamless web applications. Let's
              embark on a journey where I leverage my skills to create
              captivating digital experiences.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              KRAPANSH SHRIVASTAVA
            </h2>
            <p className="text-gray-500">Software Developer</p>
          </div>
        </div>
      </section>

      <Footer />
    </animated.div>
  );
}

export default Home;
