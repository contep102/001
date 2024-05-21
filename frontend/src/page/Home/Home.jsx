import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/sign-in");
  };
  return (
    <div className="flex w-full h-full cont">
      <div className="h-full w-1/4 ">
        <div className="h-2/4 w-full flex justify-end items-start">
          {" "}
          <div className="load-5 mt-10">
            <div className="ring-2">
              <div className="ball-holder">
                <div className="ball"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2/4 w-full flex justify-center items-start">
          <div className="load-7">
            <div className="square-holder">
              <div className="square"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/4 h-full flex items-center justify-center">
        <div className="load-10">
          <p className="text-6xl font-semibold">WELCOME</p>
          <div className="bar"></div>
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col items-center justify-center">
        <div>
          <div className="load-9 pb-24">
            <div className="spinner">
              <div className="bubble-1"></div>
              <div className="bubble-2"></div>
            </div>
          </div>
        </div>
        <div className="pb-28 flex items-center ">
          <button className="text-4xl" onClick={handle}>
            Next
          </button>
          <i className="text-3xl button-next ml-4 fa-regular fa-hand-point-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
