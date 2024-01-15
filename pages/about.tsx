import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { useSpring, animated } from "react-spring";


const About = () => {

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
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg text-justify">
              I'm a final year student at Vellore Institute of Technology,
              Bhopal, pursuing a B.Tech degree in Electronics and Communication
              Engineering (ECE). I am passionate about technology and have a
              strong inclination toward the field of software development. With
              a keen interest in web development, I have gained practical
              experience in designing and building websites.
              <br />
              <br />
              Skills: I excel in Full Stack Development, boasting a versatile
              skill set that covers both front-end and back-end technologies. My
              proficiency includes React.js, allowing me to craft dynamic and
              interactive user interfaces. I'm well-versed in state management,
              component lifecycle, and Redux for creating scalable applications.
              Additionally, I am experienced in Node.js, enabling me to build
              robust server-side applications, implement RESTful APIs, and
              efficiently handle asynchronous operations. Alongside this, my
              expertise extends to Express.js, where I utilize its middleware
              capabilities and routing features to create scalable and
              high-performance web applications.
              <br />
              <br />
              In the realm of UI/UX Design, I have developed a keen eye for
              design principles. My focus is on ensuring that the websites and
              applications I create are not only functional but also visually
              appealing and user-friendly. I prioritize user-centered design,
              conduct usability testing, and excel in crafting intuitive
              interfaces. Moreover, I am proficient in Canva, a versatile
              graphic design tool, which I use to create stunning visuals,
              graphics, and marketing materials. These assets enhance user
              engagement and establish a strong brand identity.
              <br />
              <br />
              I am actively seeking opportunities as a Full Stack Developer. My
              commitment to staying current with the latest industry trends and
              my adaptability to new technologies make me a valuable asset to
              any development team. I am eager to leverage my skills and
              contribute to innovative web projects.
              <br />
              <br />
              Programming Languages: I have a strong command of C++, a versatile
              programming language, and I am well-versed in utilizing its
              functionalities to solve complex problems. Additionally, I am
              familiar with various data structures, enabling me to efficiently
              organize and manipulate data.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach out to us at any time; your inquiries and
              feedback are highly valued.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label  className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">krapansh.work@gmail.com</a>
                <p className="leading-normal my-5">
                  Ujjain, India
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </animated.div>
  );
};

export default About;
