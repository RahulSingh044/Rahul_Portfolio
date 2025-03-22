"use client";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCursorVariants } from "../../store/cursorSlice";


export default function page() {
  const dispatch = useDispatch();
  const [testimonial, setTestimonial] = React.useState([]);

  const data = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/testimonials?populate=*`
      );
      setTestimonial(res.data.data);
    } catch (error) {
      console.error("Error fetching data from Strapi:", error);
    }
  };

  React.useEffect(() => {
    data();
  }, []);

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

  if (testimonial <= 0) {
    return <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-center text-2xl">No Testimonials yet</div>
  }

  return (
    <div className="w-full md:mt-10 mt-16">
      {testimonial &&
        testimonial.length > 0 &&
        testimonial.map((test, index) => (
          <div className="md:w-1/2 mt-20 md:mt-0 mx-4 md:mx-10 lg:mx-28 flex flex-col gap-3 p-6 md:px-10 shadow-green-200 shadow-md rounded-lg" key={index}>
            {/* Top section */}
            <div className="flex gap-5">
              {/* Profile Image */}
              <div onMouseEnter={ImgHover}
                  onMouseLeave={textLeave}>
                <img
                  src={`http://localhost:1337//api/testimonials${test.image.url}`}
                  alt="profile"
                  className="md:h-20 md:w-20 h-14 w-14 bg-gray-500 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center" >
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="font-semibold md:text-xl text-lg">{test.Name}</h1>
                <span onMouseEnter={textEnter} onMouseLeave={textLeave} className="md:text-sm text-xs tracking-wider text-slate-400">
                  {test.Profession}
                </span>
                <span onMouseEnter={textEnter} onMouseLeave={textLeave} className="md:text-sm text-xs tracking-wider text-slate-400">
                  {test.Email}
                </span>
              </div>
            </div>

            <div className="flex rotate-180 justify-end">
              <img src="images/comma.png" alt="" className="md:w-10 md:h-10 w-8 h-8" />
              <img src="images/comma.png" alt="" className="md:w-10 md:h-10 w-8 h-8" />
            </div>

            {/* Lower Section */}
            <div>
              <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                {test.message}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

