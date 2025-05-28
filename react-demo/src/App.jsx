import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./Signin";
import SignUp from "./Signup";

const Home = ({ isLoggedIn }) => (
  <main
    className="flex-grow flex items-center justify-center relative"
    style={{
      backgroundImage: `url(${isLoggedIn 
        ? "https://algonex-academy.github.io/algonex/img/carousel-2.jpg"
        : "https://algonex-academy.github.io/algonex/img/carousel-1.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Blur the background image */}
    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-4xl text-sky-400 font-bold uppercase tracking-wide">ALGONEX</h1>
      <p className="text-2xl mt-4 font-semibold text-center">
        The Best Learning Platform
        <br />
        Empower Your Future with Cutting-Edge IT Courses
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 bg-teal-500 hover:bg-teal-700 text-white font-bold rounded shadow-lg">
          Read More
        </button>
        <button className="px-6 py-3 border-2 border-white text-white font-bold rounded shadow-lg hover:bg-white hover:text-black transition">
          Join Now
        </button>
      </div>
    </div>
  </main>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
