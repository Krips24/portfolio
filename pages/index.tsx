import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function Home() {
  return (
    <div className="bg-image">
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ml-14 items-center text-center">
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/home.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
