import { AiFillLinkedin, AiFillGithub, AiOutlineArrowDown } from "react-icons/ai";

import TypeAnimation from "../TypeAnimation";


function Start(props) {
  return (
    <section className="px-10 flex flex-col h-screen w-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full mt-14">
          <h1 className="text-5xl dark:text-gray-200 font-semibold md:text-6xl text-gray-600 text-center">I'm <span className="text-teal-500">Alex Mot</span>,</h1>
          <h2 className="text-5xl md:text-6xl text-gray-700 dark:text-gray-200 font-normal px-10 w-full h-30 text-center">Interested in <TypeAnimation /></h2>
        </div>
        
        <p className="text-lg py-5 px-10 leading-8 text-gray-400 text-center md:text-xl absolute bottom-1/3 w-full">
          Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!
        </p>
      </div>

      <div className="text-5xl text-gray-600 absolute bottom-40 flex justify-center gap-16 left-0 w-full">
        <a href="https://github.com/alexandrumot" className="hover:text-black transition duration-500 md:scale-110 lg:scale-125 dark:text-gray-200 dark:hover:text-gray-400"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/alexandru-mo%C8%9B-b119021ba/" className="hover:text-black transition duration-500 md:scale-110 lg:scale-125 dark:text-gray-200 dark:hover:text-gray-400"><AiFillLinkedin /></a>
      </div>

      <div className="flex justify-center items-center ">
        <button onClick={() => props.handleScrollToSection(0)} className="rounded-full border-2 p-3 border-gray-400 text-3xl md:text-4xl  text-teal-600 animate-bounce absolute bottom-10">
          <AiOutlineArrowDown />
        </button>
      </div>
    </section>
  );
}

export default Start;