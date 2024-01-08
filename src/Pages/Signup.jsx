import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <img
          className=" w-full h-full object-cover sm:block absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 w-full h-screen top-0 left-0 fixed" />
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/70">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-4xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-[#333333] rounded-md"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-[#333333] rounded-md"
                  type="password"
                  placeholder="Password"
                />
                <button className="capitalize bg-[red] rounded-md cursor-pointer py-3 my-6 ">
                  Sign up
                </button>
                {/* <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div> */}
                <p className="py-1">
                  <span className="text-gray-500">
                    Already subscribe to Netflix?
                  </span>
                  <Link to="/login">Login In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
