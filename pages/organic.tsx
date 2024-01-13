import React from "react";
import Footer from "@/components/footer";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

const Organic = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const listItemAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 800 },
  });

  return (
    <animated.div className="bg-image" style={fadeIn}>
      <section className="text-gray-600 body-font">
        <animated.div className="container mx-auto flex px-5 py-19 md:flex-row flex-col items-center">
          <div className=" w-2/5 mb-10 md:mb-0" style={imageAnimation}>
            <Link href="https://drive.google.com/file/d/1cljChAmgeQDDKvzNMBo9r8Pk-SJUYS5X/view?usp=drive_link">
              <img
                className="ml-3 object-cover object-center rounded transition-transform transform hover:scale-105"
                alt="hero"
                src="/organic.jpg"
              />
            </Link>
          </div>
          <div className="  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Organic.in Web Application
            </h1>
            <br />
            <ul className="mb-8 leading-relaxed" style={listItemAnimation}>
              {/* ... Your list items */}
              <ul className="mb-8 leading-relaxed">
                <li>
                  <strong>AI-Generated Personalized Meal Plans: </strong>{" "}
                  Organic.in leverages advanced artificial intelligence to craft
                  personalized meal plans tailored to the user's health and
                  wellness objectives.
                </li>
                <br />
                <li>
                  <strong>Comprehensive Recipe Database: </strong>
                  Explore a vast collection of recipes that align with your
                  dietary preferences and health goals. Whether you're aiming to
                  lose weight, build muscle, or maintain a balanced diet,
                  Organic.in has the recipes for you.
                </li>
                <br />

                <li>
                  <strong>Detailed Nutritional Information: </strong>
                  Gain insights into the nutritional content of each meal.
                  Organic.in provides detailed information about macros,
                  enabling users to make informed decisions and meet their
                  nutritional requirements.
                </li>
                <br />

                <li>
                  <strong>Enhance Your Healthy Lifestyle: </strong>
                  Organic.in is your partner in improving overall well-being.
                  With personalized guidance and insights, users can make
                  informed choices to enhance their healthy lifestyle.
                </li>
                <br />

                <li>
                  <strong> Cook Anywhere, Anytime: </strong>
                  Access recipes and meal plans on the go. Organic.in ensures
                  that you can make healthy and delicious meals at home or
                  anywhere, making it convenient to stick to your health goals.
                </li>
              </ul>
            </ul>
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1cljChAmgeQDDKvzNMBo9r8Pk-SJUYS5X/view?usp=drive_link"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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

export default Organic;
