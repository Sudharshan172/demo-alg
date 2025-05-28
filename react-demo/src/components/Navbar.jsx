import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert token presence to boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT token
    setIsLoggedIn(false);
    navigate("/"); // Redirect to Sign In page
  };

  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex">
          <img src="https://algonex-academy.github.io/algonex/img/web_logo.png" alt="Algonex Logo" className="h-10 w-auto mr-2" />
          <h1 className="text-sky-400 text-3xl font-bold ">Algonex</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-center">
          <ul className="flex space-x-6 items-center">
            <li><Link to="/">HOME</Link></li>
            <li className="relative group">
              <span className="cursor-pointer inline-flex items-center">
                COURSES ▼
              </span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-md z-50 w-40">
                <li><Link to="/course/course1" className="block px-4 py-2 hover:bg-gray-100">COURSE 1</Link></li>
                <li><Link to="/course/course2" className="block px-4 py-2 hover:bg-gray-100">COURSE 2</Link></li>
                <li><Link to="/course/course3" className="block px-4 py-2 hover:bg-gray-100">COURSE 3</Link></li>
              </ul>
            </li>
            <li><Link to="/live-news">CAREERS</Link></li>
            <li><Link to="/aboutus">ABOUT US</Link></li>
            <li><Link to="/contactus">CONTACT US</Link></li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="hidden sm:flex space-x-4">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Logout
            </button>
          ) : (
            <>
              <Link to="/signin" className="bg-white text-blue-600 px-2 py-2 rounded hover:bg-gray-100 transition">Sign In</Link>
              <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">Sign Up Now</Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
