import { Menu } from "./components/Menu";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "./hooks/useNavigate";

export default function App() {
  useEffect(() => {
    const eventListener = ({ data }) => {
      if (data) {
        if(typeof data.setVisible === "boolean") useNavigate(data.setVisible ? "/ui" : "/")
        console.log("Received:",data)
      }
    };
    window.addEventListener("message", eventListener);
    return () => {
      window.removeEventListener("message", eventListener);
    };
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/ui" element={<Menu/>}/>
      </Routes>
    </>
  );
}
