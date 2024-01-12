function Home() {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Krapansh
              <br className="hidden lg:inline-block" />
              Welcome to my Portfolio
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to my Portfolio profile! I'm an Electronics student with a
              keen interest in exploring the fascinating realms of Full Stack
              Web Development and Data Structures and Algorithms (DSA).
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
    </div>
  );
}

export default Home;
