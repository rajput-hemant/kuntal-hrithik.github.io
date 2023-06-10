import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kuntal-hrithik",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`+ ""+ ml-[-100px] flex h-14 w-40 items-center justify-between rounded-md bg-gray-500 px-4 duration-300 hover:ml-[-10px] ${link.style} `}
          >
            <a
              href={link.href}
              download={link.download}
              target="_blank"
              className="flex w-full items-center justify-between text-white"
            >
              <>{link.child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
