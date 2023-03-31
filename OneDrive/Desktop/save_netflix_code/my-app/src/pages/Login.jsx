import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth(); // should be same as value passed from authproviders
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await logIn(email, password); // goes to login function in authcontext.js file
      navigate("/");
      alert("logIn successfully");
    } catch (error) {
      // alert(error);
      seterror(error.message);
    }
  };

  console.log(email);
  return (
    <>
      <div className="w-screen h-screen">
        <div className="absolute w-screen h-screen bg-black/60"></div>
        <div className="fixed w-full px-4 py-24  z-50 ">
          <div className=" max-w-[450px] h-[600px] mx-auto bg-black/75">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold text-white">Login</h1>
              {error ? (
                <p className="my-3 bg-red-400 h-[40px] p-3">{error}</p>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex flex-col py-5"
              >
                <input
                  className="p-3 bg-gray-700 text-white rounded "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type={"email"}
                  autoComplete="email"
                  placeholder=" Email"
                />
                <input
                  className="p-3 my-4 rounded bg-gray-700 text-white  "
                  type={"password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  autoComplete="current-password"
                  placeholder=" Password"
                />
                <button className="bg-red-600 h-[50px] my-3 rounded text-white">
                  {" "}
                  Login{" "}
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                </div>

                <p className="py-8">
                  <span className="text-gray-600 ">New to Netflix?</span>{" "}
                  <Link to="/signup" className="text-white">
                    Sign UP
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        <img
          className="w-screen h-screen "
          src="https://netflix-updated.ksiddanth.repl.co/IN-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="img"
        />
      </div>
    </>
  );
};

export default Login;
