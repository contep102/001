import React from "react";
import "./chat.css";
import { user } from "../../asset/data/user";
const Chat = () => {
  return (
    <div className="h-screen w-full">
      <div className="chat-seo w-1/4 h-full flex justify-center flex-col">
        <div className="w-full flex pb-8 justify-center">
          <input
            type="text"
            className="chat-seo rounded-lg font-semibold outline-none w-48 p-4 h-10"
            placeholder="Search..."
          />
          <button className=" bg-white ml-4 h-10 w-24 chat-seo rounded-lg">
            <p className="text-sm font-semibold">Submit</p>
          </button>
        </div>
        <div className="overflow-scroll rounded-xl max-h-96 mt-12">
          {user.map((item) => (
            <div className="flex items-center hover:bg-slate-200 p-4 justify-between ">
              <div className="flex items-center">
                <div>
                  <img className="w-12 h-12" src={item.pic} alt="" />
                </div>
                <div className="ml-6">
                  <p className="m-0 p-0">{item.name}</p>
                  <p className="m-0 p-0">{item.rank}</p>
                </div>
              </div>
              <div>
                <p>{item.datte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
