import Home from "./page/Home/Home";
import "./asset/fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./page/SignIn/SignIn";
import SignUp from "./page/SignUp/SignUp";
import Chat from "./page/Chat/Chat";

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
