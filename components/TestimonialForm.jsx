import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function TestimonialForm() {
  // const fileInputRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const [image, setFile] = React.useState(null);

  const onSubmit = async (values) => {

    const data = new FormData();
    data.append('files.image', image); // Changed to files.image for Strapi

    // Create data object first
    const dataObj = {
      Name: values.name,
      Profession: values.profession,
      Email: values.email,
      message: values.message,
    };

    // Append data object separately
    data.append('data', JSON.stringify(dataObj));
    console.log('FormData contents:');
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/testimonials`,
        data
      );

      const response = await res.json();
      console.log(response);

    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto overflow-hidden flex flex-col md:gap-5 gap-3">
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="text"
        id="name"
        name="name"
        placeholder="Your Full Name"
        {...register("name")}
        required
      />
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="text"
        id="profession"
        name="profession"
        placeholder="Your Profession"
        {...register("profession")}
        required
      />
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="file"
        id="pfp"
        name="pfp"
        onChange={onFileChange}
      />
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        {...register("email")}
        required
      />
      <textarea
        className="border px-3 py-2 rounded-lg bg-gray-300 resize-none"
        id="message"
        name="message"
        placeholder="Your Message"
        {...register("message")}
      />
      <button
        className="bg-green-800 text-white font-2xl py-3 rounded-2xl font-semibold"
        type="submit"
      >
        Send Request
      </button>
    </form>
  );
}

export default TestimonialForm;
