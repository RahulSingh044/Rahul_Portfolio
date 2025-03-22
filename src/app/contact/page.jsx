"use client";
import React from "react";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCursorVariants } from "../../store/cursorSlice";

function contact() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (value) => {
    try {
      const values = {
        data: {
          Name: value.name,
          phoneNo: value.phone,
          email: value.email,
          message: value.message
        }
      }
      const res = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/contacts`, values)
      console.log(res)
      if (res.status === 201) {
        toast.success("Message sent successfully")
      }
    } catch (error) {
      // Log the full error details to help debug the issue
      console.error("Error submitting to Strapi:", error.response?.data || error);
      toast.error("Failed to send message. Please try again.");
    }
  }

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
    <div className="w-full lg:px-36 md:px-10 px-4 md:mt-10 mt-20 pb-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap md:flex-nowrap flex-col md:gap-6 gap-4 lg:w-1/2 md:w-4/6">
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
          <input
            onMouseEnter={BtnClick}
            onMouseLeave={textLeave}
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="w-full outline-none px-3 py-2 border border-gray-400 rounded-md hover:border-green-800 hover:border-2 transition-all duration-200"
          />
          <div className="w-full">
          <input
            onMouseEnter={BtnClick}
            onMouseLeave={textLeave}
            type="text"
            placeholder="Phone no."
            {...register("phone", { required: true, pattern: { value: /^\d{10}$/, message: "Invalid phone number" } })}
            className="w-full outline-none px-3 py-2 border border-gray-400 rounded-md hover:border-green-800 hover:border-2 transition-all duration-200"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>
        <input
          onMouseEnter={BtnClick}
          onMouseLeave={textLeave}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true, pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // Email regex pattern
              message: "Invalid email address"
            }
          })}
          className="outline-none px-3 py-2 border border-gray-400 rounded-md hover:border-green-800 hover:border-2 transition-all duration-200"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        
        <textarea
          onMouseEnter={BtnClick}
          onMouseLeave={textLeave}
          placeholder="Message"
          rows="6"
          {...register("message", { required: true })}
          className="message-input outline-none px-3 py-2 border border-gray-400 rounded-md resize-none hover:border-green-800 hover:border-2 transition-all duration-200"
        />
        <div className="w-full flex justify-end">
          <button 
            onMouseEnter={BtnClick}
            onMouseLeave={textLeave}
            type="submit"
            className="border-2 cursor-none border-green-800 rounded-full md:py-1.5 px-4 md:p-0 justify-center text-green-800 flex gap-2 md:w-3/12 font-semibold hover:gap-4 hover:bg-green-800 hover:text-white transition-all duration-200 "
          >
            Submit
            <SendHorizontal />
          </button>
        </div>
      </form>
    </div>
  );
}

export default contact;
