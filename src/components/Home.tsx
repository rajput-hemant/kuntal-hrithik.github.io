import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="item-center mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
      <div className="flex w-full flex-col items-center justify-center gap-y-4">
        <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
          I'm a Full Stack Developer
        </h2>

        <p className="max-w-md py-4 text-center text-gray-400">
          I am a Student. Currently, I love to work on web applications using
          technoligies like React, tailwind ,Next js and Typescript.
        </p>

        <div>
          <button className="group my-2 flex w-fit items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white">
            Portfolio
            <span className="duration-300 group-hover:translate-x-1">
              <MdKeyboardArrowRight className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="flex w-full items-end justify-center md:justify-end">
        <img
          src="/luffy.png"
          alt="my personal profile"
          className="aspect-square max-w-sm object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
