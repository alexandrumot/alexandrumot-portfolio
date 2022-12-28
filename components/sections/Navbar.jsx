import { AiFillRocket } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useTheme } from 'next-themes';
import { useRef } from 'react';


function Navbar(props) {

  const { systemTheme, theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsFillSunFill className="transition duration-300 cursor-pointer text-2xl text-gray-200 hover:text-gray-300 hover:rotate-45 ml-6 md:ml-8 lg:ml-12" onClick={() => setTheme("light")}/>
      )
    } else if (currentTheme === "light") {
      return (
        <BsFillMoonFill className="transition duration-300 cursor-pointer text-2xl text-black hover:text-gray-700 hover:-rotate-12 ml-6 md:ml-8 lg:ml-12" onClick={() => setTheme("dark")}/>
      )
    }
  }

  // const handleNavSection = (event) => {
  //   // event.target.ref = 
  //   console.log(event.target.getAttribute("ref"))
  // }

  return (
    <nav className="p-10 flex justify-between items-center h-10">
      <div className="cursor-pointer hover:scale-125 transition rotate-45 hover:rotate-180 dark:text-gray-200 text-3xl" >
        <AiFillRocket />
      </div>
      {/* <h1 className="text-xl dark:text-gray-200 cursor-pointer"><code>&#60;<span className=" text-teal-500">h1</span>&#62;Hackerutz&#60;/<span className=" text-teal-500">h1</span>&#62;</code></h1> */}
      <ul className="flex items-center">
        <li>
          <button className="hover:underline decoration-teal-500 underline-offset-8 decoration-2 transition duration-500 px-4 py-2 text-gray-400 ml-6 md:ml-8 lg:ml-12" onClick={() => props.handleScrollToSection(0)}>About</button>
        </li>
        <li>
          <button className="hover:underline decoration-teal-500 underline-offset-8 decoration-2 transition duration-500 px-4 py-2 text-gray-400 ml-6 md:ml-8 lg:ml-12" onClick={() => props.handleScrollToSection(1)}>Projects</button>
        </li>
        <li>
          <button className="hover:underline decoration-teal-500 underline-offset-8 decoration-2 transition duration-500 px-4 py-2 text-gray-400 ml-6 md:ml-8 lg:ml-12" onClick={() => props.handleScrollToSection(2)}>Contact</button>
        </li>
        <li>
          {handleThemeToggle()}
        </li>
        <li>
          <button className="border-4 rounded border-solid transition duration-500 border-teal-500 hover:border-teal-300 px-4 py-2 text-white ml-6 md:ml-8 lg:ml-12" href="#">Resume</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;