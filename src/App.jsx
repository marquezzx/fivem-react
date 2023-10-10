import { Menu } from "./components/Menu";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const eventListener = ({ data }) => {
      if (data) {
        navigate(data.setVisible ? "/ui" : "/")
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
