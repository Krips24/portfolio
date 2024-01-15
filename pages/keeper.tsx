import React from "react";
import Footer from "@/components/footer";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

const Keeper = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="bg-image" style={fadeIn}>
      <section className="text-gray-600 body-font">
        <animated.div
          className="container mx-auto flex px-5 py-19 md:flex-row flex-col items-center"
          style={fadeIn}
        >
          <div className="w-2/5 mb-10 md:mb-0">
            <Link href="https://github.com/Krips24/Keeper-App">
              <img
                className="relative top-7 ml-3 object-cover object-center rounded transition-transform transform hover:scale-105"
                alt="hero"
                src="/google.avif"
              />
            </Link>
          </div>
          <div className="  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" title-font sm:text-4xl text-3xl mt-5 mb-4 font-medium text-gray-900">
              Keeper App
            </h1>
            <br />
            <ul className="mb-8 leading-relaxed">
              {/* ... Your list items */}
              <ul className="mb-8 leading-relaxed text-justify pr-10">
                <li>
                  <strong> Innovative Note-Keeping Solution: </strong>
                  Developed an advanced Note-keeping web application designed to
                  streamline the process of creating, storing, and managing
                  notes effectively.
                </li>
                <br />
                <li>
                  <strong> Cutting-edge Technologies: </strong>
                  Leveraged modern web development technologies such as React,
                  HTML, and CSS to create a robust and user-friendly interface
                  for seamless note-taking.
                </li>
                <br />

                <li>
                  <strong> User-Centric Design: </strong>
                  Prioritized user experience by implementing an intuitive
                  design, ensuring users can effortlessly create, edit, and
                  organize their notes within the application.
                </li>
                <br />

                <li>
                  <strong> Dynamic Deletion Feature: </strong>
                  Introduced a dynamic feature enabling users to delete notes
                  after creation, providing enhanced control and flexibility in
                  managing their content.
                </li>
              </ul>
            </ul>
            <div className="flex justify-center">
              <Link
                href="https://4378nl.csb.app/"
                className="relative bottom-7 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
              >
                Demo
              </Link>
            </div>
          </div>
        </animated.div>
      </section>

      <Footer />
    </animated.div>
  );
};

export default Keeper;
