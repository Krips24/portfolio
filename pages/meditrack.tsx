import React from "react";
import Footer from "@/components/footer";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

const Meditrack = () => {
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
          <div className=" w-2/5 mb-10 md:mb-0">
            <Link href="https://drive.google.com/file/d/139UeqnAepw5KN7-s7izWABJ8A6Si1F1i/view?usp=drive_link">
              <img
                className="relative top-7 ml-3 object-cover object-center rounded transition-transform transform hover:scale-105"
                alt="hero"
                src="/meditrack.jpg"
              />
            </Link>
          </div>
          <div className="  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" title-font sm:text-4xl text-3xl mt-5 mb-4 font-medium text-gray-900">
              MediTrack Web Application
            </h1>
            <br />
            <ul className="mb-8 leading-relaxed">
              {/* ... Your list items */}
              <ul className="mb-8 leading-relaxed text-justify pr-10">
                <li>
                  <strong>Upload Medical Records: </strong>
                  Easily upload your important medical records, such as
                  prescriptions, lab results, and medical images. MediTrack
                  allows you to organize and store these records in one secure
                  location.
                </li>
                <br />
                <li>
                  <strong>Access Anytime, Anywhere: </strong>
                  With MediTrack, you can access your medical records from any
                  device with an internet connection. This flexibility ensures
                  you have your health information readily available when
                  needed, whether at home or on the go.
                </li>
                <br />

                <li>
                  <strong> Secured Authentication: </strong>
                  MediTrack prioritizes the security of your sensitive medical
                  data. The application features user authentication to ensure
                  that only authorized users can access their records.
                </li>
                <br />

                <li>
                  <strong>Beautiful User Interface: </strong>
                  MediTrack boasts a user-friendly and aesthetically pleasing
                  user interface, making it easy for users to navigate and
                  manage their medical records. The UI is designed to enhance
                  the overall user experience.
                </li>
              </ul>
            </ul>
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/139UeqnAepw5KN7-s7izWABJ8A6Si1F1i/view?usp=drive_link"
                className="relative bottom-7 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
              >
                Demo
              </a>
            </div>
          </div>
        </animated.div>
      </section>

      <Footer />
    </animated.div>
  );
};

export default Meditrack;
