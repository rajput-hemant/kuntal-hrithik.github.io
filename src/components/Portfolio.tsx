import project from "/project.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: project,
    },
    {
      id: 2,
      src: project,
    },
    {
      id: 3,
      src: project,
    },
    {
      id: 4,
      src: project,
    },
    {
      id: 5,
      src: project,
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="border-b-4 border-gray-500  text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6 font-semibold">Check out some of my Projects</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="rounded-lg shadow-md shadow-gray-600"
            >
              <img
                src="/project.jpg"
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="item-center flex justify-center">
                <button className="m-4 w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="m-4 w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
