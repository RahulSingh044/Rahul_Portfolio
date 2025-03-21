'use client';
import { useDispatch } from 'react-redux';
import { setCursorVariants } from '../store/cursorSlice';

export default function page() {
  const dispatch = useDispatch();

  const textEnter = () => {
    dispatch(setCursorVariants('text'));
  }

  const textLeave = () => {
    dispatch(setCursorVariants('default'));
  }

  return (
    <div className='w-screen px-36 mt-8'>
      <span onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-lg'>Welcome to my <strong>creative space!</strong></span>
      <div className='flex flex-col gap-4 text-lg mt-4'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave}> Hey <strong>Rahul,</strong> this side</p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
        I am a MERN Stack Developer with over 1 years of hands-on experience in full-stack web development. Specializing in React, Node.js, and MongoDB, I focus on building scalable, high-performance, and user-centric web applications. My passion lies in crafting innovative solutions that address real-world challenges through clean, efficient code.
      </p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Throughout my career, I have demonstrated a strong commitment to continuous learning and staying abreast of the latest trends in web technologies. I thrive in collaborative environments, where my ability to communicate effectively, adapt to new challenges, and focus on quality assurance contributes to the success of the team and project.
      </p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
        As a dedicated problem solver, I am driven by the opportunity to create impactful solutions that enhance user experience and drive business outcomes. Whether working independently or as part of a team, I bring both technical expertise and a proactive, results-oriented approach to every project.
      </p>
      </div>
     
    </div>
  );
}
