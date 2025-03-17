"use client";
import React from "react";
import { SendHorizontal } from "lucide-react";


function contact() {
  return (
    <div className="w-full px-36">
      <form className="flex flex-col gap-6 w-1/2" action="">
        <div className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full outline-none px-3 py-2 border border-gray-400 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone no."
            className="outline-none px-3 py-2 border border-gray-400 rounded-md"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="outline-none px-3 py-2 border border-gray-400 rounded-md"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="message-input outline-none px-3 py-2 border border-gray-400 rounded-md"
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
