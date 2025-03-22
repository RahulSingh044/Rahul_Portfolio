"use client";
import React from "react";
import { Linkedin, Section } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { SquareArrowOutUpRight, Plus } from "lucide-react";
import Link from "next/link";
import TestimonialForm from "./TestimonialForm";
import { useDispatch } from "react-redux";
import { setCursorVariants } from "../src/store/cursorSlice";
import { FileDown } from "lucide-react";
import { FileUser } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Nav() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState({
    about: true,
    projects: false,
    skills: false,
    testimonials: false,
    contact: false,
  });

  
  const toggleVisibility = (section) => {
    setIsVisible((prevState) => {
      // Make a copy of the previous state
      const newState = { ...prevState };

      // Set all sections to false first
      Object.keys(newState).forEach((key) => {
        newState[key] = false;
      });

      // Toggle the clicked section
      newState[section] = !prevState[section];

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

  const ImgHover = () => {
    dispatch(setCursorVariants('ImgHover'));
  }

  React.useEffect(() => {
    const currentUrl = window.location.href;
    const Base = "http://localhost:3000/";
    const Url = currentUrl.replace(Base, "");
    toggleVisibility(Url);
  }, []);

  return (
    <div className="min-w-screen h-80">
      <div className="w-full md:flex md:gap-20 lg:px-44 md:px-10 px-4 md:pt-10 pt-5">
        {/* Profile Picture */}
        <div className="">
          <div onMouseEnter={ImgHover}
              onMouseLeave={textLeave} className="md:w-44 md:h-44 w-36 h-36 rounded-full border-2 border-black flex justify-center items-center">
            <img
              
              src="/images/pfp.jpg"
              alt="Rahul Singh"
              className="md:w-40 md:h-40 w-32 h-32 rounded-full object-fill hover:scale-105 cursor-none"
            />
          </div>
        </div>
        {/* Bio */}
        <div className="w-full md:py-8 py-4 flex flex-col gap-3 md:border-b-0 border-b-2 border-gray-200">
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="md:text-4xl lg:text-5xl text-2xl font-bold md:tracking-wider">
            Rahul Singh Chouhan
          </h1>
          <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-gray-400 md:text-lg lg:text-xl">MERN Stack Developer | Full-Stack Web Development | React | Node.js | MongoDB</p>
          <div className="w-full flex justify-between md:mt-6">
            {/* Social Media Links */}
            <div className="flex gap-3 items-center">
              <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full border-2 hover:bg-green-800 hover:text-white transition-all duration-200">
                <Link href="https://www.linkedin.com/in/rahul-singh-chouhan-381b252a9/">
                  <Linkedin className="text-gray-500 hover:text-white w-5" />
                </Link>
              </div>

              <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full border-2 hover:bg-green-800 hover:text-white transition-all duration-200">
                <Link href="https://github.com/RahulSingh044">
                  <Github className="text-gray-500 hover:text-white w-5" />
                </Link>
              </div>

              <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full border-2 hover:bg-green-800 hover:text-white transition-all duration-300">
                <Instagram className="text-gray-500 hover:text-white w-5" />
              </div>
              
              <Link href="/RESUMERahul.pdf" target="_blank" download>
                <button onClick={()=> window.open("https://drive.google.com/file/d/1NhTM9gfZLqCtOfWnsV8bi_Kl79DUgzF9/view")} onMouseEnter={BtnClick} onMouseLeave={textLeave} className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full border-2 hover:bg-green-800 hover:text-white transition-all duration-300 md:hover:after:content-['Resume'] md:hover:w-28">
                  <FileUser className="text-gray-500 hover:text-white w-5" />
                </button>
              </Link>

            </div>

            {isVisible.testimonials ? (
              /* Add testimonials */
              <Dialog className="">
                <DialogTrigger onMouseEnter={BtnClick} onMouseLeave={textLeave} className="md:w-48 md:h-8 cursor-none border border-green-800 rounded-full flex justify-center items-center md:text-sm text-xs md:tracking-wider md:px-4 px-2 gap-2 text-green-800 hover:bg-green-800 hover:text-white transition-all duration-300">
                  Add Testimonials
                  <Plus width="14" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader >
                    <DialogTitle className="font-mono md:text-2xl text-sm">Add your <span className="text-green-800">Testimonials</span></DialogTitle>
                  </DialogHeader>
                  <TestimonialForm />
                </DialogContent>
              </Dialog>
            ) : (
              /* Message Box */
              <Link href="/contact">
                <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="md:w-40 md:h-8 border border-green-800 rounded-full flex justify-center items-center md:text-sm md:tracking-wider md:px-4 text-xs px-2 gap-2 text-green-800 hover:bg-green-800 hover:text-white transition-all duration-300">
                  Message me
                  <SquareArrowOutUpRight width="14" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navbar Items */}
      <div className="w-full lg:w-4/5 px-4 md:px-14 lg:px-40 mt-2 md:mt-0">
        <nav>
          <ul className="flex md:text-xl text-sm justify-between font-semibold md:space-x-10 md:tracking-wider text-gray-400">
            <Link
              onClick={() => {
                toggleVisibility("about");
              }}
              href="/"
              onMouseEnter={BtnClick}
              onMouseLeave={textLeave}
              className={isVisible.about ? "text-green-800" : ""}
            >
              About
            </Link>
            <Link
              onClick={() => toggleVisibility("projects")}
              href="/projects"
              className={isVisible.projects ? "text-green-800" : ""}
              onMouseEnter={BtnClick}
              onMouseLeave={textLeave}
            >
              Projects
            </Link>
            <Link
              onClick={() => toggleVisibility("skills")}
              href="/skills"
              onMouseEnter={BtnClick}
              onMouseLeave={textLeave}
              className={isVisible.skills ? "text-green-800" : ""}
            >
              Skills
            </Link>
            <Link
              onClick={() => toggleVisibility("testimonials")}
              href="/testimonials"
              onMouseEnter={BtnClick}
              onMouseLeave={textLeave}
              className={isVisible.testimonials ? "text-green-800" : ""}
            >
              Testimonials
            </Link>
            <Link
              onClick={() => toggleVisibility("contact")}
              href="/contact"
              onMouseEnter={BtnClick}
              onMouseLeave={textLeave}
              className={isVisible.contact ? "text-green-800" : ""}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
