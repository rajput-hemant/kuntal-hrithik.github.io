import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-800">
      <Navbar />

      <main className="h-full w-full pt-20">
        <Home />
      </main>
    </div>
  );
};

export default App;
