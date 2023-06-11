import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black to-gray-800 bg-fixed">
      <Navbar />

      <main className="h-full w-full pt-20">
        <Home />
        <SocialLinks />
      </main>
      <About />
      <Portfolio />
      <Experience />
    </div>
  );
};

export default App;
