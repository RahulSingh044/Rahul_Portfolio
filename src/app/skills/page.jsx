"use client";
import React from "react";
import Link from "next/link";

function skills() {
  // const [isVisible, setIsVisible] = React.useState(false)
  const [visibility, setVisibility] = React.useState({
    frontend: true,
    backend: false,
    langVisibility: false,
    dbVisibility: false,
  });

  const toggleVisibility = (key) => {
    setVisibility((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };

      // Close other sections when opening a new one
      if (key !== "frontend") newState.frontend = false;
      if (key !== "backend") newState.backend = false;
      if (key !== "langVisibility") newState.langVisibility = false;
      if (key !== "dbVisibility") newState.dbVisibility = false;

      return newState;
    });
  };

  return (
    <div className="w-full flex gap-8">
      {/* Side Navbar */}
      <div className-="w-full">
        <ul className="flex w-10 gap-4 rotate-90 font-medium text-gray-400 tracking-wide cursor-pointer">
          <li
            onClick={() => {
              toggleVisibility("frontend");
            }}
            // href="#frontend"
            className={visibility.frontend ? "text-green-800" : ""}
          >
            Frontend
          </li>
          <li
            onClick={() => {
              toggleVisibility("backend");
            }}
            // href="#backend"
            className={visibility.backend ? "text-green-800" : ""}
          >
            Backend
          </li>
          <li
            onClick={() => {
              toggleVisibility("dbVisibility");
            }}
            // href="#database"
            className={visibility.dbVisibility ? "text-green-800" : ""}
          >
            Database
          </li>
          <li
            onClick={() => {
              toggleVisibility("langVisibility");
            }}
            // href="#language"
            className={visibility.langVisibility ? "text-green-800" : ""}
          >
            Language
          </li>
          <li
          // href="#devOps" 
          className="text-green-800">
            devOps
          </li>
        </ul>
      </div>

      <div
        className={`flex gap-5 ${visibility.frontend ? "" : "hidden"}`}
        id="frontend"
      >
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img src="/images/skill/html-5.png" alt="" className="w-16 h-16 " />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img src="/images/skill/css.png" alt="" className="w-16 h-16" />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/tailwind-css.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/react.png"
            alt=""
            className="w-18 h-18 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img src="/images/skill/redux.png" alt="" className="w-14 h-14 " />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/nextjs.png"
            alt=""
            className="w-18 h-18 rounded-full"
          />
        </div>
      </div>

      <div
        className={`flex gap-5 ${visibility.backend ? "" : "hidden"}`}
        id="backend"
      >
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img src="/images/skill/nodejs.png" alt="" className="w-16 h-16 " />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/express-js.png"
            alt=""
            className="w-16 h-16"
          />
        </div>
      </div>

      <div
        className={`flex gap-5 ${visibility.langVisibility ? "" : "hidden"}`}
        id="language"
      >
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/c++.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/javascript.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/typescript.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>
      </div>

      <div
        className={`flex gap-5 ${visibility.dbVisibility ? "" : "hidden"}`}
        id="database"
      >
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img
            src="/images/skill/mysql.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-200">
          <img src="/images/skill/mongodb.png" alt="" className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

export default skills;
