import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="fixed flex h-20 w-full items-center justify-between bg-black px-4 text-white">
      <div>
        <h1 className="ml-2 font-signature text-3xl md:text-4xl">
          Hritik Kuntal
        </h1>
      </div>

      <ul className="hidden md:flex">
        {link.map((link) => (
          <li
            key={link.id}
            className="cursor-pointer px-4 font-medium capitalize text-gray-400 underline-offset-4 duration-200 hover:text-white hover:underline"
          >
            {link.link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={20}></FaTimes> : <FaBars size={20}></FaBars>}
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {link.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer px-4 py-6 text-4xl capitalize hover:text-white"
            >
              {link.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
