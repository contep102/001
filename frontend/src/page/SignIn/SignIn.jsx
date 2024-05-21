import React from "react";
import "./signin.css";
const SignIn = () => {
  return (
    <div className="flex items-center justify-center w-full h-full cont">
      <div className="bg-white h-max w-max p-6 rounded-xl signin-main">
        <div className="pb-8 font-semibold text-2xl">Sign In</div>
        <div className="w-max flex flex-col h-max ">
          <label htmlFor="" className=" text-sm font-semibold pb-2">
            Username
          </label>
          <input
            className=" signin-main rounded-lg w-96 outline-none p-2 h-10"
            type="text"
          />
        </div>
        <div className="w-max flex flex-col h-max pt-8">
          <label htmlFor="" className="text-sm font-semibold pb-2">
            Password
          </label>
          <input
            className="signin-main rounded-lg w-96 outline-none p-2 h-10"
            type="text"
          />
        </div>
        <div className="w-full flex justify-end font-semibold p-2">
          <p>Forgot password?</p>
        </div>
        <div>
          <div className="bg-black flex items-center justify-center rounded-xl w-full h-10">
            <p className="text-white">Get Started</p>
          </div>
        </div>
        <div className="flex">
          <p>Don't have an account? </p>
          <p className="ml-1 text-black font-semibold"> Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
