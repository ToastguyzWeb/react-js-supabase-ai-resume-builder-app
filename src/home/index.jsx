import Header from "@/components/custom/Header";
import { AtomIcon, Edit, ListStart, Share2 } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white px-6 py-8">
        <section className="z-50">
          <div className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">
                Toastguyz.com All new Apps
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Build Your Resume <span className="text-primary">With AI</span>{" "}
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>
            <div className="flex flex-col mb-6 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <ListStart className="h-6 w-6 pe-2" />
                Get Started
              </a>
            </div>
          </div>
        </section>
        <section className="z-50 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <h2 className="text-md text-gray-500">
            Give mock interview in just 3 simplar easy step
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border bg-white border-gray-200 p-6 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <div className="flex justify-center">
                <AtomIcon className="h-8 w-8" />
              </div>

              <h2 className="mt-3 text-xl font-bold text-black">
                Write promote for your firm
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border bg-white border-gray-200 p-6 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <div className="flex justify-center">
                <Edit className="h-8 w-8" />
              </div>
              <h2 className="mt-3 text-xl font-bold text-black">
                Edit Your form{" "}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border bg-white border-gray-200 p-6 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <div className="flex justify-center">
                <Share2 className="h-8 w-8" />
              </div>
              <h2 className="mt-3 text-xl font-bold text-black">
                Share & Start Accepting Responses
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
