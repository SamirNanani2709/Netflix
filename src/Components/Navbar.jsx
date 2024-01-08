import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollPosition > 10;

  const handelLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`fixed ${
        isScrolled ? "bg-black" : "bg-black/50"
      } flex w-full p-4 items-center justify-between z-[100]`}
    >
      {user?.email ? (
        <Link to="/home">
          <h1 className="uppercase text-[red] font-bold max-[640px]:text-3xl md:text-5xl cursor-pointer">
            Netflix
          </h1>
        </Link>
      ) : (
        <Link to="/">
          <h1 className="uppercase text-[red] font-bold max-[640px]:text-3xl md:text-5xl cursor-pointer">
            Netflix
          </h1>
        </Link>
      )}

      {user?.email ? (
        <div>
          <Link to="/Profile">
            <button className="capitalize pr-4">Profile</button>
          </Link>

          <button
            onClick={handelLogout}
            className="capitalize bg-[red] rounded-md cursor-pointer px-6 py-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className="capitalize pr-4">Login</button>
          </Link>

          <Link to="/Signup">
            <button className="capitalize bg-[red] rounded-md cursor-pointer px-6 py-2">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
