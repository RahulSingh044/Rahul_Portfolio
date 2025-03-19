"use client";
import React from "react";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast"
import axios from "axios";

function contact() {
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

  return (
    <div className="w-full px-36 mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-1/2">
        <div className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="w-full outline-none px-3 py-2 border border-gray-400 rounded-md"
          />
          <div>
          <input
            type="text"
            placeholder="Phone no."
            {...register("phone", { required: true, pattern: { value: /^\d{10}$/, message: "Invalid phone number" } })}
            className="outline-none px-3 py-2 border border-gray-400 rounded-md"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true, pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // Email regex pattern
              message: "Invalid email address"
            }
          })}
          className="outline-none px-3 py-2 border border-gray-400 rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        
        <textarea
          placeholder="Message"
          rows="6"
          {...register("message", { required: true })}
          className="message-input outline-none px-3 py-2 border border-gray-400 rounded-md resize-none"
        />
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="border-2 border-green-800 rounded-full py-1.5 justify-center text-green-800 flex gap-2 w-3/12 font-semibold"
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
