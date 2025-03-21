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
      <div className="w-full flex gap-20 px-36 pt-10">
        {/* Profile Picture */}
        <div>
          <div onMouseEnter={ImgHover}
              onMouseLeave={textLeave} className="w-44 h-44 rounded-full border-2 border-black flex justify-center items-center">
            <img
              
              src="/images/pfp.jpg"
              alt="Rahul Singh"
              className="w-40 h-40 rounded-full object-fill hover:scale-105 cursor-none"
            />
          </div>
        </div>
        {/* Bio */}
        <div className="w-4/5 py-8 flex flex-col gap-3">
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-4xl font-bold tracking-wider">
            Rahul Singh Chouhan
          </h1>
          <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-gray-400 text-lg">MERN Stack Developer | Full-Stack Web Development | React | Node.js | MongoDB</p>
          <div className="w-full flex justify-between mt-6">
            {/* Social Media Links */}
            <div className="flex gap-3">
              <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="w-10 h-10 flex justify-center items-center rounded-full border-2 hover:bg-green-800 hover:text-white transition-all duration-200">
                <Link href="https://www.linkedin.com/in/rahul-singh-chouhan-381b252a9/">
                  <Linkedin className="text-gray-500 hover:text-white" />
                </Link>
              </div>

              <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="w-10 h-10 flex justify-center items-center rounded-full border-2 hover:bg-green-800 hover:text-white transition-all duration-200">
                <Link href="https://github.com/RahulSingh044">
                  <Github className="text-gray-500 hover:text-white" />
                </Link>
              </div>

              <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="w-10 h-10 flex justify-center items-center rounded-full border-2 hover:bg-green-800 hover:text-white transition-all duration-300">
                <Instagram className="text-gray-500 hover:text-white" />
              </div>
            </div>

            {isVisible.testimonials ? (
              /* Add testimonials */
              <Dialog className="w-80">
                <DialogTrigger onMouseEnter={BtnClick} onMouseLeave={textLeave} className="w-48 h-8 cursor-none border border-green-800 rounded-full flex justify-center items-center text-sm tracking-wider px-4 gap-2 text-green-800 hover:bg-green-800 hover:text-white transition-all duration-300">
                  Add Testimonials
                  <Plus width="14" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader >
                    <DialogTitle className="font-mono text-2xl">Add your <span className="text-green-800">Testimonials</span></DialogTitle>
                  </DialogHeader>
                  <TestimonialForm />
                </DialogContent>
              </Dialog>
            ) : (
              /* Message Box */
              <Link href="/contact">
                <div onMouseEnter={BtnClick} onMouseLeave={textLeave} className="w-40 h-8 border border-green-800 rounded-full flex justify-center items-center text-sm tracking-wider px-4 gap-2 text-green-800 hover:bg-green-800 hover:text-white transition-all duration-300">
                  Message me
                  <SquareArrowOutUpRight width="14" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navbar Items */}
      <div className="w-full px-36">
        <nav>
          <ul className="flex items-center gap-10 text-xl font-semibold space-x-10 tracking-wider text-gray-400">
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
