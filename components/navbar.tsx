import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-slate-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Krapansh</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"/projects"} className="mr-5 hover:text-gray-900">
              Projects
            </Link>
            {/* <Link
              href={
                "https://drive.google.com/file/d/1Gn7gNIuxdY-YGT6AZccHU46_xX9fii-W/view?usp=drive_link"
              }
              className="mr-5 hover:text-gray-900"
            >
              Resume
            </Link> */}
            <Link
              href={
                "https://drive.google.com/file/d/1A_4Q2SnZ0W8Y372KhgJGU9STJOrF-TkU/view?usp=sharing"
              }
              className="mr-5 hover:text-gray-900"
            >
              Resume
            </Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
