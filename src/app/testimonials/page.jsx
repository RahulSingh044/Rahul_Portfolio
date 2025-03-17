"use client";
import React from "react";
import axios from "axios";


export default function page() {
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

  if (testimonial < 0) {
    return <div>Nothing to show</div>
  }

  return (
    <div className="w-full">
      {testimonial &&
        testimonial.length > 0 &&
        testimonial.map((test, index) => (
          <div className="w-1/2 mx-28 flex flex-col gap-3 p-6 px-10" key={index}>
            {/* Top section */}
            <div className="flex gap-3">
              {/* Profile Image */}
              <div className="">
                <img
                  src={`http://localhost:1337//api/testimonials${test.image.url}`}
                  alt="profile"
                  className="h-20 w-20 bg-gray-500 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-xl">{test.Name}</h1>
                <span className="text-sm tracking-wider text-slate-400">
                  {test.Profession}
                </span>
                <span className="text-sm tracking-wider text-slate-400">
                  {test.Email}
                </span>
              </div>
            </div>

            <div className="flex rotate-180 justify-end">
              <img src="images/comma.png" alt="" width="30" />
              <img src="images/comma.png" alt="" width="30" />
            </div>

            {/* Lower Section */}
            <div>
              <p>
                {test.message}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

