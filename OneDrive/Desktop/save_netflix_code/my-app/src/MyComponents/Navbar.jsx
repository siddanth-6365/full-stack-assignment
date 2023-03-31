import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
const Navbar = () => {
  const { user, logout } = UserAuth();
  // console.log(user);  // to get user details
  const navigate = useNavigate();

  const logoutfun = async () => {
    // e.preventDefault();
    try {
      await logout();
      navigate("/");
      alert("LogOut successfully");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h2 className="text-red-600 text-4xl font-bold cursor-pointer ">
          NETFLIX
        </h2>
      </Link>
      {user?.email ? (
        <div className="flex">
          <Link to="/login">
            <button className="text-white pr-6 pt-3 text-xl ">Account</button>
          </Link>
          <Link to="/signup">
            <button
              onClick={logoutfun}
              className="text-white bg-red-600 px-5 py-3 rounded-lg cursor-pointer "
            >
              {" "}
              LogOut{" "}
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex">
          <Link to="/login">
            <button className="text-white pr-6 pt-3 text-xl ">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-red-600 px-5 py-3 rounded-lg cursor-pointer ">
              {" "}
              Sign Up{" "}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
