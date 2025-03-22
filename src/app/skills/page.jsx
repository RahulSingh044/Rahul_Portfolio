"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setCursorVariants } from "../../store/cursorSlice";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/hover-card/card"


function skills() {
  const dispatch = useDispatch();
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

  const textEnter = () => {
    dispatch(setCursorVariants('text'));
  }
 
  const BtnClick = () => {
    dispatch(setCursorVariants('BtnClick'));
  }

  const textLeave = () => {
    dispatch(setCursorVariants('default'));
  }

  return (
    <div className="w-full flex md:gap-8 gap-2 lg:mt-4 md:mt-8 mt-20">
      {/* Side Navbar */}
      <div className-="w-full">
        <ul className="flex w-10 gap-4 rotate-90 font-medium text-gray-400 md:tracking-wide lg:text-lg text-sm cursor-pointer">
          <li
            onClick={() => {
              toggleVisibility("frontend");
            }}
            // href="#frontend"
            onMouseEnter={BtnClick}
            onMouseLeave={textLeave}
            className={visibility.frontend ? "text-green-800" : ""}
          >
            Frontend
          </li>
          <li
            onClick={() => {
              toggleVisibility("backend");
            }}
            onMouseEnter={BtnClick}
            onMouseLeave={textLeave}
            className={visibility.backend ? "text-green-800" : ""}
          >
            Backend
          </li>
          <li
            onClick={() => {
              toggleVisibility("dbVisibility");
            }}
            onMouseEnter={BtnClick}
            onMouseLeave={textLeave}
            className={visibility.dbVisibility ? "text-green-800" : ""}
          >
            Database
          </li>
          <li
            onClick={() => {
              toggleVisibility("langVisibility");
            }}
            onMouseEnter={BtnClick}
            onMouseLeave={textLeave}
            className={visibility.langVisibility ? "text-green-800" : ""}
          >
            Language
          </li>
          {/* <li
            // href="#devOps" 
            className="text-green-800">
            devOps
          </li> */}
        </ul>
      </div>

      <div
        className={`flex lg:px-16 md:gap-5 flex-wrap gap-3 ${visibility.frontend ? "" : "hidden"}`}
        id="frontend"
      >
        <HoverCard>
          <HoverCardTrigger>
            <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img src="/images/skill/html-5.png" alt="" className="md:w-16 md:h-16 w-10 h-10 " />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">HTML</span>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img src="/images/skill/css.png" alt="" className="md:w-16 md:h-16 w-10 h-10" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">CSS</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/tailwind-css.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">Tailwind</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/react.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">REACTJS</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img src="/images/skill/redux.png" alt="" className="md:w-16 md:h-16 w-10 h-10 " />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">REDUX</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/nextjs.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">NextJS</span>
          </HoverCardContent>
        </HoverCard>

      </div>

      <div
        className={`flex gap-5 ${visibility.backend ? "" : "hidden"}`}
        id="backend"
      >
        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img src="/images/skill/nodejs.png" alt="" className="md:w-16 md:h-16 w-10 h-10 " />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">NodeJS</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/express-js.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">EXPRESSJS</span>
          </HoverCardContent>
        </HoverCard>

      </div>

      <div
        className={`flex gap-5 ${visibility.langVisibility ? "" : "hidden"}`}
        id="language"
      >
        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/c++.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">C++</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/javascript.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">JAVASCRIPT</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
          <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/typescript.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">TYPESCRIPT</span>
          </HoverCardContent>
        </HoverCard>

      </div>

      <div
        className={`flex gap-5 ${visibility.dbVisibility ? "" : "hidden"}`}
        id="database"
      >
        <HoverCard>
          <HoverCardTrigger>
            <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14 rounded-full bg-gray-200">
              <img
                src="/images/skill/mysql.png"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">MYSQL</span>
          </HoverCardContent>
        </HoverCard>


        <HoverCard>
          <HoverCardTrigger>
            <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="flex justify-center items-center md:w-20 md:h-20 w-14 h-14        rounded-full bg-gray-200">
              <img src="/images/skill/mongodb.png" alt="" className="md:w-16 md:h-16 w-10 h-10" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-sm font-bold">MONGODB</span>
          </HoverCardContent>
        </HoverCard>

      </div>
    </div>
  );
}

export default skills;
